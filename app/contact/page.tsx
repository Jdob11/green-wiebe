'use client';

import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from './Contact';

const ContactPage = () => {

  return (
    <main className="min-h-screen relative">
      <Header />
      <Contact />
      <Footer />
    </main>
  );
};

export default ContactPage;