import { Chain } from "wagmi";

export const oasysSand = {
  id: 20197,
  name: "Sandverse",
  network: "Sandverse",
  nativeCurrency: {
    name: "Oasys",
    symbol: "OAS",
    decimals: 18,
  },
  rpcUrls: {
    public: { http: ["https://rpc.sandverse.oasys.games/"] },
    default: { http: ["https://rpc.sandverse.oasys.games/"] },
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://scan.sandverse.oasys.games/" },
  },
} as const satisfies Chain;

export const mchVerseTestnet = {
  id: 420,
  name: "MCH Verse Testnet",
  network: "mchVerseTestnet",
  nativeCurrency: {
    decimals: 18,
    name: "Oasys",
    symbol: "OAS",
  },
  rpcUrls: {
    public: { http: ["https://rpc.oasys.sand.mchdfgh.xyz/"] },
    default: { http: ["https://rpc.oasys.sand.mchdfgh.xyz/"] },
  },
  blockExplorers: {
    default: {
      name: "SnowTrace",
      url: "https://explorer.oasys.sand.mchdfgh.xyz/",
    },
  },
} as const satisfies Chain;
