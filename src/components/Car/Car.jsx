import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { StyleCar } from './Car.styled';
import { openModal } from '../../redux/modal/modalSlice';
import { ReactComponent as IconHeart } from '../../assets/icons/heart.svg';
import {
  addFavoriteCar,
  removeFavoriteCar,
} from '../../redux/favorite/favoriteSlice';

const Car = ({
  model,
  img,
  make,
  type,
  year,
  rentalPrice,
  description,
  address,
  rentalCompany,
  id,
  functionalities,
  fuelConsumption,
  engineSize,
  accessories,
  rentalConditions,
  mileage,
}) => {
  const oneCar = {
    model,
    img,
    make,
    type,
    year,
    rentalPrice,
    description,
    address,
    rentalCompany,
    id,
    functionalities,
    fuelConsumption,
    engineSize,
    accessories,
    rentalConditions,
    mileage,
  };
  const dispatch = useDispatch();
  const activeElement = useRef(null);

  const handleFavorite = () => {
    const listFavoriteCars = JSON.parse(
      JSON.parse(localStorage.getItem('persist:favorite')).favorite
    ).listFavoriteCars;
    const hasDuplicatesCar = listFavoriteCars.some(
      favorite => favorite.id === id
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
        <img className="carImg" src={img} alt={description} />
        <IconHeart
          ref={activeElement}
          className="heart"
          onClick={handleFavorite}
        ></IconHeart>
      </div>

      <div className="description">
        <div className="titleDescription">
          <h3 className="titleCar">{make}</h3>
          <p className="titleCar modelColor">{model},</p>
          <p className="titleCar">{year}</p>
          <p className="price ">{rentalPrice}</p>
        </div>
        <ul className="list carFeatures">
          <li className="carText">{address}</li>
          <li className="carText">{rentalCompany}</li>
          <li className="carText">{model}</li>
          <li className="carText">{id}</li>
          <li className="carText">{functionalities[0]}</li>
        </ul>
      </div>
      <button
        onClick={() =>
          dispatch(
            openModal({
              model,
              img,
              make,
              type,
              year,
              rentalPrice,
              description,
              address,
              rentalCompany,
              id,
              functionalities,
              fuelConsumption,
              engineSize,
              accessories,
              rentalConditions,
              mileage,
            })
          )
        }
        className="carBtn"
        type="button"
      >
        Learn more
      </button>
    </StyleCar>
  );
};

export default Car;
