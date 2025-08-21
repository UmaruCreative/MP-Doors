import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SpecHighlightsSection from './components/SpecHighlightsSection';
import ExploreSection from './components/ExploreSection';
import WhyMPDoorsSection from './components/WhyMPDoorsSection';
import FeaturedStylesSection from './components/FeaturedStylesSection';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SpecHighlightsSection />
        <ExploreSection />
        <WhyMPDoorsSection />
        <FeaturedStylesSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;