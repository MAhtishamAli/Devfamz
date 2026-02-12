import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ServicePage from './pages/ServicePage'; // Dynamic Detail Page
import ProductPage from './pages/ProductPage'; // Dynamic Product Page
import ProcessPage from './pages/ProcessPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './components/BlogPost';
import NotFound from './pages/NotFound';

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServicePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/process" element={<ProcessPage />} />
            {/* <Route path="/pricing" element={<PricingPage />} /> */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
