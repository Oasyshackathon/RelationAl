import { LT_PUZZLE_PROXY_ADDRESS } from "../const";
import { ethers } from "hardhat";

async function main() {
  const addr = LT_PUZZLE_PROXY_ADDRESS;

  console.log("---------------------------------------------");
  console.log("--- Start LTPuzzle Post Deploy --------------");
  console.log("---------------------------------------------");
  console.log("");

  console.log("--- Post Deploy -----------------------------");

  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account: ", deployer.address);

  const LTPuzzle = await ethers.getContractFactory("LTPuzzle");
  const ltPuzzle = LTPuzzle.attach(addr);

  console.log("");
  console.log("---------------------------------------------");
  console.log("--- End LTPuzzle Post Deploy ----------------");
  console.log("---------------------------------------------");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
