import { ethers } from "hardhat";

export const getWallets = async (cntWallet: number) => {
  const mnemonic = process.env.DEV_GAME_ROLE_MNEMONIC;
  console.log("mnemonic", mnemonic);
  const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic!);

  const wallets: any = [];
  for (let i = 0; i < cntWallet; i++) {
    const wallet = hdNode.derivePath(`m/44'/60'/0'/0/${i}`);
    wallets.push(wallet);
  }
  return wallets;
};
