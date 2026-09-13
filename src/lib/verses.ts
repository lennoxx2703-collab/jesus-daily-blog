export type FeaturedVerse = {
  text: string;
  reference: string;
  translation: 'WEB';
};

/** Short sayings of Jesus — World English Bible (public domain). */
export const FEATURED_VERSES: FeaturedVerse[] = [
  {
    text: 'Come to me, all you who labor and are heavily burdened, and I will give you rest.',
    reference: 'Matthew 11:28',
    translation: 'WEB',
  },
  {
    text: 'I am the way, the truth, and the life. No one comes to the Father, except through me.',
    reference: 'John 14:6',
    translation: 'WEB',
  },
  {
    text: 'I am the good shepherd. The good shepherd lays down his life for the sheep.',
    reference: 'John 10:11',
    translation: 'WEB',
  },
  {
    text: 'Peace I leave with you. My peace I give to you; not as the world gives, I give to you. Don’t let your heart be troubled, neither let it be fearful.',
    reference: 'John 14:27',
    translation: 'WEB',
  },
  {
    text: 'I am the light of the world. He who follows me will not walk in the darkness, but will have the light of life.',
    reference: 'John 8:12',
    translation: 'WEB',
  },
  {
    text: 'Don’t let your heart be troubled. Believe in God. Believe also in me.',
    reference: 'John 14:1',
    translation: 'WEB',
  },
  {
    text: 'I am the resurrection and the life. He who believes in me will still live, even if he dies.',
    reference: 'John 11:25',
    translation: 'WEB',
  },
  {
    text: 'Remain in me, and I in you.',
    reference: 'John 15:4',
    translation: 'WEB',
  },
  {
    text: 'For the Son of Man came to seek and to save that which was lost.',
    reference: 'Luke 19:10',
    translation: 'WEB',
  },
  {
    text: 'I came that they may have life, and may have it abundantly.',
    reference: 'John 10:10',
    translation: 'WEB',
  },
  {
    text: 'In the world you have oppression; but cheer up! I have overcome the world.',
    reference: 'John 16:33',
    translation: 'WEB',
  },
  {
    text: 'Come after me, and I will make you fishers for men.',
    reference: 'Matthew 4:19',
    translation: 'WEB',
  },
  {
    text: 'I am the bread of life. He who comes to me will not be hungry, and he who believes in me will never be thirsty.',
    reference: 'John 6:35',
    translation: 'WEB',
  },
  {
    text: 'Ask, and it will be given you. Seek, and you will find. Knock, and it will be opened for you.',
    reference: 'Matthew 7:7',
    translation: 'WEB',
  },
];

export function dayOfYearUTC(date = new Date()): number {
  const start = Date.UTC(date.getUTCFullYear(), 0, 1);
  const current = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  return Math.floor((current - start) / 86_400_000) + 1;
}

export function verseForDay(date = new Date()): FeaturedVerse {
  const day = dayOfYearUTC(date);
  return FEATURED_VERSES[(day - 1) % FEATURED_VERSES.length];
}
