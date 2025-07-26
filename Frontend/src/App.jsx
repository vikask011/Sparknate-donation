import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import BottomBanner from './Components/BottomBanner';
import Footer from './Components/Footer';

// Page Components
import AdminPage from './Pages/Adminpage';
import Donate from './Pages/Donate';
import About from './Pages/Aboutpage';
import Contact from './Pages/Contactpage';
import StoryPage from './Pages/Storypage';

// ✅ Optional: HomePage extracted for clarity
const HomePage = () => (
  <>
    <Body />
    <BottomBanner />
  </>
);

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/story/:id" element={<StoryPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
