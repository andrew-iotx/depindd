import { LinkItem } from "./projects"

export interface BlockchainInfo {
  slug: string
  title: string
  token: string
  logo: string
  links: LinkItem[]
}

// TODO: import from json files
export const blockchains: BlockchainInfo[] = [
  {
    slug: "solana",
    title: "Solana",
    token: "SOL",
    logo: "/images/blockchains/solana.jpeg",
    links: [
      { type: "website", url: "https://solana.com" },
      { type: "foundation", url: "" },
      { type: "company", url: "" },
      { type: "blog", url: "" },
      { type: "medium", url: "" },
      { type: "twitter", url: "https://twitter.com/solana" },
      { type: "reddit", url: "" },
      { type: "forum", url: "" },
      { type: "discord", url: "" },
      { type: "telegram", url: "" },
      { type: "youtube", url: "" },
      { type: "instagram", url: "" },
      { type: "linkedin", url: "" },
      { type: "tiktok", url: "" },
      { type: "facebook", url: "" },
      { type: "github", url: "" },
      { type: "whitepaper", url: "" },
      { type: "documentation", url: "" },
      { type: "governance", url: "" },
      { type: "tokenomics", url: "" },
      { type: "explorer", url: "https://solscan.io" },
      { type: "shop", url: "" },
      { type: "coingecko", url: "https://www.coingecko.com/en/coins/solana" },
      { type: "analytics", url: "" },
      { type: "crunchbase", url: "" },
      { type: "other", url: "" },
    ],
  },
  {
    slug: "polygon",
    title: "Polygon",
    token: "MATIC",
    logo: "/images/blockchains/polygon.jpeg",
    links: [
      { type: "website", url: "https://polygon.technology" },
      { type: "foundation", url: "" },
      { type: "company", url: "" },
      { type: "blog", url: "" },
      { type: "medium", url: "" },
      { type: "twitter", url: "https://twitter.com/0xPolygon" },
      { type: "reddit", url: "" },
      { type: "forum", url: "" },
      { type: "discord", url: "" },
      { type: "telegram", url: "" },
      { type: "youtube", url: "" },
      { type: "instagram", url: "" },
      { type: "linkedin", url: "" },
      { type: "tiktok", url: "" },
      { type: "facebook", url: "" },
      { type: "github", url: "" },
      { type: "whitepaper", url: "" },
      { type: "documentation", url: "" },
      { type: "governance", url: "" },
      { type: "tokenomics", url: "" },
      { type: "explorer", url: "https://etherscan.io" },
      { type: "shop", url: "" },
      { type: "coingecko", url: "https://www.coingecko.com/en/coins/polygon" },
      { type: "analytics", url: "" },
      { type: "crunchbase", url: "" },
      { type: "other", url: "" },
    ],
  },
  {
    slug: "iotex",
    title: "IoTeX",
    token: "IOTX",
    logo: "/images/blockchains/iotex.jpeg",
    links: [
      { type: "website", url: "https://iotex.io" },
      { type: "foundation", url: "" },
      { type: "company", url: "" },
      { type: "blog", url: "" },
      { type: "medium", url: "" },
      { type: "twitter", url: "https://twitter.com/iotex_io" },
      { type: "reddit", url: "" },
      { type: "forum", url: "" },
      { type: "discord", url: "" },
      { type: "telegram", url: "" },
      { type: "youtube", url: "" },
      { type: "instagram", url: "" },
      { type: "linkedin", url: "" },
      { type: "tiktok", url: "" },
      { type: "facebook", url: "" },
      { type: "github", url: "" },
      { type: "whitepaper", url: "" },
      { type: "documentation", url: "" },
      { type: "governance", url: "" },
      { type: "tokenomics", url: "" },
      { type: "explorer", url: "https://iotexscan.io" },
      { type: "shop", url: "" },
      { type: "coingecko", url: "https://www.coingecko.com/en/coins/iotex" },
      { type: "analytics", url: "" },
      { type: "crunchbase", url: "" },
      { type: "other", url: "" },
    ],
  },
  {
    slug: "algorand",
    title: "Algorand",
    token: "ALGO",
    logo: "/images/blockchains/algorand.jpeg",
    links: [
      { type: "website", url: "https://algorand.com" },
      { type: "foundation", url: "" },
      { type: "company", url: "" },
      { type: "blog", url: "" },
      { type: "medium", url: "" },
      { type: "twitter", url: "https://twitter.com/algorand" },
      { type: "reddit", url: "" },
      { type: "forum", url: "" },
      { type: "discord", url: "" },
      { type: "telegram", url: "" },
      { type: "youtube", url: "" },
      { type: "instagram", url: "" },
      { type: "linkedin", url: "" },
      { type: "tiktok", url: "" },
      { type: "facebook", url: "" },
      { type: "github", url: "" },
      { type: "whitepaper", url: "" },
      { type: "documentation", url: "" },
      { type: "governance", url: "" },
      { type: "tokenomics", url: "" },
      { type: "explorer", url: "https://algoexplorer.io" },
      { type: "shop", url: "" },
      { type: "coingecko", url: "https://www.coingecko.com/en/coins/algorand" },
      { type: "analytics", url: "" },
      { type: "crunchbase", url: "" },
      { type: "other", url: "" },
    ],
  },
  {
    slug: "bsc",
    title: "BSC",
    token: "BNB",
    logo: "/images/blockchains/bsc.png",
    links: [
      { type: "website", url: "https://www.bnbchain.org" },
      { type: "foundation", url: "" },
      { type: "company", url: "" },
      { type: "blog", url: "" },
      { type: "medium", url: "" },
      { type: "twitter", url: "https://twitter.com/BNBCHAIN" },
      { type: "reddit", url: "" },
      { type: "forum", url: "" },
      { type: "discord", url: "" },
      { type: "telegram", url: "" },
      { type: "youtube", url: "" },
      { type: "instagram", url: "" },
      { type: "linkedin", url: "" },
      { type: "tiktok", url: "" },
      { type: "facebook", url: "" },
      { type: "github", url: "" },
      { type: "whitepaper", url: "" },
      { type: "documentation", url: "" },
      { type: "governance", url: "" },
      { type: "tokenomics", url: "" },
      { type: "explorer", url: "https://bscscan.com" },
      { type: "shop", url: "" },
      { type: "coingecko", url: "https://www.coingecko.com/en/coins/bnb" },
      { type: "analytics", url: "" },
      { type: "crunchbase", url: "" },
      { type: "other", url: "" },
    ],
  },
  {
    slug: "constellation",
    title: "Constellation",
    token: "DAG",
    logo: "/images/blockchains/constellation.jpeg",
    links: [
      { type: "website", url: "https://constellationnetwork.io" },
      { type: "foundation", url: "" },
      { type: "company", url: "" },
      { type: "blog", url: "" },
      { type: "medium", url: "" },
      { type: "twitter", url: "https://twitter.com/conste11ation" },
      { type: "reddit", url: "" },
      { type: "forum", url: "" },
      { type: "discord", url: "" },
      { type: "telegram", url: "" },
      { type: "youtube", url: "" },
      { type: "instagram", url: "" },
      { type: "linkedin", url: "" },
      { type: "tiktok", url: "" },
      { type: "facebook", url: "" },
      { type: "github", url: "" },
      { type: "whitepaper", url: "" },
      { type: "documentation", url: "" },
      { type: "governance", url: "" },
      { type: "tokenomics", url: "" },
      { type: "explorer", url: "https://www.dagexplorer.io" },
      { type: "shop", url: "" },
      {
        type: "coingecko",
        url: "https://www.coingecko.com/en/coins/constellation",
      },
      { type: "analytics", url: "" },
      { type: "crunchbase", url: "" },
      { type: "other", url: "" },
    ],
  },
  {
    slug: "kadena",
    title: "Kadena",
    token: "KDA",
    logo: "/images/blockchains/kadena.jpeg",
    links: [
      { type: "website", url: "https://kadena.io" },
      { type: "foundation", url: "" },
      { type: "company", url: "" },
      { type: "blog", url: "" },
      { type: "medium", url: "" },
      { type: "twitter", url: "https://twitter.com/kadena_io" },
      { type: "reddit", url: "" },
      { type: "forum", url: "" },
      { type: "discord", url: "" },
      { type: "telegram", url: "" },
      { type: "youtube", url: "" },
      { type: "instagram", url: "" },
      { type: "linkedin", url: "" },
      { type: "tiktok", url: "" },
      { type: "facebook", url: "" },
      { type: "github", url: "" },
      { type: "whitepaper", url: "" },
      { type: "documentation", url: "" },
      { type: "governance", url: "" },
      { type: "tokenomics", url: "" },
      { type: "explorer", url: "https://explorer.chainweb.com/mainnet" },
      { type: "shop", url: "" },
      { type: "coingecko", url: "https://www.coingecko.com/en/coins/kadena" },
      { type: "analytics", url: "" },
      { type: "crunchbase", url: "" },
      { type: "other", url: "" },
    ],
  },
  {
    slug: "cardano",
    title: "Cardano",
    token: "ADA",
    logo: "/images/blockchains/cardano.jpeg",
    links: [
      { type: "website", url: "https://cardano.org" },
      { type: "foundation", url: "" },
      { type: "company", url: "" },
      { type: "blog", url: "" },
      { type: "medium", url: "" },
      { type: "twitter", url: "https://twitter.com/Cardano_CF" },
      { type: "reddit", url: "" },
      { type: "forum", url: "" },
      { type: "discord", url: "" },
      { type: "telegram", url: "" },
      { type: "youtube", url: "" },
      { type: "instagram", url: "" },
      { type: "linkedin", url: "" },
      { type: "tiktok", url: "" },
      { type: "facebook", url: "" },
      { type: "github", url: "" },
      { type: "whitepaper", url: "" },
      { type: "documentation", url: "" },
      { type: "governance", url: "" },
      { type: "tokenomics", url: "" },
      { type: "explorer", url: "https://cardanoscan.io" },
      { type: "shop", url: "" },
      { type: "coingecko", url: "https://www.coingecko.com/en/coins/cardano" },
      { type: "analytics", url: "" },
      { type: "crunchbase", url: "" },
      { type: "other", url: "" },
    ],
  },
  {
    slug: "ethereum",
    title: "Ethereum",
    token: "ETH",
    logo: "/images/blockchains/ethereum.jpeg",
    links: [
      { type: "website", url: "https://ethereum.org" },
      { type: "foundation", url: "" },
      { type: "company", url: "" },
      { type: "blog", url: "" },
      { type: "medium", url: "" },
      { type: "twitter", url: "https://twitter.com/ethereum" },
      { type: "reddit", url: "" },
      { type: "forum", url: "" },
      { type: "discord", url: "" },
      { type: "telegram", url: "" },
      { type: "youtube", url: "" },
      { type: "instagram", url: "" },
      { type: "linkedin", url: "" },
      { type: "tiktok", url: "" },
      { type: "facebook", url: "" },
      { type: "github", url: "" },
      { type: "whitepaper", url: "" },
      { type: "documentation", url: "" },
      { type: "governance", url: "" },
      { type: "tokenomics", url: "" },
      { type: "explorer", url: "https://etherscan.io" },
      { type: "shop", url: "" },
      { type: "coingecko", url: "https://www.coingecko.com/en/coins/ethereum" },
      { type: "analytics", url: "" },
      { type: "crunchbase", url: "" },
      { type: "other", url: "" },
    ],
  },
  {
    slug: "polkadot",
    title: "Polkadot",
    token: "DOT",
    logo: "/images/blockchains/polkadot.jpeg",
    links: [
      { type: "website", url: "https://polkadot.network" },
      { type: "foundation", url: "" },
      { type: "company", url: "" },
      { type: "blog", url: "" },
      { type: "medium", url: "" },
      { type: "twitter", url: "https://twitter.com/Polkadot" },
      { type: "reddit", url: "" },
      { type: "forum", url: "" },
      { type: "discord", url: "" },
      { type: "telegram", url: "" },
      { type: "youtube", url: "" },
      { type: "instagram", url: "" },
      { type: "linkedin", url: "" },
      { type: "tiktok", url: "" },
      { type: "facebook", url: "" },
      { type: "github", url: "" },
      { type: "whitepaper", url: "" },
      { type: "documentation", url: "" },
      { type: "governance", url: "" },
      { type: "tokenomics", url: "" },
      { type: "explorer", url: "http://polkascan.io" },
      { type: "shop", url: "" },
      { type: "coingecko", url: "https://www.coingecko.com/en/coins/polkadot" },
      { type: "analytics", url: "" },
      { type: "crunchbase", url: "" },
      { type: "other", url: "" },
    ],
  },
]
