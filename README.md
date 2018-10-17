# EOS-BACKEND
eos-backend made by Marcel Morales  
using [eosjs](https://github.com/EOSIO/eosjs), [automated EOS installation](https://github.com/BlockMatrixNetwork/eos-mainnet) by BlockMatrix and Docker

## What it does
* installs a non-producing EOS node using [automated EOS installation](https://github.com/BlockMatrixNetwork/eos-mainnet) by BlockMatrix
* saves all transactions and action traces in separate mongodb
* public API to query this mongodb
* public API to create EOS-accounts remotely
    * just send 'acc-name' and currency to pay [BTC, ETH, EOS]
* all in one Docker container

## Manual

#### Assumption
Have a basic server running. E.g a Digital Ocean droplet 18.04, 4 standard CPU cores, 8GB RAM (minimum), 160GB + extra 500GB XFS (!) storage  
Stronger CPU means faster syncing
* [Initial Server Setup Digital Ocean Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04) Step 5 not needed, just follow:
* [How to Set Up SSH Keys on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-1804)

... to be continued ...

#### Helpful links
https://eosnode.tools/

#### Props and Credits to
Blockmatrix & CryptoLions