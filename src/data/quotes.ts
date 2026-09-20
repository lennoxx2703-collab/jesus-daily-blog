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
  {
    id: 'wright-jesus-worked-for-me-2022',
    person: 'Letitia Wright',
    quote: 'I had to find what worked for me and I found that Jesus worked for me.',
    year: 2022,
    sourceTitle: 'CBN News (Guardian interview, as reported)',
    sourceUrl:
      'https://cbn.com/news/entertainment/black-panther-star-letitia-wright-reveals-how-christ-transformed-her-life-jesus',
  },
  {
    id: 'ireland-jesus-everything-2023',
    person: 'Kathy Ireland',
    quote: "The most important relationship in my life is Jesus… He's everything!",
    year: 2023,
    sourceTitle: 'Christian Post (Movieguide Awards)',
    sourceUrl:
      'https://www.christianpost.com/news/kathy-ireland-declares-jesus-is-everything-in-her-life.html',
  },
  {
    id: 'washington-unashamed-share-2017',
    person: 'Denzel Washington',
    quote: "I'm unashamed and unafraid to share it!",
    year: 2017,
    sourceTitle: 'Christian Post (movie junket interview)',
    sourceUrl:
      'https://www.christianpost.com/news/denzel-washington-its-difficult-to-trust-that-jesus-died-for-our-sins-we-know-but-we-forget.html',
  },
  {
    id: 'washington-trust-jesus-died-2017',
    person: 'Denzel Washington',
    quote:
      'It is so difficult to trust that Jesus died for our sins because the mind never shuts off… We know, but we forget constantly, moment by moment.',
    year: 2017,
    sourceTitle: 'Christian Post (movie junket interview)',
    sourceUrl:
      'https://www.christianpost.com/news/denzel-washington-its-difficult-to-trust-that-jesus-died-for-our-sins-we-know-but-we-forget.html',
  },
  {
    id: 'cooper-core-of-everything',
    person: 'Alice Cooper',
    quote:
      "He's the core of everything. He's life itself. He's the light… He changes your heart.",
    year: 2024,
    sourceTitle: 'Greg Laurie interview (via Blabbermouth)',
    sourceUrl:
      'https://blabbermouth.net/news/alice-cooper-jesus-christ-is-the-core-of-everything-hes-life-itself-hes-the-light',
  },
  {
    id: 'jelly-roll-heart-for-jesus-2025',
    person: 'Jelly Roll',
    quote: 'Ultimately, I have a heart for God, and I have a heart for Jesus.',
    year: 2025,
    sourceTitle: 'Brandon Lake conversation (via Crosswalk)',
    sourceUrl:
      'https://www.crosswalk.com/headlines/contributors/michael-foust/jelly-roll-opens-up-about-his-faith-declares-i-have-a-heart-for-jesus.html',
  },
  {
    id: 'roumie-surrender-jesus-2023',
    person: 'Jonathan Roumie',
    quote:
      'I literally was on my knees and I said, "Jesus, I surrender myself to you. Take care of everything." And He did.',
    year: 2023,
    sourceTitle: 'Fox News Digital interview',
    sourceUrl:
      'https://www.foxnews.com/lifestyle/jonathan-roumie-faith-prayer-life-advent-always-god-hasnt-forsaken-us',
  },
  {
    id: 'wahlberg-jesus-save-sinners-2022',
    person: 'Mark Wahlberg',
    quote:
      "Jesus didn't come to save the righteous, He came to save the sinners. We're all weak.",
    year: 2022,
    sourceTitle: 'CBN News (Fox News / Raymond Arroyo interview)',
    sourceUrl:
      'https://cbn.com/news/news/jesus-didnt-come-save-righteous-mark-wahlberg-discusses-gods-redemption-new-film-father',
  },
  {
    id: 'tebow-identity-jesus-2016',
    person: 'Tim Tebow',
    quote:
      "I'm so thankful because of my relationship with Jesus Christ and being adopted in the family of God… My identity lies as a child of God, and that's something that will never be shaken.",
    year: 2016,
    sourceTitle: 'Bible Gateway Blog interview',
    sourceUrl:
      'https://www.biblegateway.com/blog/2016/10/discovering-your-identity-in-lifes-storms-an-interview-with-tim-tebow/',
  },
  {
    id: 'grammer-follower-of-jesus-2025',
    person: 'Kelsey Grammer',
    quote: "I'm not going to deny that I have faith and I'm a follower of Jesus.",
    year: 2025,
    sourceTitle: 'Daily Wire interview',
    sourceUrl:
      'https://www.dailywire.com/news/kelsey-grammer-talks-faith-hollywood-and-his-new-christmas-movie',
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
