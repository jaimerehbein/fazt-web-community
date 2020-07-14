/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React from 'react';
import './Buttons.scss';

export const ButtonSolid = ({ text }) => {
  return (
    <div className="ComponentBTNSolidClass">
      <span>{text}</span>
    </div>
  );
};

export const ButtonUnline = ({ text }) => {
  return (
    <div className="ComponentBTNUnlineClass">
      <span>{text}</span>
    </div>
  );
};

export const ButtonUnlineIcon = ({ text, icon, form,prueba }) => {
  if (icon === null) {
    return (
      <div className="ComponentBTNUnlineClass ">
        <span>{text}</span>
      </div>
    );
  } else {
    return (
      <div className="ComponentBTNUnlineClass ">
        <img className={'icon ' + form} src={icon} alt="icon" />
        {prueba}
        <span>{text}</span>
      </div>
    );
  }
};
