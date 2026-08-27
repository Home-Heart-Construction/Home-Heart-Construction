/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const Home = React.lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const MediaGallery = React.lazy(() => import('./pages/MediaGallery').then(m => ({ default: m.MediaGallery })));
const GhausiEnclaveGallery = React.lazy(() => import('./pages/GhausiEnclaveGallery').then(m => ({ default: m.GhausiEnclaveGallery })));
const GoldenHeightsGallery = React.lazy(() => import('./pages/GoldenHeightsGallery').then(m => ({ default: m.GoldenHeightsGallery })));


function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToHash />
        <main className="min-h-screen bg-primary-bg selection:bg-gold selection:text-black">
          <Navbar />
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/media" element={<MediaGallery />} />
              <Route path="/projects/ghausi-enclave/gallery" element={<GhausiEnclaveGallery />} />
              <Route path="/projects/golden-heights/gallery" element={<GoldenHeightsGallery />} />
            </Routes>
          </Suspense>
          <Footer />
          <FloatingWhatsApp />
        </main>
      </Router>
    </HelmetProvider>
  );
}
