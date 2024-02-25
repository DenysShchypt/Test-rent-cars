import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { StyleCar } from './Car.styled';
import { openModal } from '../../redux/modal/modalSlice';
import { ReactComponent as IconHeart } from '../../assets/icons/heart.svg';
import {
  addFavoriteCar,
  removeFavoriteCar,
} from '../../redux/favorite/favoriteSlice';

const Car = ({ oneCar }) => {
  const dispatch = useDispatch();
  const activeElement = useRef(null);

  useEffect(() => {
    const listFavoriteCars = JSON.parse(
      JSON.parse(localStorage.getItem('persist:auto')).favorite
    ).listFavoriteCars;
    const hasDuplicatesCar = listFavoriteCars.some(
      favorite => favorite.id === oneCar.id
    );
    if (hasDuplicatesCar && activeElement.current) {
      activeElement.current.classList.add('activeHeart');
    }
  }, [oneCar.id]);

  const handleFavorite = () => {
    const listFavoriteCars = JSON.parse(
      JSON.parse(localStorage.getItem('persist:auto')).favorite
    ).listFavoriteCars;
    const hasDuplicatesCar = listFavoriteCars.some(
      favorite => favorite.id === oneCar.id
    );
    if (hasDuplicatesCar && activeElement.current) {
      dispatch(removeFavoriteCar(oneCar));
      activeElement.current.classList.remove('activeHeart');
    }
    if (!hasDuplicatesCar && activeElement.current) {
      dispatch(addFavoriteCar(oneCar));
      activeElement.current.classList.add('activeHeart');
    }
  };
  return (
    <StyleCar>
      <div className="boxImg">
        <img
          className="carImg"
          src={oneCar.img || oneCar.photoLink}
          alt={oneCar.description}
        />
        <div className="heart">
          <button onClick={handleFavorite} type="button" className="heartBtn">
            <IconHeart ref={activeElement}></IconHeart>
          </button>
        </div>
      </div>

      <div className="description">
        <div className="titleDescription">
          <h3 className="titleCar">{oneCar.make}</h3>
          <p className="titleCar modelColor">{oneCar.model},</p>
          <p className="titleCar">{oneCar.year}</p>
          <p className="price ">{oneCar.rentalPrice}</p>
        </div>
        <ul className="list carFeatures">
          <li className="carText">{oneCar.address} | </li>
          <li className="carText">{oneCar.rentalCompany} | </li>
          <li className="carText">{oneCar.model} | </li>
          <li className="carText">{oneCar.id} | </li>
          <li className="carText">{oneCar.functionalities[0]}</li>
        </ul>
      </div>
      <button
        onClick={() => dispatch(openModal(oneCar))}
        className="carBtn"
        type="button"
      >
        Learn more
      </button>
    </StyleCar>
  );
};

export default Car;
