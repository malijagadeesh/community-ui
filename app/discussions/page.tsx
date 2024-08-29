// pages/index.tsx
import React from 'react';
import Article from './article';
const articles =[
  {
    date: '2024-08-27',
    imageSrc: 'https://images.unsplash.com/photo-1587029552319-93525c70c754?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Book Reading Image',
    title: 'How to Choose the Perfect Book for Your Reading Taste',
    summary: 'Finding the right book can be overwhelming. Here are five tips to help you select the perfect read based on your interests and preferences.',
    readMoreLink: '#',
  },
  {
    date: '2024-08-26',
    imageSrc: 'https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Travel Destinations Image',
    title: 'Top 10 Must-Visit Destinations for 2024',
    summary: 'Planning your next adventure? Check out these top 10 travel destinations that should be on your radar for 2024.',
    readMoreLink: '#',
  },
  {
    date: '2024-08-25',
    imageSrc: 'https://images.unsplash.com/photo-1493533366782-6e4326fbae53?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Healthy Eating Image',
    title: 'Healthy Eating Habits to Adopt This Year',
    summary: 'Transform your diet with these healthy eating habits that can improve your overall well-being and boost your energy levels.',
    readMoreLink: '#',
  },
  {
    date: '2024-08-24',
    imageSrc: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Tech Innovations Image',
    title: 'The Latest Innovations in Technology You Need to Know',
    summary: 'Stay ahead of the curve with the latest tech innovations that are shaping the future of our digital world.',
    readMoreLink: '#',
  },
  {
    date: '2024-08-23',
    imageSrc: 'https://images.unsplash.com/photo-1591227174835-d3705c881c90?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Fitness Tips Image',
    title: 'Effective Fitness Tips for a Healthier Lifestyle',
    summary: 'Get motivated and achieve your fitness goals with these practical tips and strategies for maintaining a healthy lifestyle.',
    readMoreLink: '#',
  }
]


const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {articles.map((article, index) => (
          <Article
            key={index}
            date={article.date}
            imageSrc={article.imageSrc}
            imageAlt={article.imageAlt}
            title={article.title}
            summary={article.summary}
            readMoreLink={article.readMoreLink}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
