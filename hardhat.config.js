require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "https://eth-sepolia";
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "Key";
const COINMARKETCAP_API = process.env.COINMARKETCAP_API || "Key";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 6
    },
  },
  solidity: {
    compilers: [{ version: "0.8.9", }, { version: "0.8.7" }, { version: "0.8.4", }, { version: "0.6.6", }, { version: "0.6.0", settings: {}, }],
  },


etherscan: {
  apiKey: ETHERSCAN_API_KEY,
  customChains: [],
},
gasReporter: {
  enabled: false,
  outputFile: "gas-reporter.txt",
  noColors: true,
  currency: "USD",
  coinmarketCap: COINMARKETCAP_API,
  // token: "MATIC",
},
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
  mocha: {
    timeout: 300000, //300 secs
  }

};

