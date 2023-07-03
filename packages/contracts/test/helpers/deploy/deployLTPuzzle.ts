import { ethers, upgrades } from "hardhat";

export async function deployLTPuzzle() {
  const LTPuzzle = await ethers.getContractFactory("LTPuzzle");
  const ltPuzzleProxy = await upgrades.deployProxy(LTPuzzle, [], {
    kind: "uups",
    initializer: "initialize",
  });
  await ltPuzzleProxy.deployed();
  const ltPuzzle = LTPuzzle.attach(ltPuzzleProxy.address);
  return {
    ltPuzzle,
  };
}
