export interface FaithQuote {
  id: string;
  person: string;
  quote: string;
  year?: number;
  sourceTitle: string;
  sourceUrl: string;
}

/**
 * Short, attributed public remarks about Jesus / faith.
 * Wording is taken from the linked reports — do not invent or “improve.”
 */
export const quotes: FaithQuote[] = [
  {
    id: 'bieber-live-like-jesus-2015',
    person: 'Justin Bieber',
    quote: 'I just wanna honestly live like Jesus.',
    year: 2015,
    sourceTitle: 'Complex interview (via Billboard)',
    sourceUrl:
      'https://www.billboard.com/music/pop/justin-bieber-selena-gomez-jesus-christ-god-complex-6708203/',
  },
  {
    id: 'bieber-taco-bell-church-2015',
    person: 'Justin Bieber',
    quote:
      "You don't need to go to church to be a Christian. If you go to Taco Bell, that doesn't make you a taco.",
    year: 2015,
    sourceTitle: 'Complex interview (via TIME)',
    sourceUrl:
      'https://time.com/4052800/justin-bieber-complex-magazine-interview-taco-bell-church/',
  },
  {
    id: 'bieber-king-of-my-heart-2025',
    person: 'Justin Bieber',
    quote: 'Jesus [is] the king of my heart.',
    year: 2025,
    sourceTitle: 'Christian Post (livestream as reported)',
    sourceUrl:
      'https://www.christianpost.com/news/justin-bieber-says-jesus-is-the-king-of-my-heart.html',
  },
  {
    id: 'pratt-care-enough-jesus',
    person: 'Chris Pratt',
    quote:
      'I care enough about Jesus to take a stand, even if it cost me. … It’s where my heart is.',
    year: 2025,
    sourceTitle: 'Christian Post interview',
    sourceUrl:
      'https://www.christianpost.com/news/chris-pratt-reveals-moment-he-surrendered-his-platform-to-god.html',
  },
  {
    id: 'pratt-talking-about-jesus',
    person: 'Chris Pratt',
    quote: "What's important to me is talking about Jesus.",
    year: 2025,
    sourceTitle: 'CBN News (Christian Post interview)',
    sourceUrl:
      'https://cbn.com/news/entertainment/chris-pratt-shares-moment-he-turned-jesus-and-chose-never-look-back-its-where-my',
  },
  {
    id: 'curry-altar-christ-2019',
    person: 'Steph Curry',
    quote: 'I felt a calling, went down to the altar, and gave my life to Christ.',
    year: 2019,
    sourceTitle: 'CBN News (Facebook series “Faith”)',
    sourceUrl:
      'https://cbn.com/news/news/steph-curry-explains-moment-he-truly-became-christian-and-gave-my-life-christ',
  },
  {
    id: 'curry-believer-first-2019',
    person: 'Steph Curry',
    quote:
      'I put believer first, because that is supposed to be the roots of everything that I do…',
    year: 2019,
    sourceTitle: 'CBN News (Facebook series “Faith”)',
    sourceUrl:
      'https://cbn.com/news/news/steph-curry-explains-moment-he-truly-became-christian-and-gave-my-life-christ',
  },
  {
    id: 'curry-fca-man-on-cross',
    person: 'Steph Curry',
    quote:
      '…point them towards the Man who died for our sins on the cross.',
    year: 2015,
    sourceTitle: 'Fellowship of Christian Athletes',
    sourceUrl:
      'https://www.fca.org/fca-in-action/blog-detail/2015/06/17/curry-in-his-own-words',
  },
  {
    id: 'kanye-service-to-christ-2019',
    person: 'Kanye West',
    quote:
      "Now that I'm in service to Christ, my job is to spread the gospel… I'm no longer a slave, I'm a son now, a son of God.",
    year: 2019,
    sourceTitle: 'Zane Lowe / Beats 1 interview (Billboard)',
    sourceUrl:
      'https://www.billboard.com/music/rb-hip-hop/kanye-west-zane-lowe-jesus-is-king-interview-8540357/',
  },
  {
    id: 'chance-baptism-changed-life-2019',
    person: 'Chance the Rapper',
    quote:
      'It changed my life for real and now I know exactly where my strength comes from…',
    year: 2019,
    sourceTitle: 'RELEVANT (Queen Radio, as reported)',
    sourceUrl:
      'https://relevantmagazine.com/culture/chance-my-wife-and-getting-baptized-changed-my-life/',
  },
  {
    id: 'chance-ellen-understanding-jesus',
    person: 'Chance the Rapper',
    quote: 'My understanding of a lot of stuff is based on Jesus.',
    year: 2019,
    sourceTitle: 'The Ellen DeGeneres Show (via Christian Post)',
    sourceUrl:
      'https://www.christianpost.com/news/chance-the-rapper-tells-ellen-degeneres-jesus-reason-he-gives-back-to-community.html',
  },
  {
    id: 'shia-barron-ego-let-go-2022',
    person: 'Shia LaBeouf',
    quote: 'God was using my ego to draw me to Him.',
    year: 2022,
    sourceTitle: 'Bishop Barron interview (YouTube)',
    sourceUrl: 'https://www.youtube.com/watch?v=hjxKG4mR3U4',
  },
  {
    id: 'brand-surrendered-christ-2024',
    person: 'Russell Brand',
    quote: "I'm so grateful to be surrendered in Christ.",
    year: 2024,
    sourceTitle: 'The Independent (baptism Instagram, as reported)',
    sourceUrl:
      'https://www.independent.co.uk/arts-entertainment/tv/news/russell-brand-baptism-thames-b2536815.html',
  },
];

/** Local calendar day-of-year, 0-based (Jan 1 = 0). */
export function dayIndexForDate(date: Date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 1);
  const current = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor((current.getTime() - start.getTime()) / 86_400_000);
}

/** Pick the quote for a calendar day. Stable for a given local date. */
export function quoteForDay(date: Date = new Date()): FaithQuote {
  if (quotes.length === 0) {
    throw new Error('quotes pool is empty');
  }
  const index = dayIndexForDate(date) % quotes.length;
  return quotes[index];
}
