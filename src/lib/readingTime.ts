/** Approximate reading time at ~200 words per minute. */

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function readingTimeMinutes(text: string, wpm = 200): number {
  return Math.max(1, Math.round(wordCount(text) / wpm));
}

export function readingTimeLabel(text: string, wpm = 200): string {
  const minutes = readingTimeMinutes(text, wpm);
  return minutes === 1 ? '1 min read' : `${minutes} min read`;
}

export function readingTime(text: string, wpm = 200): {
  words: number;
  minutes: number;
  label: string;
} {
  return {
    words: wordCount(text),
    minutes: readingTimeMinutes(text, wpm),
    label: readingTimeLabel(text, wpm),
  };
}
