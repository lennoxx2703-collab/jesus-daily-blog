import type { HardTimesTag, HardTimesVerse } from './hardTimesVerses';
import { HARD_TIMES_TAGS, HARD_TIMES_VERSES, versesForTag } from './hardTimesVerses';

export type { HardTimesTag, HardTimesVerse };
export { HARD_TIMES_TAGS, HARD_TIMES_VERSES, versesForTag };

export function verseAnchor(verse: HardTimesVerse): string {
  return verse.reference
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function collectHardTimesTagCounts(): { tag: HardTimesTag; slug: string; count: number }[] {
  return HARD_TIMES_TAGS.map((tag) => ({
    tag,
    slug: tag,
    count: versesForTag(tag).length,
  }));
}

const SITUATIONS: Record<string, string> = {
  'Philippians 4:6-7': 'When worry will not let you rest',
  'John 14:27': 'When your heart will not settle',
  'Isaiah 41:10': 'When you are afraid and dismayed',
  'Psalm 23:4': 'When you walk through the valley',
  'Psalm 34:18': 'When your heart is broken',
  'Deuteronomy 31:8': 'When you feel left on your own',
  'Psalm 68:6': 'When loneliness has a name',
  'Matthew 11:28': 'When you are worn out and heavy-laden',
  'Isaiah 40:31': 'When you have no strength left to run',
  '2 Corinthians 12:9': 'When weakness feels like the last word',
  'Mark 9:24': 'When belief and unbelief sit together',
  'Romans 8:1': 'When shame keeps repeating your name',
  '1 John 1:9': 'When you cannot hide what you have done',
  'Psalm 27:14': 'When the waiting has grown long',
  'James 5:14-15': 'When the body is sick',
  'Matthew 6:31-33': 'When provision feels uncertain',
  'Hebrews 13:5': 'When money is tight and you feel alone',
  'Psalm 34:4': 'When fears have multiplied',
  'Psalm 46:1': 'When trouble comes close',
  '2 Corinthians 1:3-4': 'When you need comfort you can pass on',
  '1 Peter 5:7': 'When you wonder if anyone cares',
  '2 Timothy 1:7': 'When fear has taken the lead',
  'Psalm 55:22': 'When the load is too heavy to carry',
  'Romans 8:38-39': 'When you fear you have gone too far',
  'John 14:1': 'When trouble crowds the room',
  'John 16:33': 'When the world feels like too much',
  'Lamentations 3:22-23': 'When you thought mercy had run out',
  'Proverbs 3:5-6': 'When you cannot see the path',
  'Psalm 147:3': 'When body or spirit is wounded',
  'John 14:18': 'When you feel abandoned',
  'Matthew 5:4': 'When mourning will not lift',
  'John 16:22': 'When sorrow is still heavy',
  'Psalm 119:50': 'When only His word can revive you',
  'Isaiah 51:12': 'When human threats loom large',
  'Joshua 1:9': 'When you need courage for the next step',
  'John 20:27': 'When doubt asks to touch the wounds',
  'Psalm 73:26': 'When flesh and heart are failing',
  'Isaiah 54:4': 'When shame still has your name',
  'Psalm 34:5': 'When you need a face that is not ashamed',
  'Philippians 4:19': 'When supply feels uncertain',
  '1 Timothy 6:6-8': 'When enough feels hard to believe',
  'Psalm 103:2-3': 'When you need healing remembered',
  'Jeremiah 17:14': 'When you ask to be healed and saved',
  'Lamentations 3:25-26': 'When waiting is the work',
  'Psalm 130:5': 'When your soul waits for His word',
};

export function verseSituation(verse: HardTimesVerse): string {
  return SITUATIONS[verse.reference] ?? `When you need a word for ${verse.tags[0]}`;
}
