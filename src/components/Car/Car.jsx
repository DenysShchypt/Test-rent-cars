import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleCar } from './Car.styled';
import { openModal } from '../../redux/modal/modalSlice';

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
  const dispatch = useDispatch();
  return (
    <StyleCar>
      <img className="carImg" src={img} alt={description} />
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
