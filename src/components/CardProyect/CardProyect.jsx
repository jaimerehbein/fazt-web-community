/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

/**
 * <Component for showing details of the proyect>
 * @component
 * @param   {String}    size            Size of Card (Small / Medium / Big)
 * @param   {String}    theme           Theme of Component (For Future implementations)
 * @param   {String}    nameProyect     Name of Proyect
 * @param   {String}    imageUrl        Url Of Image Proyect
 * @param   {Array}     arrayProyects   Array of Technologies
 * @param   {Number}    favAmount       Amount of Favorites
 * @return  {<CardProyect>}
 */

import React from 'react';
import PropTypes from 'prop-types';
import './CardProyect.scss';
import heartIcon from '../../img/icons/heart.svg';
import { usePalette } from 'react-palette';

const CardProyect = ({ id, nameProyect, imageUrl, arrayProyects, favAmount, size }) => {
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

  const styleCard = (size) => {
    if (size === 's-card') {
      return {
        fontTitle: 'small',
        fontDesc: 'x-small',
      };
    } else if (size === 'm-card') {
      return {
        fontTitle: 'calc(.2em + 1vw) ',
        fontDesc: 'calc(.1em + 1vw)',
      };
    } else if (size === 'b-card') {
      return {
        fontTitle: 'calc(1em + 1vw)',
        fontDesc: 'calc(.5em + 1vw)',
      };
    } else {
      return {
        fontTitle: 'calc(.2em + 1vw) ',
        fontDesc: 'calc(.1em + 1vw)',
      };
    }
  };

  return (
    <div
      className="proyectCard"
    >
      <div className="proyectCard__background" style={backgroundStyle}>
        <div className="proyectCard__container">
          <div className="proyectCard__container__upSide">
            <div className="proyectCard__container__upSide__containerImage">
              <img className="proyectCard__container__upSide__containerImage__image" src={imageUrl} alt="" />
            </div>
            <div className="proyectCard__container__upSide__containerBar">
              <div className="proyectCard__container__upSide__containerBar__icons">
                {arrayProyects.slice(0, 3).map((item, i) => (
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
                <span
                  className="proyectCard__container__upSide__containerBar__fav__favAmount"
                  style={{ fontSize: styleCard(size).fontDesc }}
                >
                  {favAmount}
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
            id={`proyectCard__container__downSide-id${id}`}
            className="proyectCard__container__downSide"
            onMouseEnter={() => {
              document.getElementById(`proyectCard__container__downSide-id${id}`).style.backgroundColor =
                '#DB224A';
              document.getElementById(`proyectCard__container__downSide-id${id}`).style.cursor = 'pointer';
            }}
            onMouseLeave={() => {
              document.getElementById(`proyectCard__container__downSide-id${id}`).style.backgroundColor = data;
            }}
            style={{ backgroundColor: data }}
          >
            <span
              className="proyectCard__container__downSide__nameProyect"
              style={{ fontSize: styleCard(size).fontTitle }}
            >
              {nameProyect}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

CardProyect.propTypes = {
  id: PropTypes.number,
  size: PropTypes.string,
  theme: PropTypes.string,
  nameProyect: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  arrayProyects: PropTypes.array,
  favAmount: PropTypes.string.isRequired,
};

CardProyect.defaultProps = {
  id: 0,
  nameProyect: 'Missing Project',
  imageUrl: '',
  arrayProyects: [
    {
      name: 'NotFound',
      url: '/img/icons/notfound.svg',
      color: '#E04149',
    },
    {
      name: 'NotFound',
      url: '/img/icons/notfound.svg',
      color: '#E04149',
    },
    {
      name: 'NotFound',
      url: '/img/icons/notfound.svg',
      color: '#E04149',
    },
  ],
  favAmount: '-7',
  size: 'm-card',
  theme: 'white',
};

export default CardProyect;
