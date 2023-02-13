import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<Link1 />} />
        <Route path="/signup" element={<Link2 />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>

    </>
  );
  
  {/* Below functions redirects to external links */}
  function Link1() {
    window.location.replace = 'https://app.jaeves.com/login/';
    return null;    
  }
  function Link2() {
    window.location.replace = 'https://app.jaeves.com/signup';
    return null;
  }
}

export default App;
