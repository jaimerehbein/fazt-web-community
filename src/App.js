import React from 'react';
import './App.css';
import './fonts/fonts.scss';
import Navigation from './components/Navigation/Navigation.jsx';
import Footer from './components/Footer/Footer.jsx';
import SocialLink from './components/SocialLink/SocialLink.jsx';
import ListContributor from './components/ListContributor/ListContributor';
import CardGrid from './components/CardsGrid/CardsGrid'
function App() {
  return (
    <div>
        <Navigation/>
        <CardGrid/>
        <SocialLink/>
        <ListContributor/>
        <Footer/>
    </div>
  );
}

export default App;
