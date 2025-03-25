import { getCollection, type CollectionEntry } from 'astro:content'

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Servicii Funerare',
  description: 'Servicii Funerare Mortuare NON-STOP in judetul Bacau, comuna Sascut, sat Pancesti.',
  author: {
    name: 'Marius Popa',
    twitter: '@marius_petrut7',
    url: 'https://mariusppetrutportfolio.netlify.app/',
    email: 'pmariuspetrut@gmail.com',
    summary: 'Drupalist.'
  },
  org: {
    name: 'Servicii Funerare Mortuare NON-STOP',
    twitter: '@FunerareBen',
    url: 'https://hellotham.com',
    email: 'serviciifunerareben@gmail.com',
    summary:
      'Servicii Funerare Mortuare NON-STOP in ofera servicii funerare in judetul Bacau si judetul Vrancea pentru toate comunele si satele adiacente'
  },
  location: 'strada Protopop Ioan Negoita, Nr. 215, sat Pancesti, comuna Sascut, judetul Bacau',
  latlng: [46.21027357549614, 27.062326837769646] as [number, number],
  repository: 'https://github.com/backatmarius/popa_astro',
  buildTime: new Date(),
  workingHours: {
    luni: "00:00 - 23:59",
    marti: "00:00 - 23:59",
    miercuri: "00:00 - 23:59",
    joi: "00:00 - 23:59",
    vineri: "00:00 - 23:59",
    sambata: "00:00 - 23:59",
    duminica: "00:00 - 23:59"
  }
}

export { default as Logo } from './assets/svg/astro/logo-ben.svg'
export { default as LogoImage } from './assets/svg/astro/astro-logo-dark.svg'
export { default as FeaturedSVG } from './assets/astro/overview.jpeg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Acasa', href: '' },
  { name: 'Despre noi', href: 'despre-noi' },
  { name: 'Servicii funerare', href: 'servicii' },
  { name: 'Contact', href: 'contact' },
  { name: 'Ghid Funerar', href: 'doc/introducere' }
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/backatmarius/popa_astro`

export type Sidebar = Record<string, { text: string; link: string }[]>

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true
  })
  return posts.sort((a, b) =>
    a.data.pubDate && b.data.pubDate ? +b.data.pubDate - +a.data.pubDate : 0
  )
}
