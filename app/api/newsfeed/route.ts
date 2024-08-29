import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { generateRandomNewsData } from './data';
export const dynamic = 'force-dynamic';

// API endpoint to get news data
export async function GET(req: NextRequest) {
  const newsData = await generateRandomNewsData(5);
  return NextResponse.json(newsData);
}


