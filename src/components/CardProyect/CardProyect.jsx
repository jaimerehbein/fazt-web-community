/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

/**
 * <Component for showing details of the proyect>
 * @component
 * @param   {String}    nameProyect     Name of Proyect
 * @param   {String}    imageUrl        Url Of Image Proyect
 * @param   {Array}     arrayProyects   Array of Technologies
 * @param   {Number}    favAmount       Amount of Favorites
 * @return  {<CardProyect>}
 * @example
 * const nameProyect= "React App Name"
 * const imageUrl = "https://api/image.jpg"
 * const arrayProyects = [
 *                         {
 *                            name: "React",
 *                            url: "/img/icons/react.svg",
 *                            color: "#FFFFFF"
 *                         },
 *                         {
 *                            name: "GraphQL",
 *                            url: "/img/icons/graphql.svg",
 *                            color: "#FFFFFF"
 *                         },
 *                         {
 *                            name: "Python",
 *                            url: "img/icons/python.svg"
 *                            color: "#FFFFFF"
 *                         }]
 * const favAmount = 10
 * returns(
 * <CardProyect nameProyect={nameProyect} imageUrl={imageUrl} arrayProyects={arrayProyects} favAmount={favAmount} >
 * )
 */

import React from 'react';
import PropTypes from 'prop-types';
import './CardProyect.scss';
import heartIcon from '../../img/icons/heart.svg';
import { usePalette } from 'react-palette';

const CardProyect = ({nameProyect, imageUrl, arrayProyects, favAmount }) => {
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
};
CardProyect.propTypes = {
  /**
   * Name of Proyect nameProyect
   */
  nameProyect: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  arrayProyects: [
    {
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    },
  ],
  favAmount: PropTypes.number,
};
CardProyect.defaultProps = {
  nameProyect: 'nameProyect',
  imageUrl: '',
  arrayProyects: [
    {
      name: 'React',
      url: '/img/icons/react.svg',
      color: '#53C1DE',
    },
  ],
  favAmount: '0',
};
export default CardProyect;
