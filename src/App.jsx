import { useState } from 'react'
import './index.css'

// 1. Layout & Navigation
import TopHeader from './public/layout/TopHeader.jsx'
import Navbar from './public/layout/Navbar.jsx'

// 2. Hero & Brand Identity
import HeroSection from './public/layout/HeroSection.jsx'
import TechPartners from './public/layout/TechPartners.jsx'
import CarouselSection from './public/layout/CarouselSection.jsx'
import ElevateBanner from './public/layout/ElevateBanner.jsx'

// 3. Courses & Educational Sections
import CoursesSection from './public/layout/CoursesSection.jsx'
import DaylongCourses from './public/layout/DaylongCourses.jsx'

// 4. Specialized Program Sections
import WebinarSection from './public/layout/WebinarSection.jsx'
import ProjectBasedClasses from './public/layout/ProjectBasedClasses.jsx'
import ConnectedCompanies from './public/layout/ConnectedCompanies.jsx'
import HallOfFame from './public/layout/HallOfFame.jsx'

// 5. Conversion & Trust
import AdmissionBanner from './public/layout/AdmissionBanner.jsx'
import PaymentGateways from './public/layout/PaymentGateways.jsx'

// 6. Final Footer
import Footer from './public/layout/Footer.jsx'

function App() {
  return (
    <div className="font-sans antialiased text-slate-900">
      <TopHeader />
      <Navbar />
      <HeroSection />
      <TechPartners />
      <CarouselSection />
      <ElevateBanner />
      <CoursesSection />
      <DaylongCourses />
      <WebinarSection />
      <ProjectBasedClasses />
      <ConnectedCompanies />
      <HallOfFame />
      <AdmissionBanner />
      <PaymentGateways />
      <Footer />
    </div>
  )
}

export default App