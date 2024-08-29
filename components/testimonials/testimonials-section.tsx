import Testimonial from './testimonials';

// components/TestimonialsSection.tx
const testimonials = [
  {
    text: 'I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.',
    name: 'Sheryl Berge',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
  },
  {
    text: 'As a professional athlete, I rely on high-performance gear for my training. This site offers a great selection of top-notch products.',
    name: 'Leland Kiehn',
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
  },
  {
    text: 'The fitness apparel I bought here fits perfectly and feels amazing. I highly recommend this store to anyone looking for quality gear.',
    name: 'Peter Renolds',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-4xl tracking-tight text-slate-900 sm:text-4xl">
            What Our LocalLoop users saying
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              testimonial={testimonial}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TestimonialsSection;
