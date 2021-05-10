import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.goosedefi.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.goosedefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Quarry',
    icon: '',
    href: '/quarrys',
  },
  {
    label: 'Smelting',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Mine',
    icon: 'MineIcon',
    href: '/farms',
  },
  {
    label: 'LaunchPad',
    icon: '',
    href: 'https://google.com',
  },
 {
    label: 'Token Lockups',
   icon: '',
   href: '/locks',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
   {
     label: 'Nodes',
     icon: 'NodesIcon',
     href: '/nodes',
   },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/excavatefinance',
      },
      {
        label: 'Docs',
        href: 'https://goosedefi.gitbook.io/goose-finance/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@excavate.finance',
      },
    ],
  },
  // {
  //  label: 'Audit by Hacken',
  //  icon: 'AuditIcon',
  //  href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
 // {
   // label: 'Audit by CertiK',
   // icon: 'AuditIcon',
   // href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
