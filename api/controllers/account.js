const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Account = require('../models/account')

// TODO: accounts needed at all, or solely jwt_deviceID sufficient?
// creates account with deviceID & email and returns token to sign in

// FIXME: create acc using hashed device ID
exports.get_token = (req, res, next) => {
  const token = jwt.sign(
    { deviceID: acc[0].deviceID },
    process.env.JWT_KEY,
    { expiresIn: '7d' } // TODO: when?
  )

  return res.status(200).json({ message: 'Auth successful', token })

//   Account.find({ email: req.body.email }).exec().then(acc => {
//     if (acc.length > 1) {
//       return res.status(409).json({ message: 'Mail exists' })
//     } else {
//       bcrypt.hash(req.body.deviceID, 10, (err, hash) => {
//         if (err) return res.status(500).json({ err })
//         else {
//           const account = new Account({
//             _id: new mongoose.Types.ObjectId(),
//             email: req.body.email,
//             deviceID: hash
//           })
//           account.save().then(result => {
//             console.log(result)
//             res.status(201).json({ message: 'Account created' })
//           })
//             .catch(err => {
//               console.log(err)
//               res.status(500).json({ err })
//             })
//         }
//       })
//     }
//   })
}

exports.account_login = (req, res, next) => {
  Account.find({ deviceID: req.body.deviceID }).exec().then(acc => {
    if (acc.length < 1) {
      return res.status(401).json({
        message: 'Auth failed'
      })
    }
    bcrypt.compare(req.body.deviceID, acc[0].deviceID, (err, result) => {
      if (err) {
        return res.status(401).json({
          message: 'Auth failed'
        })
      }
      if (result) {
        // TODO: what requirements for sign in? Device ID, email ?
        const token = jwt.sign(
          { deviceID: acc[0].deviceID },
          process.env.JWT_KEY,
          { expiresIn: '7d' } // TODO: when?
        )
        return res.status(200).json({ message: 'Auth successful', token })
      }
      res.status(401).json({ message: 'Auth failed ' })
    })
  })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err })
    })
}
