import LT_PUZZLE from "../../../../../artifacts/LTPuzzle.json";
import { ClientWallet } from "@/lib/wallet/ClientWallet";
import { TransactionReceipt } from "viem";

export class ClientLTPuzzle {
  private constructor(private readonly _wallet: ClientWallet) {}

  /**
   * Get instance
   * @param rpcURL RPC URL
   * @return {ClientLTPuzzle} instance
   */
  public static instance(): ClientLTPuzzle {
    const wallet = ClientWallet.instance();
    return new ClientLTPuzzle(wallet);
  }

  // ---------------------------------------------------------
  // getter
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // setter
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // main logic
  // ---------------------------------------------------------

  /**
   * mint
   * @param tokenId token ID
   * @param book book
   * @return {Promise<TransactionReceipt>} receipt
   */
  mint = async (tokenId: BigInt): Promise<TransactionReceipt> => {
    const [walletClient, address] = await this._wallet.get();

    const { request } = await this._wallet.client.simulateContract({
      account: address,
      address: process.env.NEXT_PUBLIC_LT_PUZZLE_CONTRACT as `0x${string}`,
      abi: LT_PUZZLE.abi,
      functionName: "mint",
      args: [tokenId],
    });
    const hash = await walletClient.writeContract(request);
    return await this._wallet.client.waitForTransactionReceipt({ hash });
  };
}
