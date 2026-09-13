import { quotes } from '../data/quotes';

/** Build-time JSON of the quotes pool for client scripts / daily rotation. */
export async function GET() {
  return new Response(JSON.stringify(quotes), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
