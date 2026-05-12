import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import HomePage from './pages/HomePage.jsx';

// Placeholder pages for routing
const EventsPage = () => <div className="text-center text-2xl mt-10">Events Page</div>;
const GalleryPage = () => <div className="text-center text-2xl mt-10">Gallery Page</div>;
const AboutPage = () => <div className="text-center text-2xl mt-10">About Page</div>;
const LoginPage = () => <div className="text-center text-2xl mt-10">Login Page</div>;
const DashboardPage = () => <div className="text-center text-2xl mt-10">Dashboard Page</div>;

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;