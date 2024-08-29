// components/SubscriptionList.tsx
import React from 'react';
import JoinDiscussion from './join-discussion-card';

interface SubscriptionData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const SubscriptionList = () => {
  const subscriptions = [
    {
      title: 'Join dog wakers discussion',
      description: 'Stay up-to-date with our latest videos and tutorials.',
      buttonText: 'Subscribe Now',
      buttonLink: '/discussions',
    },
    {
      title: 'Join gardeners discussion',
      description: 'Get the latest updates and tweets directly from our team.',
      buttonText: 'Follow Us',
      buttonLink: '/discussions',
    },
    {
      title: 'Join cat lovers discussion',
      description:
        'Receive the latest news and updates directly to your inbox.',
      buttonText: 'Sign Up',
      buttonLink: '/discussions',
    },
  ];
  return (
    <div className="flex flex-col flex-wrap gap-6">
      {subscriptions.map((sub, index) => (
        <JoinDiscussion
          key={index}
          title={sub.title}
          description={sub.description}
          buttonText={sub.buttonText}
          buttonLink={sub.buttonLink}
        />
      ))}
    </div>
  );
};

export default SubscriptionList;
