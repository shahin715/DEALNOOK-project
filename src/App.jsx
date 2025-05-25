import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./pages/components/navbar/Navbar";
import Footer from "./pages/components/footer/Footer";
import HomePage from "./pages/components/hero/HomePage";
import NotFound from "./pages/components/notFound/NotFound";
import  WomenLabels from './pages/components/hero/the_biggest_labels_cart/WomenLabels';
import MenLabels from './pages/components/hero/the_biggest_labels_cart/MenLabels'

function App() {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Women", to: "/women" },
    { name: "Men", to: "/men" },
    { name: "Sale", to: "/sale" }
  ];

  const userLinks = [
    { icon: "👤", to: "/profile" },
    { icon: "🛒", to: "/cart" }
  ];

  const isAuthenticated = false;

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
      offset: 100, // Offset (in px) from the original trigger point
    });

    // Refresh AOS on route changes
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar 
          navLinks={navLinks} 
          userLinks={userLinks} 
          isAuthenticated={isAuthenticated}
        />

        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <div data-aos="fade-up">
                    <HomePage />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="200">
                    <WomenLabels />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <MenLabels />
                  </div>
                </>
              } 
            />

            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;






