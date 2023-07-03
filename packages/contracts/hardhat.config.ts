import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-contract-sizer";
import { HardhatUserConfig } from "hardhat/config";

require("dotenv").config();

const { DEV_PRIVATE_KEY, LOCAL_PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    local: {
      url: "http://localhost:8545",
      accounts: [LOCAL_PRIVATE_KEY as string],
    },
    sandverse: {
      url: "https://rpc.sandverse.oasys.games/",
      chainId: 20197,
      accounts: [DEV_PRIVATE_KEY as string],
      gasPrice: 0,
    },
  },
};

export default config;
