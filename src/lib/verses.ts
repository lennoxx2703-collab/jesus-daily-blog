export type FeaturedVerse = {
  text: string;
  reference: string;
};

/** Short sayings of Jesus used for the home-page verse of the day. */
export const FEATURED_VERSES: FeaturedVerse[] = [
  {
    text: 'Come to me, all who labor and are heavy laden, and I will give you rest.',
    reference: 'Matthew 11:28',
  },
  {
    text: 'I am the way, and the truth, and the life.',
    reference: 'John 14:6',
  },
  {
    text: 'I am the good shepherd. The good shepherd lays down his life for the sheep.',
    reference: 'John 10:11',
  },
  {
    text: 'Peace I leave with you; my peace I give to you.',
    reference: 'John 14:27',
  },
  {
    text: 'I am the light of the world. Whoever follows me will not walk in darkness.',
    reference: 'John 8:12',
  },
  {
    text: 'Let not your hearts be troubled. Believe in God; believe also in me.',
    reference: 'John 14:1',
  },
  {
    text: 'I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live.',
    reference: 'John 11:25',
  },
  {
    text: 'Abide in me, and I in you.',
    reference: 'John 15:4',
  },
  {
    text: 'For the Son of Man came to seek and to save the lost.',
    reference: 'Luke 19:10',
  },
  {
    text: 'I came that they may have life and have it abundantly.',
    reference: 'John 10:10',
  },
  {
    text: 'In the world you will have tribulation. But take heart; I have overcome the world.',
    reference: 'John 16:33',
  },
  {
    text: 'Follow me, and I will make you fishers of men.',
    reference: 'Matthew 4:19',
  },
  {
    text: 'I am the bread of life; whoever comes to me shall not hunger.',
    reference: 'John 6:35',
  },
  {
    text: 'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.',
    reference: 'Matthew 7:7',
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
