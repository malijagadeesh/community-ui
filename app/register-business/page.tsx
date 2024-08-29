'use client';
// components/BusinessForm.tsx
import React, { useState } from 'react';

// Define the interfaces
interface Service {
  name: string;
  description: string;
}

interface Business {
  name: string;
  heroImage: string;
  description: string;
  location: string;
  whyUs: string;
  contactDetails: {
    phone: string;
    email: string;
    website: string;
  };
  services: Service[];
}

interface BusinessFormProps {
  onSubmit: (formData: Business) => void;
}

const BusinessForm = () => {
  const [formData, setFormData] = useState<Business>({
    name: '',
    heroImage: '',
    description: '',
    location: '',
    whyUs: '',
    contactDetails: {
      phone: '',
      email: '',
      website: '',
    },
    services: [],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      contactDetails: {
        ...prevData.contactDetails,
        [name]: value,
      },
    }));
  };

  const handleServiceChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updatedServices = [...formData.services];
    updatedServices[index] = { ...updatedServices[index], [name]: value };
    setFormData((prevData) => ({
      ...prevData,
      services: updatedServices,
    }));
  };

  const addService = () => {
    setFormData((prevData) => ({
      ...prevData,
      services: [...prevData.services, { name: '', description: '' }],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-4"
    >
      <h2 className="text-2xl font-bold mb-4">Business registration </h2>

      {/* Business Name */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700"
        >
          Business Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border"
        />
      </div>

      {/* Hero Image */}
      <div className="mb-4">
        <label
          htmlFor="heroImage"
          className="block text-gray-700"
        >
          Hero Image URL
        </label>
        <input
          type="text"
          id="heroImage"
          name="heroImage"
          value={formData.heroImage}
          onChange={handleChange}
          required
          className="w-full p-2 border "
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className="w-full p-2 border "
        />
      </div>

      {/* Location */}
      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-gray-700"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full p-2 border "
        />
      </div>

      {/* Why Us */}
      <div className="mb-4">
        <label
          htmlFor="whyUs"
          className="block text-gray-700"
        >
          Why Us?
        </label>
        <textarea
          id="whyUs"
          name="whyUs"
          value={formData.whyUs}
          onChange={handleChange}
          required
          rows={4}
          className="w-full p-2 border "
        />
      </div>

      {/* Contact Details */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
        <div className="mb-2">
          <label
            htmlFor="phone"
            className="block text-gray-700"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.contactDetails.phone}
            onChange={handleContactChange}
            required
            className="w-full p-2 border "
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.contactDetails.email}
            onChange={handleContactChange}
            required
            className="w-full p-2 border "
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="website"
            className="block text-gray-700"
          >
            Website
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.contactDetails.website}
            onChange={handleContactChange}
            required
            className="w-full p-2 border "
          />
        </div>
      </div>

      {/* Services */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Services</h3>
        {formData.services.map((service, index) => (
          <div
            key={index}
            className="mb-4"
          >
            <div className="mb-2">
              <label
                htmlFor={`service-name-${index}`}
                className="block text-gray-700"
              >
                Service Name
              </label>
              <input
                type="text"
                id={`service-name-${index}`}
                name="name"
                value={service.name}
                onChange={(e) => handleServiceChange(index, e)}
                required
                className="w-full p-2 border "
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor={`service-description-${index}`}
                className="block text-gray-700"
              >
                Service Description
              </label>
              <input
                type="text"
                id={`service-description-${index}`}
                name="description"
                value={service.description}
                onChange={(e) => handleServiceChange(index, e)}
                required
                className="w-full p-2 border "
              />
            </div>
            
            <div className="mb-2">
              <label
                htmlFor={`service-image-${index}`}
                className="block text-gray-700"
              >
                Service Image
              </label>
              <input
                type="file"
                id={`service-image-${index}`}
                name="image"
                //value={service.image}
                onChange={(e) => handleServiceChange(index, e)}
                required
                className="w-full p-2 border "
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addService}
          className="bg-green-500 text-white p-2 "
        >
          + Add Service
        </button>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 w-full "
      >
        Submit
      </button>
    </form>
  );
};

export default BusinessForm;
