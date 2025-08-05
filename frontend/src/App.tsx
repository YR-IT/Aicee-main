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

import BlogManager from './Pages/admin/BlogManager.tsx ';        // ✅ Adjust if in a different folder
import MemberManager from './Pages/admin/MemberManager.tsx ';    

import HeroSection from './components/HeroSection';
import CoreServices from './components/CoreServices';
import ExportImportCourse from './components/ExportImportCourse';
import ExcellenceAward from './components/ExcellenceAward';
import Initiatives from './components/Initiatives';
import CallToAction from './components/CallToAction';
import NominationForm from './Pages/NominationForm';
import StartYourBusiness from './Pages/Business/StartYourBusiness';
import BuildYourBusiness from './components/BuildYourBusiness';

import SocialInitiative from './Pages/Initiatives/SocialInitiative';
import EducationalInitiative from './Pages/Initiatives/EducationalInitiative';
import MSMESupportOutreach from './Pages/Initiatives/MSMESupportOutreach';
import CorporateCompliances from './Pages/Business/CorporateCompliances';
import RegulatoryFiling from './Pages/Business/RegulatoryFiling';
import MaintainYourBusiness from './Pages/Business/MaintainBusiness';
import IntellectualProperty from './Pages/Initiatives/IntellectualProperty';
import IndianLaws from './Pages/Initiatives/IndianLaws';
import CompanyDetails from './Pages/Companies/CompanyDetails';

import BecomeMember from './Pages/BecomeMember';
import CoursesPage from './Pages/Courses Page/Courses';
import LoginPage from './Pages/Courses Page/LoginPage';
import MemberBenefits from './Pages/MemberBenefits';

import AdminPanel from './Pages/admin/AdminPanel';

const HomePage = () => (
  <>
    <HeroSection />
    <CoreServices />
    <ExportImportCourse />
    <ExcellenceAward />
    <Initiatives />
    <BuildYourBusiness/>
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
        <Route path="/nomination" element={<NominationForm />} />
        <Route path="/start-your-business" element={<StartYourBusiness />} />
        <Route path="/corporate-compliances" element={<CorporateCompliances />} />
        <Route path="/regulatory-filing" element={<RegulatoryFiling />} />
        <Route path="/maintain-your-business" element={<MaintainYourBusiness />} />
        <Route path="/initiatives/social-initiative" element={<SocialInitiative />}/>
        <Route path="/initiatives/educational-initiative" element={<EducationalInitiative/>}/>
        <Route path="/initiatives/msme-support-&-outreach" element={<MSMESupportOutreach />} />
        <Route path="/initiatives/Protecting-Intellectual-Property-Rights" element={<IntellectualProperty/>}/>
        <Route path="/initiatives/Know-The-Indian-Law" element={<IndianLaws/>}/>
        <Route path="/company/:id" element={<CompanyDetails />} />
        <Route path="/become-a-member" element={<BecomeMember />} />
        <Route path="/Courses" element={<CoursesPage />} />
        <Route path="/login" element={<LoginPage />} />
       
        <Route path="/member-benefits" element={<MemberBenefits />} />
        <Route path ="/admin" element={<AdminPanel />} />
        <Route path="/admin/blogs" element={<BlogManager />} />
<Route path="/admin/members" element={<MemberManager />} />

     
      
        
  
    
      </Routes>
      <Footer />
    </div>
  );
}

export default App;