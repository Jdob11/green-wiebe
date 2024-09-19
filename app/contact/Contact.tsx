'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import sicamousImg from '@/public/Sicamous.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen pt-32 pb-96 lg:pb-0">
      <Image
        src={sicamousImg}
        alt="View of Sicamous"
        className="absolute inset-0 object-cover"
        fill
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-10 lg:w-3/4 lg:ml-80 md:mx-4 px-4">
        <h2 className="text-3xl font-bold mb-6 text-white text-shadow-lg">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-2 rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-2 rounded"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full p-2 rounded h-32"
          ></textarea>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full p-2 rounded bg-button text-white ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {submitStatus === 'success' && (
          <p className="mt-4 text-green-500 font-bold">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="mt-4 text-red-500 font-bold">{errorMessage || 'Failed to send message. Please try again.'}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;