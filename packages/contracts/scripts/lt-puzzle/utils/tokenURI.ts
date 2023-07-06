import { LT_PUZZLE_PROXY_ADDRESS } from "../../const";
import { ethers } from "hardhat";

async function main() {
  const tokenId = 0;

  const addr = LT_PUZZLE_PROXY_ADDRESS;
  const LTPuzzle = await ethers.getContractFactory("LTPuzzle");
  const ltPuzzle = LTPuzzle.attach(addr);

  console.log("tokenURI ------------------------------");
  console.log(await ltPuzzle.tokenURI(tokenId));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
