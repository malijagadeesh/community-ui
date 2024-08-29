import Link from 'next/link';
import BusinessList from './business-list';

const BusinessesPage: React.FC = () => {
  const businesses = [
      {
        name: 'Bappa Flour Mill',
        description: 'Providing quality flour for generations.',
        image: 'https://plus.unsplash.com/premium_photo-1686584355100-e6906b984f3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: '123 Flour Street, Milltown, FL 12345',
        contactLink: 'mailto:info@bappaflourmill.com',
      },
      {
        name: 'Miller’s Flour Co.',
        description: 'Premium flour milled with precision.',
        image: 'https://images.unsplash.com/photo-1603779702084-8cd580a3e64c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZsb3VyJTIwbWlsbHN8ZW58MHx8MHx8fDI%3D',
        location: '456 Grain Avenue, Bakersville, CA 67890',
        contactLink: 'mailto:contact@millerflourco.com',
      },
      {
        name: 'Golden Grain Mills',
        description: 'Offering high-quality flour for all baking needs.',
        image: 'https://plus.unsplash.com/premium_photo-1686584355100-e6906b984f3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: '789 Mill Lane, Flourtown, TX 34567',
        contactLink: 'mailto:support@goldengrainmills.com',
      },
      {
        name: 'Harvest Flour Mills',
        description: 'Traditional milling with a focus on quality.',
        image: 'https://images.unsplash.com/photo-1692263661319-11b0a5992231?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmxvdXIlMjBtaWxsc3xlbnwwfHwwfHx8Mg%3D%3D',
        location: '1010 Harvest Road, Millville, OR 45678',
        contactLink: 'mailto:info@harvestflourmills.com',
      },
      {
        name: 'Pure Grain Flour Co.',
        description: 'Crafting the finest flour from the best grains.',
        image: 'https://images.unsplash.com/photo-1603779702307-391822caf740?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: '2020 Pure Grain Way, Bakerstown, NY 56789',
        contactLink: 'mailto:info@puregrainflourco.com',
      }
  ];

  return (
    <div>
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default BusinessesPage;
