import AboutSection from './about-card';
import HeroSection from './business-hero';
import ContactSection from './contact-section';
import GalleryImage from './gallery-image';
import ServiceCard from './service-card';
import WhyUsCard from './why-us';

const BusinessPage: React.FC = () => {
  const services = [
    {
      image:
        'https://plus.unsplash.com/premium_photo-1686584355100-e6906b984f3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Premium Flour',
      description: 'We offer the highest quality flour milled to perfection.',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1686584355100-e6906b984f3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Affordable Prices',
      description: 'Get the best prices without compromising on quality.',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1686584355100-e6906b984f3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Premium Flour',
      description: 'We offer the highest quality flour milled to perfection.',
    },
  ];

  const whyUs = [
    {
      image:
        'https://plus.unsplash.com/premium_photo-1686584355100-e6906b984f3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'High Quality',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1686584355100-e6906b984f3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Great Service',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1686584355100-e6906b984f3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'High Quality',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1686584355100-e6906b984f3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Great Service',
    },
    // Add more reasons
  ];

  const galleryImages = [
    'https://plus.unsplash.com/premium_photo-1686584355100-e6906b984f3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1686584355100-e6906b984f3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1686584355100-e6906b984f3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1686584355100-e6906b984f3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Add more gallery image URLs
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection
        title="Welcome to Bappa Flour Mill"
        subtitle="Providing Quality Flour for Generations"
        buttonLabel="Learn More"
        buttonLink="#aboutus"
        backgroundImage="https://plus.unsplash.com/premium_photo-1686584355100-e6906b984f3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <section
        className="py-10"
        id="services"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <AboutSection
        title="About Us"
        content="Bappa Flour Mill has been providing high-quality flour for generations. Our mission is to deliver the best products with exceptional service."
        image="https://plus.unsplash.com/premium_photo-1686584355100-e6906b984f3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <section
        className="py-10"
        id="whyUs"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="flex flex-wrap">
            {whyUs.map((reason, index) => (
              <WhyUsCard
                key={index}
                image={reason.image}
                title={reason.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-10"
        id="gallery"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryImages.map((src, index) => (
              <GalleryImage
                key={index}
                src={src}
                alt={`Gallery Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        address="123 Flour Street, Milltown, FL 12345"
        mapLink="https://goo.gl/maps/4hRBJ9bDA8J2"
      />
    </div>
  );
};

export default BusinessPage;
