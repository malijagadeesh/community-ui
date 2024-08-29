function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(start: Date, end: Date) {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString();
}

export async function generateRandomNewsData(count:number) {
  const titles = [
    'Community Meeting',
    'New Park Opening',
    'Local Art Exhibit',
    'Charity Run Event',
    'Farmers Market Day',
    'City Council Meeting',
    'Music Festival',
    'Neighborhood Cleanup',
    'Tech Workshop',
    'Food Truck Rally',
  ];

  const contents = [
    'Join us for a community meeting on local issues.',
    'Celebrate the opening of the new community park.',
    'Explore local art at the upcoming exhibit.',
    'Participate in the charity run event.',
    'Visit the farmers market for fresh produce.',
    'Attend the city council meeting to discuss local matters.',
    'Enjoy live music at the city festival.',
    'Help clean up the neighborhood.',
    'Learn new skills at the tech workshop.',
    'Taste delicious food at the food truck rally.',
  ];

  const newsData = [];

  for (let i = 0; i < count; i++) {
    const id = i + 1;
    const title = titles[getRandomInt(0, titles.length - 1)];
    const content = contents[getRandomInt(0, contents.length - 1)];
    const date = getRandomDate(new Date(2024, 0, 1), new Date(2024, 11, 31));

    newsData.push({ id, title, content, date });
  }

  return newsData;
}

