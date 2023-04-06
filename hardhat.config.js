require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "goerli",
  networks: {
    hardhat:{},
    goerli:{
      url: "https://goerli.infura.io/v3/ba292433385a46808635f242c994220d",
      accounts: ["576ea9811b6115f171e8f572030df4d980626f3a4578ea3fec6c54a2c2fdd47e"]
    }
  },
  etherscan: {
    apiKey: "DW3K7K8DF4B28KNMYWBFCMTNJ7DD2YJS48",
  }
};
