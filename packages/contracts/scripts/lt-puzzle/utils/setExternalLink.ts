import { LT_PUZZLE_EXTERNAL_LINK, LT_PUZZLE_PROXY_ADDRESS } from "../../const";
import { ethers } from "hardhat";

async function main() {
  const addr = LT_PUZZLE_PROXY_ADDRESS;
  const LTPuzzle = await ethers.getContractFactory("LTPuzzle");
  const ltPuzzle = LTPuzzle.attach(addr);

  console.log("setExternalLink ------------------------------");
  console.log(`Before: ${await ltPuzzle.getExternalLink()}`);
  await (await ltPuzzle.setExternalLink(LT_PUZZLE_EXTERNAL_LINK)).wait();
  console.log(`After : ${await ltPuzzle.getExternalLink()}`);
  console.log("DONE!!!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
