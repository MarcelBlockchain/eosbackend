const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Account = require('../models/account')

// creates account with hashed deviceID & mongodb generated ID and returns token to sign in

exports.account_signup = (req, res, next) => {
  // encrypt device ID, then search
  bcrypt.hash(req.body.deviceID, 10, (err, hash) => {
    if (err) return res.status(500).json({ err })
    Account.find({ deviceID: hash }).exec().then(acc => {
      if (acc.length >= 1) {
        return res.status(409).json({ message: 'Account already exists' })
      } else {
        const account = new Account({
          _id: new mongoose.Types.ObjectId(),
          deviceID: hash
        })
        account.save().then(result => {
          console.log(result)
          res.status(201).json({ message: 'Account created' })
        })
          .catch(err => {
            console.log(err)
            res.status(500).json({ err })
          })
      }
    })
  })
}

exports.account_login = (req, res, next) => {
  bcrypt.hash(req.body.deviceID, 10, (err, hash) => {
    if (err || !hash) return res.status(500).json({ err })

    Account.find({ deviceID: hash }).exec().then(acc => {
      if (acc.length < 1) {
        return res.status(401).json({
          message: 'Auth failed'
        })
      }
      const token = jwt.sign(
        { deviceID: acc[0].deviceID },
        process.env.JWT_KEY,
        { expiresIn: '7d' }
      )
      return res.status(200).json({ message: 'Auth successful', token })
    })
      .catch(err => {
        console.log(err)
        res.status(500).json({ err })
      })
  })
}
