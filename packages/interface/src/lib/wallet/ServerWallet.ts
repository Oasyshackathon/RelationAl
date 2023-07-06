import { oasysSand } from "@/const/chainParams";
import {
  HDAccount,
  PublicActions,
  WalletClient,
  createWalletClient,
  http,
  publicActions,
} from "viem";
import { mnemonicToAccount } from "viem/accounts";

export class ServerWallet {
  public static readonly CNT_WALLET = 100;
  public static seedCnt = -1;

  private constructor() {}

  /**
   * Get wallet
   * nonce has been used 対策済みウォレットアドレス取得
   * @return {WalletClient} wallet
   */
  public static get(): [WalletClient & PublicActions, HDAccount] {
    ServerWallet.seedCnt++;
    const account = mnemonicToAccount(process.env.GAME_ROLE_MNEMONIC!, {
      addressIndex: ServerWallet.seedCnt % ServerWallet.CNT_WALLET,
    });
    const client = createWalletClient({
      chain: oasysSand,
      transport: http(),
    }).extend(publicActions);

    console.log(`ServerWallet: ${ServerWallet.seedCnt}`);
    return [client, account];
  }
}
