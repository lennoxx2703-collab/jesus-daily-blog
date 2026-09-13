/**
 * Hard times verse library for Walking with Jesus.
 * Translation: World English Bible (WEB) — public domain.
 * Maintained by Verse Keeper; Jesus Blog implements pages that consume this data.
 */
export type HardTimesTag =
  | 'anxiety'
  | 'fear'
  | 'grief'
  | 'loneliness'
  | 'exhaustion'
  | 'doubt'
  | 'shame'
  | 'waiting'
  | 'sickness'
  | 'money';

export type HardTimesVerse = {
  reference: string;
  text: string;
  translation: 'WEB';
  tags: HardTimesTag[];
};

export const HARD_TIMES_TAGS: HardTimesTag[] = [
  'anxiety',
  'fear',
  'grief',
  'loneliness',
  'exhaustion',
  'doubt',
  'shame',
  'waiting',
  'sickness',
  'money',
];

export const HARD_TIMES_VERSES: HardTimesVerse[] = [
  {
    reference: 'Philippians 4:6-7',
    text: 'In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus.',
    translation: 'WEB',
    tags: ['anxiety'],
  },
  {
    reference: 'John 14:27',
    text: 'Peace I leave with you. My peace I give to you; not as the world gives, give I to you. Don’t let your heart be troubled, neither let it be fearful.',
    translation: 'WEB',
    tags: ['anxiety', 'fear'],
  },
  {
    reference: 'Isaiah 41:10',
    text: 'Don’t you be afraid, for I am with you. Don’t be dismayed, for I am your God. I will strengthen you. Yes, I will help you. Yes, I will uphold you with the right hand of my righteousness.',
    translation: 'WEB',
    tags: ['fear'],
  },
  {
    reference: 'Psalm 23:4',
    text: 'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me. Your rod and your staff, they comfort me.',
    translation: 'WEB',
    tags: ['fear', 'grief'],
  },
  {
    reference: 'Psalm 34:18',
    text: 'Yahweh is near to those who have a broken heart, and saves those who have a crushed spirit.',
    translation: 'WEB',
    tags: ['grief'],
  },
  {
    reference: 'Deuteronomy 31:8',
    text: 'Yahweh himself is who goes before you. He will be with you. He will not fail you nor forsake you. Don’t be afraid. Don’t be discouraged.',
    translation: 'WEB',
    tags: ['loneliness', 'fear'],
  },
  {
    reference: 'Psalm 68:6',
    text: 'God sets the lonely in families. He brings out the prisoners with singing, but the rebellious dwell in a sun-scorched land.',
    translation: 'WEB',
    tags: ['loneliness'],
  },
  {
    reference: 'Matthew 11:28',
    text: 'Come to me, all you who labor and are heavily burdened, and I will give you rest.',
    translation: 'WEB',
    tags: ['exhaustion'],
  },
  {
    reference: 'Isaiah 40:31',
    text: 'But those who wait for Yahweh will renew their strength. They will mount up with wings like eagles. They will run, and not be weary. They will walk, and not faint.',
    translation: 'WEB',
    tags: ['exhaustion', 'waiting'],
  },
  {
    reference: '2 Corinthians 12:9',
    text: 'He has said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Most gladly therefore I will rather glory in my weaknesses, that the power of Christ may rest on me.',
    translation: 'WEB',
    tags: ['exhaustion', 'sickness'],
  },
  {
    reference: 'Mark 9:24',
    text: 'Immediately the father of the child cried out with tears, “I believe. Help my unbelief!”',
    translation: 'WEB',
    tags: ['doubt'],
  },
  {
    reference: 'Romans 8:1',
    text: 'There is therefore now no condemnation to those who are in Christ Jesus, who don’t walk according to the flesh, but according to the Spirit.',
    translation: 'WEB',
    tags: ['shame'],
  },
  {
    reference: '1 John 1:9',
    text: 'If we confess our sins, he is faithful and righteous to forgive us the sins, and to cleanse us from all unrighteousness.',
    translation: 'WEB',
    tags: ['shame'],
  },
  {
    reference: 'Psalm 27:14',
    text: 'Wait for Yahweh. Be strong, and let your heart take courage. Yes, wait for Yahweh.',
    translation: 'WEB',
    tags: ['waiting'],
  },
  {
    reference: 'James 5:14-15',
    text: 'Is any among you sick? Let him call for the elders of the assembly, and let them pray over him, anointing him with oil in the name of the Lord, and the prayer of faith will heal him who is sick, and the Lord will raise him up. If he has committed sins, he will be forgiven.',
    translation: 'WEB',
    tags: ['sickness'],
  },
  {
    reference: 'Matthew 6:31-33',
    text: 'Therefore don’t be anxious, saying, ‘What will we eat?’, ‘What will we drink?’ or, ‘With what will we be clothed?’ For the Gentiles seek after all these things; for your heavenly Father knows that you need all these things. But seek first God’s Kingdom, and his righteousness; and all these things will be given to you as well.',
    translation: 'WEB',
    tags: ['money', 'anxiety'],
  },
  {
    reference: 'Hebrews 13:5',
    text: 'Be free from the love of money, content with such things as you have, for he has said, “I will in no way leave you, neither will I in any way forsake you.”',
    translation: 'WEB',
    tags: ['money', 'loneliness'],
  },
  // Additional public-domain WEB verses (same library; covers remaining seed refs).
  {
    reference: 'Psalm 34:4',
    text: 'I sought Yahweh, and he answered me, and delivered me from all my fears.',
    translation: 'WEB',
    tags: ['fear', 'anxiety'],
  },
  {
    reference: 'Psalm 46:1',
    text: 'God is our refuge and strength, a very present help in trouble.',
    translation: 'WEB',
    tags: ['fear'],
  },
  {
    reference: '2 Corinthians 1:3-4',
    text: 'Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, that we may be able to comfort those who are in any affliction, through the comfort with which we ourselves are comforted by God.',
    translation: 'WEB',
    tags: ['grief'],
  },
  {
    reference: '1 Peter 5:7',
    text: 'casting all your worries on him, because he cares for you.',
    translation: 'WEB',
    tags: ['anxiety'],
  },
  {
    reference: '2 Timothy 1:7',
    text: 'For God didn’t give us a spirit of fear, but of power, love, and self-control.',
    translation: 'WEB',
    tags: ['fear'],
  },
  {
    reference: 'Psalm 55:22',
    text: 'Cast your burden on Yahweh, and he will sustain you. He will never allow the righteous to be moved.',
    translation: 'WEB',
    tags: ['anxiety'],
  },
  {
    reference: 'Romans 8:38-39',
    text: 'For I am persuaded that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers, nor height, nor depth, nor any other created thing will be able to separate us from God’s love which is in Christ Jesus our Lord.',
    translation: 'WEB',
    tags: ['shame'],
  },
  {
    reference: 'John 14:1',
    text: 'Don’t let your heart be troubled. Believe in God. Believe also in me.',
    translation: 'WEB',
    tags: ['anxiety', 'fear'],
  },
  {
    reference: 'John 16:33',
    text: 'I have told you these things, that in me you may have peace. In the world you have trouble; but cheer up! I have overcome the world.',
    translation: 'WEB',
    tags: ['fear'],
  },
  {
    reference: 'Lamentations 3:22-23',
    text: 'It is because of Yahweh’s loving kindnesses that we are not consumed, because his mercies don’t fail. They are new every morning. Great is your faithfulness.',
    translation: 'WEB',
    tags: ['waiting'],
  },
  {
    reference: 'Proverbs 3:5-6',
    text: 'Trust in Yahweh with all your heart, and don’t lean on your own understanding. In all your ways acknowledge him, and he will make your paths straight.',
    translation: 'WEB',
    tags: ['doubt'],
  },
  {
    reference: 'Psalm 147:3',
    text: 'He heals the broken in heart, and binds up their wounds.',
    translation: 'WEB',
    tags: ['grief', 'sickness'],
  },
  {
    reference: 'John 14:18',
    text: 'I will not leave you orphans. I will come to you.',
    translation: 'WEB',
    tags: ['loneliness'],
  },
  {
    reference: 'Matthew 5:4',
    text: 'Blessed are those who mourn, for they shall be comforted.',
    translation: 'WEB',
    tags: ['grief'],
  },
];

export function versesForTag(tag: HardTimesTag): HardTimesVerse[] {
  return HARD_TIMES_VERSES.filter((v) => v.tags.includes(tag));
}
