/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React from 'react';
import './Parallax.scss';
import {ButtonUnlineIcon} from '../Buttons/Buttons.jsx';
//import GitHubIcon from '@assets/img/icons/github.svg';
import DiscordSvg from '@assets/img/icons/discord-brands.svg';
const Hero = () => {
  return (
    <div className="Parallax">
      <div className="Parallax__redes">
        <ButtonUnlineIcon text="Discord"icon={DiscordSvg} prueba={<span>hola</span>}/>
        <ButtonUnlineIcon text="Github" icon={DiscordSvg} form="icon--circule"/>
      </div>
      <h1>FAZT TECH</h1>
      <h6>Community</h6>
    </div>
  );
};

export default Hero;