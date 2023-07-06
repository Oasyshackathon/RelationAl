import { oasysSand } from "@/const/chainParams";
import {
  Address,
  PublicClient,
  WalletClient,
  createPublicClient,
  createWalletClient,
  custom,
  http,
} from "viem";

export class ClientWallet {
  private static _instance: ClientWallet;
  private constructor(public readonly client: PublicClient) {}

  /**
   * Create instance
   * @return {ClientWallet} instance
   */
  public static instance(): ClientWallet {
    if (!this._instance) {
      const client = createPublicClient({
        chain: oasysSand,
        transport: http(),
      });
      this._instance = new ClientWallet(client);
    }
    return this._instance;
  }

  /**
   * Get
   * @return {Promise<[WalletClient, Address]>}
   */
  get = async (): Promise<[WalletClient, Address]> => {
    const { ethereum } = window as any;
    if (!_isInstallWallet(ethereum)) throw new Error("Not found wallet.");
    const client = createWalletClient({
      chain: oasysSand,
      transport: custom(ethereum),
    });
    const addresses = await client.getAddresses();
    if (addresses.length === 0) throw new Error("Not connect address.");
    return [client, addresses[0]];
  };
}

/**
 * Is install wallet
 * @param ethereum window.ethereum
 * @return {boolean} is install wallet
 */
const _isInstallWallet = (ethereum: any): boolean => {
  return typeof ethereum !== "undefined";
};
