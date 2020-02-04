import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/commonComponents/footer/Footer';
import NavBar from './components/commonComponents/navBar/NavBar';
import HomePage from './components/pages/homePage/HomePage';
import OurTeam from './components/pages/aboutPage/ourTeam/OurTeam';
import BankDetails from './components/pages/aboutPage/bankDetails/BankDetails';
import BrickBranchOffice from './components/pages/aboutPage/brickBranchOffice/BrickBranchOffice';
import Marketing from './components/pages/servicesPage/marketing/Marketing';
import Consultation from './components/pages/servicesPage/consultation/Consultation';
import Construction from './components/pages/servicesPage/construction/Construction';
import RealTors from './components/pages/servicesPage/realTors/RealTors';
import ParkViewCityIslamabad from './components/pages/weDealInPage/parkViewCityIslamabad/ParkViewCityIslamabad';
import ParkViewCityLahore from './components/pages/weDealInPage/parkViewCityLahore/ParkViewCityLahore';
import CapitalSmartCity from './components/pages/weDealInPage/capitalSmartCity/CapitalSmartCity';
import LahoreSmartCity from './components/pages/weDealInPage/lahoreSmartCity/LahoreSmartCity';
import UpcomingProjects from './components/pages/portFolioPage/UpcomingProjects';
import ContactUs from './components/pages/contactUs/ContactUs';
import NotFound404 from './components/pages/notFound/notFound404';
import WhatsappIcon from './components/commonComponents/whatsappIcon/WhatsappIcon';
import Login from './components/pages/loginPage/Login';
import { useDispatch } from 'react-redux';
import { allData } from './RTK/Reducers/Reducers';
import PreLoader from './components/commonComponents/preLoader/PreLoader';
import Dashboard from './components/pages/dashboard/Dashboard';
import SliderEdite from './components/pages/dashboard/edit/SliderEdite';
import Ourteamedit from './components/pages/dashboard/edit/Ourteamedit';
import Branchofficeedit from './components/pages/dashboard/edit/Branchofficeedit';
import Resetpassword from './components/pages/resetPassword/ResetPass';
import ForgotPass from './components/pages/resetPassword/ForgotPass';
import BahriaTown from './components/pages/weDealInPage/bahriaTown/BahriaTown';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(allData())
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [dispatch]);


  return (
    <div>

      <PreLoader />
      <Routes>
        <Route path="/" element={
          <>
            <NavBar />
            <HomePage />
            <Footer />
          </>
        } />
        {/* AboutPage */}
        <Route path="/Our-Team" element={
          <>
            <NavBar />
            <OurTeam />
            <Footer />
          </>
        } />
        <Route path="/Branch-Office" element={
          <>
            <NavBar />
            <BrickBranchOffice />
            <Footer />
          </>
        } />
        <Route path="/Bank-Details" element={
          <>
            <NavBar />
            <BankDetails />
            <Footer />
          </>
        } />
        {/* ServicesPage */}
        <Route path="/Real-Tors" element={
          <>
            <NavBar />
            <RealTors />
            <Footer />
          </>
        } />
        <Route path="/Consultation" element={
          <>
            <NavBar />
            <Consultation />
            <Footer />
          </>
        } />
        <Route path="/Construction" element={
          <>
            <NavBar />
            <Construction />
            <Footer />
          </>
        } />
        <Route path="/Marketing" element={
          <>
            <NavBar />
            <Marketing />
            <Footer />
          </>
        } />
        {/* Dashbord */}
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/slideredite" element={<SliderEdite />} />
          <Route path='/dashboard/ourteamedit' element={<Ourteamedit />} />
          <Route path='/dashboard/branchofficeedit' element={<Branchofficeedit />} />
        </Route>

        {/* WeDealIn */}
        <Route path="/Park-View-City-Islamabad" element={
          <>
            <NavBar />
            <ParkViewCityIslamabad />
            <Footer />
          </>
        } />
        <Route path="/Park-View-City-Lahore" element={
          <>
            <NavBar />
            <ParkViewCityLahore />
            <Footer />
          </>
        } />
        <Route path="/Capital-Smart-City" element={
          <>
            <NavBar />
            <CapitalSmartCity />
            <Footer />
          </>
        } />
        <Route path="/Lahore-Smart-City" element={
          <>
            <NavBar />
            <LahoreSmartCity />
            <Footer />
          </>
        } />
        <Route path="/Bahria-Town" element={
          <>
            <NavBar />
            <BahriaTown />
            <Footer />
          </>
        } />
        {/* Portfolio */}
        <Route path="/Upcoming-Projects" element={
          <>
            <NavBar />
            <UpcomingProjects />
            <Footer />
          </>
        } />
        {/* ContactUs */}
        <Route path="/Contact-Us" element={
          <>
            <NavBar />
            <ContactUs />
            <Footer />
          </>
        } />
        {/* ContactUs */}
        <Route path="/login" element={
          <>
            <Login />
            <Footer />
          </>
        } />
        {/* 404 */}
        <Route path="*" element={
          <>
            <NavBar />
            <NotFound404 />
            <Footer />
          </>
        } />
        <Route path="/reset/:token" element={<Resetpassword />} />
        <Route path="/forgot" element={<ForgotPass />} />
      </Routes>
      <WhatsappIcon />
    </div>

  );
}

export default App;
