import { ethers, upgrades } from "hardhat";

async function main() {
  console.log("---------------------------------------------");
  console.log("--- Start LTPuzzle Deploy -------------------");
  console.log("---------------------------------------------");
  console.log("");

  console.log("--- Deploy ----------------------------------");

  console.log("Deploying...");

  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account: ", deployer.address);

  const LTPuzzle = await ethers.getContractFactory("LTPuzzle");
  const ltPuzzle = await upgrades.deployProxy(LTPuzzle, [], {
    kind: "uups",
    initializer: "initialize",
  });
  await ltPuzzle.deployed();
  console.log("Deployed LTPuzzleProxy address: ", ltPuzzle.address);
  console.log(
    "LTPuzzle implementation deployed to:",
    await upgrades.erc1967.getImplementationAddress(ltPuzzle.address),
  );

  console.log("Completed deployment");

  console.log("");
  console.log("---------------------------------------------");
  console.log("--- End LTPuzzle Deploy ---------------------");
  console.log("---------------------------------------------");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
