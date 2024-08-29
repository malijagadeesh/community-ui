'use client'
import FormField from '@/components/elements/form-fields';
import React from 'react';
import { SlCalender } from 'react-icons/sl';

const EventForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-[black] mb-6">Create Event</h1>
      <form
        className="grid grid-cols-1 gap-6"
        onSubmit={handleSubmit}
      >
        <FormField
          type="text"
          id="title"
          name="title"
          placeholder="Event Title"
        />
        <FormField
          type="select"
          id="category"
          name="category"
          placeholder="Select a category"
          options={['Music', 'Sports', 'Arts', 'Technology']}
        />
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            type="textarea"
            id="description"
            name="description"
            placeholder="Event Description"
            rows={3}
          />
          <FormField
            placeholder="Upload Image"
            type="file"
            id="image-upload"
            name="image"
            accept="image/*"
          />
        </div>
        <FormField
          type="text"
          id="location"
          name="location"
          placeholder="Location"
        />
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            type="text"
            id="organizer-name"
            name="organizer-name"
            placeholder="Organizer Name"
          />
          <FormField
            type="email"
            id="organizer-email"
            name="organizer-email"
            placeholder="Organizer Email"
          />
        </div>
        <FormField
          type="text"
          id="organizer-address"
          name="organizer-address"
          placeholder="Organizer Address"
        />
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            type="datetime-local"
            id="start-date"
            name="start-date"
            placeholder="Start Date"
            icon={<SlCalender />}
          />
          <FormField
            type="datetime-local"
            id="end-date"
            name="end-date"
            placeholder="End Date"
            icon={<SlCalender />}
          />
        </div>
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center bg-[#f6f6f6] rounded-md">
            <FormField
              type="select"
              id="status"
              name="status"
              placeholder="Select Status"
              options={['Active', 'Inactive']}
            />
          </div>
          <FormField
            type="text"
            id="tags"
            name="tags"
            placeholder="Tags (comma-separated)"
          />
        </div>
        <div className="col-span-full mt-6 p-2">
          <button
            type="submit"
            className="block w-full bg-[#268f42] hover:bg-[#46d84f] text-white font-bold py-3 px-4 rounded-full"
          >
            Register for Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
