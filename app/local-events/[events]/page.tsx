import { eventList } from '../page';
import EventDetail from './event-details';

interface EventProps {
  event: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    when: string;
    where: string[];
    tickets: string[];
  };
}

const EventPage = ({
  params,
}: {
  params: {
    events: string;
  };
}) => {
  const event = eventList.find((event) => event.id === params.events);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <EventDetail
          imageSrc={event?.imageSrc}
          imageAlt={event?.imageAlt}
          title={event?.title}
          description={event?.description}
          when={event?.when}
          where={event?.where}
          tickets={event?.tickets}
        />
      </div>
    </div>
  );
};

export default EventPage;
