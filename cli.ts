#!/usr/bin/env node
'use strict'

import meow from 'meow'
import updateNotifier from 'update-notifier'

import { generateWalletsFs } from './index'

const cli = meow(
  `
    Usage
      $ ark-wallet-mass-generator
    
    Options
      --file -f         Output file [Default: "_sxpWallets.txt"]
      --amount -a       Amount of wallets to generate [Default: 100]
      --network -n      Blockchain network [Default: "devnet"]
      --no-logs         Hide all logging output
      --show-wallets    Print wallets to the terminal instead of the progress bar [Default: false]

    Examples
      $ sxp-wallet-mass-generator
      $ sxp-wallet-mass-generator --network="mainnet"
      $ sxp-wallet-mass-generator --file="_sxpWallets.txt" --amount 500000
      $ sxp-wallet-mass-generator --amount 500 --no-logs --network="testnet"
      $ sxp-wallet-mass-generator --show-wallets

    https://github.com/mrmikeo/sxp-wallet-mass-generator
`,
  {
    flags: {
      file: {
        type: 'string',
        alias: 'f'
      },
      amount: {
        type: 'number',
        alias: 'a'
      },
      network: {
        type: 'string',
        alias: 'n'
      },
      logs: {
        type: 'boolean',
        default: true
      },
      showWallets: {
        type: 'boolean'
      }
    }
  }
)

updateNotifier({ pkg: cli.pkg as updateNotifier.Package }).notify()
generateWalletsFs(cli.flags)
