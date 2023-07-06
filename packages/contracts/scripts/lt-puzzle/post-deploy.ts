import { LT_PUZZLE_EXTERNAL_LINK, LT_PUZZLE_PROXY_ADDRESS } from "../const";
import { getWallets } from "../utils";
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

  console.log("setExternalLink ------------------------------");
  console.log(`Before: ${await ltPuzzle.getExternalLink()}`);
  await (await ltPuzzle.setExternalLink(LT_PUZZLE_EXTERNAL_LINK)).wait();
  console.log(`After : ${await ltPuzzle.getExternalLink()}`);
  console.log("DONE!!!");

  console.log("generatePuzzle ------------------------------");
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

  console.log("grantGameRoleToMnemonic -----------------------------");
  const role = ethers.utils.id("GAME_ROLE");

  console.log("Before: ");
  const oldRoleMemberCount = await ltPuzzle.getRoleMemberCount(role);
  for (let i = 0; i < Number(oldRoleMemberCount); i++) {
    console.log(await ltPuzzle.getRoleMember(role, i));
  }

  const cnt = 100;
  const wallets = await getWallets(cnt);
  for (let i = 0; i < wallets.length; i++) {
    console.log(
      `wallet ${
        i + 1
      } -------------------------------------------------------------`,
    );
    console.log(`address: ${wallets[i].address}`);
    await (await ltPuzzle.grantRole(role, wallets[i].address)).wait();
    console.log(`DONE!!!`);
  }

  console.log("After : ");
  const newRoleMemberCount = await ltPuzzle.getRoleMemberCount(role);
  for (let i = 0; i < Number(newRoleMemberCount); i++) {
    console.log(await ltPuzzle.getRoleMember(role, i));
  }

  console.log("");
  console.log("---------------------------------------------");
  console.log("--- End LTPuzzle Post Deploy ----------------");
  console.log("---------------------------------------------");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
