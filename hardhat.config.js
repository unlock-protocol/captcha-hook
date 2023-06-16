require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@unlock-protocol/hardhat-plugin");
const networks = require('@unlock-protocol/networks').networks


let accounts = []
if (process.env.PKEY) {
  accounts.push(process.env.PKEY)
}

const networksByNames = Object.keys(networks).reduce((acc, networkId) => {
  const network = networks[networkId]
  return {
    ...acc,
    [network.chain]: {
      accounts,
      url: network.provider,
    },
  }
}, {})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.7',
    // optimizer is required to deploy unlock contracts
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: networksByNames,
  etherscan: {
    apiKey: {
      arbitrumOne: 'W5XNFPZS8D6JZ5AXVWD4XCG8B5ZH5JCD4Y',
      gnosis: 'BSW3C3NDUUBWSQZJ5FUXBNXVYX92HZDDCV',
      polygon: 'W9TVEYKW2CDTQ94T3A2V93IX6U3IHQN5Y3',
      goerli: 'HPSH1KQDPJTNAPU3335G931SC6Y3ZYK3BF',
      mainnet: 'HPSH1KQDPJTNAPU3335G931SC6Y3ZYK3BF',
      rinkeby: 'HPSH1KQDPJTNAPU3335G931SC6Y3ZYK3BF',
      bsc: '6YUDRP3TFPQNRGGZQNYAEI1UI17NK96XGK',
      xdai: 'api-key',
      optimisticEthereum: 'V51DWC44XURIGPP49X85VZQGH1DCBAW5EC',
    },
  },
};
