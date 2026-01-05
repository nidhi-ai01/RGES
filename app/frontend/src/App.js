import React, { useState } from "react";
import "./App.css";
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WhoWeSupportSection } from './components/WhoWeSupportSection';
import { JourneySection } from './components/JourneySection';
import { WhatWeOfferSection } from './components/WhatWeOfferSection';
import { FounderLedSection } from './components/FounderLedSection';
import { ProgramsSection } from './components/ProgramsSection';
import { PartnersSection } from './components/PartnersSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { IdeaValidationModal } from './components/IdeaValidationModal';
import { ApplicationModal } from './components/ApplicationModal';
import { PartnerModal } from './components/PartnerModal';

function App() {
  const [isIdeaValidationModalOpen, setIsIdeaValidationModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <HeroSection
        onValidateIdea={() => setIsIdeaValidationModalOpen(true)}
        onJoinHub={() => setIsApplicationModalOpen(true)}
      />
      <AboutSection />
      <WhoWeSupportSection />
      <JourneySection />
      <WhatWeOfferSection />
      <FounderLedSection />
      <ProgramsSection onApply={() => setIsApplicationModalOpen(true)} />
      <PartnersSection />
      <CTASection
        onApply={() => setIsApplicationModalOpen(true)}
        onPartner={() => setIsPartnerModalOpen(true)}
      />
      <Footer />

      {/* Modals */}
      <IdeaValidationModal
        isOpen={isIdeaValidationModalOpen}
        onClose={() => setIsIdeaValidationModalOpen(false)}
      />
      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
      />
      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />

      <Toaster />
    </div>
  );
}

export default App;
