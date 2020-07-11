import React from 'react';
import './App.css';
import './fonts/fonts.scss';
import Navigation from './components/Navigation/Navigation.jsx';
import Footer from './components/Footer/Footer.jsx';
import SocialLink from './components/SocialLink/SocialLink.jsx';
import ListContributor from './components/ListContributor/ListContributor';

function App() {
  return (
    <div>
        <Navigation/>
        <SocialLink/>
        <ListContributor/>
        <Footer/>
    </div>
  );
}

export default App;
