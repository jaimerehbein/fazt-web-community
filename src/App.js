import React from 'react';
import './App.css';
import './fonts/fonts.scss';
import Navigation from './components/Navigation/Navigation.jsx';
import SocialLink from './components/SocialLink/SocialLink.jsx';

function App() {
  return (
    <div>
        <Navigation/>
        <SocialLink/>
    </div>
  );
}

export default App;
