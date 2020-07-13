/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */
/*
    proyectName="String"
    proyectImage="String"
    proyectDescription="String"
    proyectGit="String"
    proyectURL="String"

    const arrayTech = [ 
        {
            name: "React"
            url: "../img/react.svg"
        },
        {
            name: "Javascript"
            url: "../img/javascript.svg"
        },
        {
            name: "Node"
            url: "../img/node.svg"
        }
    ]
    <ProyectInfo proyectName={proyectName} proyectImage={proyectImage} proyectDescription={proyectDescription} proyectGit={URL} proyectURL={URL}
*/

import React from 'react';
import './ProyectInfo.scss';
import Github from './svg/github.svg';
import URL from './svg/url.svg';
import TechLogo from '../TechLogos/TechLogos.jsx';
import PropTypes from 'prop-types';

const ProyectInfo = ({
  proyectName,
  proyectImage,
  proyectDescription,
  arrayTech,
  proyectGit,
  proyectURL
}) => {
  return (
    <div className="proyectInfo">
      <div className="title">
        <div className="Image">
          <img className="Image__1" src={proyectImage} alt="img" />
        </div>
        <div className="description__2">
          <h1 className="title__4">Code & Demo</h1>
          <div className="hover">
            <div>
              <img src={Github} className="Image__3" alt="git" />
            </div>
            <div>
              <img src={URL} className="Image__3" alt="url" />
            </div>
          </div>

          <div className="hover__2">
            <div className="hover__3">
              <a className="hover__3" href={proyectGit}>
                Click aqui
              </a>
            </div>
            <div className="hover__4">
              <a className="hover__4" href={proyectURL}>
                URL
              </a>
            </div>
          </div>
        </div>
        <div className="description">
          <h1 className="title__1">{proyectName}</h1>
          <h2 className="title__2">Descripcion del proyecto</h2>
          <p className="title__3">{proyectDescription}</p>
          <h2 className="title__2">Tecnologia usada</h2>
          <div>
            {arrayTech.map((item) => (
              <TechLogo logo={process.env.PUBLIC_URL + item.url} text={item.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
ProyectInfo.propTypes = {
  proyectName: PropTypes.string.isRequired,
  proyectDescription: PropTypes.string.isRequired,
  proyectImage: PropTypes.string.isRequired,
  arrayTech: PropTypes.array,
  proyectGit: PropTypes.string,
  proyectURL: PropTypes.string
};
ProyectInfo.defaultProps = {
  proyectName: 'Nombre del proyecto',
  proyectDescription:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eos perspiciatis nemo itaque voluptatum odio architecto esse! Ipsa, quas modi.',
  proyectImage: 'https://www.dekrs.com/img/image_not_found.png',
  arrayTech: [
    {
      name: 'not found',
      url: 'https://www.dekrs.com/img/image_not_found.png'
    },
    {
      name: 'not found',
      url: 'https://www.dekrs.com/img/image_not_found.png'
    },
    {
      name: 'not found',
      url: 'https://www.dekrs.com/img/image_not_found.png'
    }
  ],
  proyectGit: '',
  proyectURL: ''
};

export default ProyectInfo;
