import { NextRequest, NextResponse } from 'next/server';

const eventsData = [
  {
    id: 1,
    title: 'Community Festival',
    description: 'Join us for a day of fun and festivities at the annual community festival.',
    date: '2024-08-15',
  },
  {
    id: 2,
    title: 'Neighborhood Cleanup',
    description: 'Help us keep our neighborhood clean and beautiful. Supplies will be provided.',
    date: '2024-08-22',
  },
  {
    id: 3,
    title: 'Local Art Exhibit',
    description: 'Explore the works of local artists at the community center.',
    date: '2024-08-30',
  },
  {
    id: 4,
    title: 'Local Art Exhibit',
    description: 'Explore the works of local artists at the community center.',
    date: '2024-08-30',
  },
  {
    id: 5,
    title: 'Local Art Exhibit',
    description: 'Explore the works of local artists at the community center.',
    date: '2024-08-30',
  },
  {
    id: 6,
    title: 'Local Art Exhibit',
    description: 'Explore the works of local artists at the community center.',
    date: '2024-08-30',
  },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(eventsData);
}