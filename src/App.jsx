import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/components/navbar/Nabar";
import Footer from "./pages/components/footer/Footer";
import Hero from "./pages/components/hero/Hero";
import NotFound from "./pages/components/notFound/NotFound";

// Optional: uncomment when pages are ready
// import HomePage from "./pages/HomePage";
// import ProductPage from "./pages/ProductPage";
// import CartPage from "./pages/CartPage";
// import CheckoutPage from "./pages/CheckoutPage";

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
            {/* Uncomment when pages are ready */}
            {/* <Route path="/" element={<HomePage />} /> */}
            {/* <Route path="/product/:id" element={<ProductPage />} /> */}
            {/* <Route path="/cart" element={<CartPage />} /> */}
            {/* <Route path="/checkout" element={<CheckoutPage />} /> */}

            <Route path="/" element={<Hero />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;





