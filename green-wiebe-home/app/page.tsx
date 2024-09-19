'use client';

import { useState, useEffect } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProfilePage from "@/components/ProfilePage";
import SignRequestModal from "@/components/SignRequestModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (!hasVisited) {
      setIsModalOpen(true);
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  return (
    <main>
      <Header />
      <ProfilePage />
      <Footer />
      <SignRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default Home;