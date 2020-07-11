/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */
/* 
Structure to use
<CardProyect 
        nameProyect="String!" 
        imageUrl="String"
        arrayProyects=
        [
            {
                name:"String!",
                url:"String!",
                color:"String!"
            }
        ]
        favAmount=Int!
        />
*/

import React from 'react';
import './CardProyect.scss';
import heartIcon from '../../img/icons/heart.svg';
import { usePalette } from 'react-palette';

export default function CardProyect({ imageUrl, nameProyect, arrayProyects, favAmount }) {
  var { data } = usePalette(imageUrl);
  data = data.vibrant;

  if (!imageUrl) {
    data = arrayProyects[0].color;
    imageUrl = process.env.PUBLIC_URL + arrayProyects[0].url;
  }

  var backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  };

  return (
    <div className="proyectCard">
      <div className="proyectCard__background" style={backgroundStyle}>
        <div className="proyectCard__container">
          <div className="proyectCard__container__upSide">
            <div className="proyectCard__container__upSide__containerImage">
              <img className="proyectCard__container__upSide__containerImage__image" src={imageUrl} alt="" />
            </div>
            <div className="proyectCard__container__upSide__containerBar">
              <div className="proyectCard__container__upSide__containerBar__icons">
                {arrayProyects.map((item, i) => (
                  /*for now the items do not redirect missing add the routes*/
                  <img
                    key={i}
                    className="proyectCard__container__upSide__containerBar__icons__iconArray"
                    src={process.env.PUBLIC_URL + item.url}
                    alt=""
                    srcSet=""
                  />
                ))}
              </div>
              <div className="proyectCard__container__upSide__containerBar__fav">
                <span className="proyectCard__container__upSide__containerBar__fav__favAmount">
                  {favAmount}{' '}
                </span>
                <img
                  className="proyectCard__container__upSide__containerBar__fav__favIcon"
                  src={heartIcon}
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          </div>
          <div
            id="proyectCard__container__downSide-id"
            className="proyectCard__container__downSide"
            onMouseEnter={() => {
              document.getElementById('proyectCard__container__downSide-id').style.backgroundColor =
                '#DB224A';
              document.getElementById('proyectCard__container__downSide-id').style.cursor = 'pointer';
            }}
            onMouseLeave={() => {
              document.getElementById('proyectCard__container__downSide-id').style.backgroundColor = data;
            }}
            style={{ backgroundColor: data }}
          >
            <span className="proyectCard__container__downSide__nameProyect">{nameProyect}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
