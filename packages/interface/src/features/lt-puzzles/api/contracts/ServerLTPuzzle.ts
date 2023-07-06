import LT_PUZZLE from "../../../../../artifacts/LTPuzzle.json";
import { ServerWallet } from "@/lib/wallet/ServerWallet";
import {
  HDAccount,
  PublicActions,
  TransactionReceipt,
  WalletClient,
  keccak256,
  toHex,
} from "viem";

export class ServerLTPuzzle {
  private constructor(
    private readonly _client: WalletClient & PublicActions,
    private readonly _account: HDAccount,
  ) {}

  /**
   * Get instance
   * @param rpcURL RPC URL
   * @return {ServerLTPuzzle} instance
   */
  public static instance(): ServerLTPuzzle {
    const [client, account] = ServerWallet.get();
    return new ServerLTPuzzle(client, account);
  }

  // ---------------------------------------------------------
  // getter
  // ---------------------------------------------------------

  /**
   * getNonceToTokenID
   * @param nonce nonce
   * @return {Promise<any>} token ID
   */
  getNonceToTokenID = async (nonce: BigInt): Promise<any> => {
    return await this._client.readContract({
      address: process.env.NEXT_PUBLIC_LT_PUZZLE_CONTRACT as `0x${string}`,
      abi: LT_PUZZLE.abi,
      functionName: "getNonceToTokenID",
      args: [nonce],
    });
  };

  // ---------------------------------------------------------
  // setter
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // main logic
  // ---------------------------------------------------------

  /**
   * getNonce
   * @return {bigint} nonce
   */
  getNonce = (): bigint => {
    return BigInt(
      keccak256(toHex(this._account.address + Math.floor(Date.now() / 1000))),
    );
  };

  /**
   * generatePuzzle
   * @param nonce nonce
   * @param title title
   * @param description description
   * @param explanation explanation
   * @return {Promise<TransactionReceipt>} receipt
   */
  generatePuzzle = async (
    nonce: bigint,
    title: string,
    description: string,
    explanation: string,
  ): Promise<TransactionReceipt> => {
    const { request } = await this._client.simulateContract({
      account: this._account,
      address: process.env.NEXT_PUBLIC_LT_PUZZLE_CONTRACT as `0x${string}`,
      abi: LT_PUZZLE.abi,
      functionName: "generatePuzzle",
      args: [nonce, [title, description, explanation]],
    });
    const hash = await this._client.writeContract(request);
    return await this._client.waitForTransactionReceipt({ hash });
  };
}
