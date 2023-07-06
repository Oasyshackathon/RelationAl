import { LT_PUZZLE_PROXY_ADDRESS } from "../../const";
import { ethers } from "hardhat";

async function main() {
  const addr = LT_PUZZLE_PROXY_ADDRESS;
  const LTPuzzle = await ethers.getContractFactory("LTPuzzle");
  const ltPuzzle = LTPuzzle.attach(addr);

  console.log("generatePuzzle ------------------------------");
  const [deployer] = await ethers.getSigners();
  const nonce = ethers.BigNumber.from(
    ethers.utils.keccak256(
      ethers.utils.toUtf8Bytes(
        deployer.address + Math.floor(Date.now() / 1000),
      ),
    ),
  );
  const puzzle = {
    title: "ウミガメのスープ",
    description:
      "ある男が、とある海の見えるレストランで「ウミガメのスープ」を注文した。スープを一口飲んだ男は、それが本物の「ウミガメのスープ」であることを確認し、勘定を済ませて帰宅した後、自殺した。一体、なぜ？",
    explanation:
      "男はかつて数人の仲間と海で遭難し、とある島に漂着した。食料はなく、仲間たちは生き延びるために力尽きて死んだ者の肉を食べ始めたが、男はかたくなに拒否していた。見かねた仲間の一人が、「これはウミガメのスープだから」と嘘をつき、男に人肉のスープを飲ませ、救助が来るまで生き延びさせた。男はレストランで飲んだ「本物のウミガメのスープ」とかつて自分が飲んだスープの味が違うことから真相を悟り、絶望のあまり自ら命を絶った。",
  };
  await (await ltPuzzle.generatePuzzle(nonce, puzzle)).wait();
  console.log("DONE!!!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
