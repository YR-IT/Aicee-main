// App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import AboutPage from './Pages/AboutPage';
import International from './Pages/International';
import Activities from './Pages/Activities';
import BecomeMembers from './Pages/BecomeMember';
import MembersDirectory from './Pages/MembersDirectory';
import AiccBulletin from './Pages/AiccBulletin';
import ContactUs from './Pages/ContactUs';

import HeroSection from './components/HeroSection';
import CoreServices from './components/CoreServices';
import ExportImportCourse from './components/ExportImportCourse';
import ExcellenceAward from './components/ExcellenceAward';
import Initiatives from './components/Initiatives';
import CallToAction from './components/CallToAction';

const HomePage = () => (
  <>
    <HeroSection />
    <CoreServices />
    <ExportImportCourse />
    <ExcellenceAward />
    <Initiatives />
    <CallToAction />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/international" element={<International />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/members" element={<BecomeMembers />} />
        <Route path="/members-directory" element={<MembersDirectory />} />
        <Route path="/aicc-bulletin" element={<AiccBulletin />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
