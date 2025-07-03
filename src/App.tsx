import { useState } from 'react';
import Navbar from './components/Navbar';
import AboutPage from './Pages/AboutPage.tsx';
import International from './Pages/International.tsx';
import HeroSection from './components/HeroSection.tsx';
import CoreServices from './components/CoreServices';
import ExportImportCourse from './components/ExportImportCourse';
import ExcellenceAward from './components/ExcellenceAward';
import CallToAction from './components/CallToAction.tsx';
import Footer from './components/Footer';
import Activities from './Pages/Activities';
import BecomeMembers from './Pages/BecomeMember.tsx';
import MembersDirectory from './Pages/MembersDirectory.tsx';
import AiccBulletin from './Pages/AiccBulletin.tsx';
import ContactUs from  './Pages/ContactUs.tsx'


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'international':
        return <International />;
         case 'activities':
      return <Activities />;
      case 'members':
        return <BecomeMembers />;
        case 'members-directory':
          return <MembersDirectory />;
          case 'AICC-Bulletin':
            return <AiccBulletin />;
            case 'Contact-Us':
              return <ContactUs />;
      default:
        return (
          <>
            <HeroSection />
            <CoreServices />
            <ExportImportCourse />
            <ExcellenceAward />
            <CallToAction />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      {renderPage()}
    </div>
  );
}

export default App;
