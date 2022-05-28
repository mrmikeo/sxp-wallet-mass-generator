# sxp-wallet-mass-generator
> Generate a lot a Solar SXP wallets 👛

![Demo gif](./demo.gif)

Generate a lot of [SXP](https://solar.org/) wallets quickly. This can be useful to find a fun wallet address.

Uses Node.js [Worker Threads](https://nodejs.org/api/worker_threads.html) for optimal performance (will use a Polyfill if Node.js version is less than 12).

## Install

```
$ yarn global add https://github.com/mrmikeo/sxp-wallet-mass-generator
# or npm i -g https://github.com/mrmikeo/sxp-wallet-mass-generator
```

## Usage

```
$ sxp-wallet-mass-generator --help

  Usage
    $ sxp-wallet-mass-generator
  
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
```

## Output
Generated wallets will be appended to your output file with the following format:

```
AazdtKbM6dwBPmRpdYySE4GGUyGhCpKmCM;topic crush heart chase return breeze boil laugh silly antenna hen width
AH3tAPYZyYeLFb6nEcGyY8xKY2WmfQqv2W;forest pepper sauce flat flame object basic odor wall dutch mail mosquito
AM3DCuCdZtLEsC9KFDqU7Dhme7Tce7D6mF;clerk rookie direct saddle mesh eye confirm have silly doll enact profit
ASfKW3gsjF3FMyXgyp3WK77f2k6rdCsNKZ;fence banner dirt uniform dawn fan ribbon ill person banana ridge stone
```

___

## Programmatic usage
### Install

```
$ yarn add https://github.com/mrmikeo/sxp-wallet-mass-generator
# or npm i https://github.com/mrmikeo/sxp-wallet-mass-generator
```

### `generateWallets`
Generate some wallets in memory and returns them. If you generate a lot (I mean, a very huge amount), you may run out of memory and should use [generateWalletsFs](#generateWalletsFs) instead.

```ts
import { generateWallets } from 'sxp-wallet-mass-generator'

const wallets = await generateWallets({
  amount: 500,      // Amount of wallets
  network: 'devnet' // Target ARK network
})

console.log(wallets)
// => { address: string; passphrase: string }[]
```

### `generateWalletsFs`
Generate some wallets and append them to a file as they gets generated.\
Wallets are not stored in memory after generation, there's no limit to the amount of wallets you can generate with this.

```ts
import { generateWalletsFs } from 'sxp-wallet-mass-generator'

await generateWalletsFs({
  file: '_sxpWallets.txt', // Output file
  amount: 500,             // Amount of wallets
  network: 'devnet',       // Target ARK network
  logs: false              // Hide console logging
})
// => Wallets were appended to `_arkWallets.txt` 
```

## Benchmark
Intel Core i7-6700HQ CPU @ 2.60GHz (8 cores)

```
Generated 20000 wallets to "_sxpWallets.txt" in 208s.
=> 96.15 wallets/s
```

## Related
 - [ipfs-ark-stamp](https://github.com/rigwild/ipfs-ark-stamp) - 📝 Add files to IPFS and stamp its IPFS CID hash permanently on the ARK Blockchain

## License
[The MIT license](./LICENSE)
