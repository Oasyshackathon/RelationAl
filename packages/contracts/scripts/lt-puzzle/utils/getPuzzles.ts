import { LT_PUZZLE_PROXY_ADDRESS } from "../../const";
import { ethers } from "hardhat";

async function main() {
  const addr = LT_PUZZLE_PROXY_ADDRESS;
  const LTPuzzle = await ethers.getContractFactory("LTPuzzle");
  const ltPuzzle = LTPuzzle.attach(addr);

  console.log("getPuzzles ------------------------------");
  console.log(await ltPuzzle.getPuzzles());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
