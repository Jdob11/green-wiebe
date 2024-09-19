'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import sicamousImg from '@/public/Sicamous.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="relative w-full px-5 min-h-screen">
      <Image
        src={sicamousImg}
        alt="Contact background"
        className="absolute inset-0 object-cover"
        fill
        priority
      />
      <div className="relative z-10 w-full pt-36 md:pt-36 px-4 md:px-0 md:w-full md:ml-auto md:pr-0 lg:w-3/4 lg:pr-24">
        <h2 className="text-2xl text-shadow-lg text-white font-bold mb-4 text-center md:text-right">Contact Jed</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 text-black border rounded"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 text-black border rounded"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-2 text-black border rounded"
              rows={4}
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" className="bg-green-800 hover:bg-green-500 text-white px-4 py-2 rounded pointer-cursor">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;