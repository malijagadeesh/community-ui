// pages/events.tsx
import navigate from 'next/router';
import React from 'react';
import EventSummary from './event-summary';
import Link from 'next/link';

export const eventList = [
  {
    id: '1',
    imageSrc: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Rock Concert Image',
    title: 'The Rolling Tones Live in Concert',
    description: 'Experience the electrifying performance of The Rolling Tones at their biggest concert yet.',
    when: 'Saturday, September 10th at 7:00 PM',
    where: ['Wembley Stadium', 'London, UK'],
    tickets: ['$50 - General Admission', '$120 - VIP'],
  },
  {
    id: '2',
    imageSrc: 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Classical Music Concert Image',
    title: 'Symphony Orchestra: A Night of Classics',
    description: 'Join the Symphony Orchestra for an enchanting evening of classical masterpieces.',
    when: 'Friday, October 1st at 7:30 PM',
    where: ['Royal Albert Hall', 'Kensington Gore, London, UK'],
    tickets: ['$40 - General Admission', '$90 - VIP'],
  },
  {
    id: '3',
    imageSrc: 'https://images.unsplash.com/photo-1484494789010-20fc1a011197?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Jazz Concert Image',
    title: 'Jazz Nights with Miles Davis',
    description: 'Immerse yourself in a night of smooth jazz with the legendary Miles Davis.',
    when: 'Thursday, November 3rd at 8:00 PM',
    where: ['Blue Note Jazz Club', 'New York, NY'],
  },
  {
    id: '4',
    imageSrc: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Indie Rock Concert Image',
    title: 'Indie Rock Fest 2024',
    description: 'Don’t miss the biggest Indie Rock event of the year featuring top bands.',
    when: 'Saturday, August 27th at 6:00 PM',
    where: ['Central Park', 'New York, NY'],
  }
]


const EventsPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <button className="mt-2 md:mt-5 p-2 px-3 my-4 bg-green-700 text-white font-bold text-sm hover:bg-green-500">
          <Link href="/create-event">+ Register your event</Link>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventList.map((event) => (
            <EventSummary
              key={event.id}
              imageSrc={event.imageSrc}
              imageAlt={event.imageAlt}
              title={event.title}
              description={event.description}
              when={event.when}
              href={`/local-events/${event.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
