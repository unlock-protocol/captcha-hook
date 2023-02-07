# Captcha Hook for Locks

This project implements an Unlock PublicLock Hook that can be used on PublicLocks to ensure that users went through the Unlock front-end when sending their purchase transactions.

The Unlock Protocol team has deployed and verified a version of this hook on the following networks:

Production networks:

- `0xA0863a0B58457A86c937e91533e3F6B8dA27cf4b` on [Polygon](https://polygonscan.com/address/0xA0863a0B58457A86c937e91533e3F6B8dA27cf4b)
- `0x6E422f8eDCE3586e8c384f7e602D3b5706463e12` on [Gnosis Chain](https://gnosisscan.io/address/0x6E422f8eDCE3586e8c384f7e602D3b5706463e12)
- `0x88ed81de2d62849B337c3f31cd84D041bF26A38C` on [BSC](https://bscscan.com/address/0x88ed81de2d62849B337c3f31cd84D041bF26A38C)
- `0x0959482CbFB3c3C85ECd7bf690a0cde808eE8471` on [Mainnet](https://etherscan.io/address/0x0959482CbFB3c3C85ECd7bf690a0cde808eE8471)
- `0x639143cbf90F27eA5Ce4b3A7D869d4D7878009A5` on [Optimism](https://optimistic.etherscan.io/address/0x639143cbf90F27eA5Ce4b3A7D869d4D7878009A5)
- `0x2499D94880B30fA505543550ac8a1e24cfFeFe78` on [Avalanche](https://snowtrace.io/address/0x2499D94880B30fA505543550ac8a1e24cfFeFe78)
- `0x80E085D7591C61153D876b5171dc25756a7A3254` on Celo
- `0xF6963D3c395A7914De77f771C2fC44b47B8379AC` on [Arbitrum](https://arbiscan.io/address/0xF6963D3c395A7914De77f771C2fC44b47B8379AC)

Test networks:

- `0xbBBdD46ef548712c203d306F6587336EC15E0d7f` on [Goerli](https://goerli.etherscan.io/address/0xbBBdD46ef548712c203d306F6587336EC15E0d7f)
- `0x639143cbf90F27eA5Ce4b3A7D869d4D7878009A5` on [Mumbai](https://mumbai.polygonscan.com/address/0x639143cbf90F27eA5Ce4b3A7D869d4D7878009A5)

## Example

This lock deployed is deployed on Goerli and uses this captcha hook. You can only purchase a key [through this checkout URL](https://app.unlock-protocol.com/checkout?paywallConfig=%7B%22locks%22%3A%7B%220xbd4907ffedc56f97d3fdc13493a94144c8088cda%22%3A%7B%22network%22%3A5%2C%22skipRecipient%22%3Atrue%2C%22name%22%3A%22%22%2C%22captcha%22%3Atrue%2C%22password%22%3Afalse%2C%22promo%22%3Afalse%2C%22emailRequired%22%3Afalse%2C%22maxRecipients%22%3Anull%2C%22dataBuilder%22%3A%22%22%7D%7D%2C%22pessimistic%22%3Atrue%2C%22skipRecipient%22%3Atrue%7D).

## Dev

You can deploy the hook on other chains by adding the chain to the `hardhat.config.js` config file and calling:

```
yarn run hardhat run scripts/deploy.js --network my-network
```

To verify, call :

```
yarn run hardhat verify --network my-network 0xhook-address 0x22c095c69c38b66afAad4eFd4280D94Ec9D12f4C
```

Running tests:

```
yarn run hardhat test test/sample-test.js
```

## Front-end

Please, make sure you use the `captcha` option in the `paywallConfig` object for the captcha to actually be completed and transactions to go through.
