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
  location: 'sat Pancesti, comuna Sascut, judetul Bacau, Romania',
  latlng: [46.21027357549614, 27.062326837769646] as [number, number],
  repository: 'https://github.com/backatmarius/popa_astro',
  buildTime: new Date()
}

export { default as Logo } from './assets/svg/astro/astro-icon-dark.svg'
export { default as LogoImage } from './assets/astro/astro-logo-dark.png'
export { default as FeaturedSVG } from './assets/svg/undraw/undraw_design_inspiration.svg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
  { name: 'Blog', href: 'blog' },
  { name: 'Docs', href: 'doc/introduction' }
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
