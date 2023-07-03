import { ethers, upgrades } from "hardhat";
import { LT_PUZZLE_PROXY_ADDRESS } from "../const";

async function main() {
  const addr = LT_PUZZLE_PROXY_ADDRESS;

  console.log("---------------------------------------------");
  console.log("--- Start LTPuzzle Upgrade ------------------");
  console.log("---------------------------------------------");
  console.log("");

  console.log("--- Upgrade ---------------------------------");

  console.log("Upgrading...");

  const [deployer] = await ethers.getSigners();
  console.log("Upgrading contracts with account: ", deployer.address);
  console.log("Upgrade LTPuzzleProxy address: ", addr);

  const LTPuzzle = await ethers.getContractFactory("LTPuzzle");
  const ltPuzzle = await upgrades.upgradeProxy(addr, LTPuzzle);
  await ltPuzzle.deployed();
  console.log(
    "Upgraded LTPuzzle implementation:",
    await upgrades.erc1967.getImplementationAddress(addr)
  );

  console.log("Completed upgrade");

  console.log("");
  console.log("---------------------------------------------");
  console.log("--- End LTPuzzle Upgrade --------------------");
  console.log("---------------------------------------------");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
