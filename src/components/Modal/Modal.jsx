import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleModal } from './Modal.styled';
import { selectModalData } from '../../redux/modal/modalSelectors';
import { closeModal } from '../../redux/modal/modalSlice';

export const Modal = () => {
  const modalData = useSelector(selectModalData);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  };
  return (
    <StyleModal onClick={handleOverlayClick}>
      <div className="modal">
        <button
          onClick={() => dispatch(closeModal())}
          className="closeModalBtn"
          type="button"
        >
          x
        </button>
        <img
          className="ModalImg"
          src={`${modalData.img}`}
          alt={`${modalData.description}`}
        />
        <div className="aboutModel">
          <div className="titleDescription">
            <h3 className="titleCar">{modalData.make}</h3>
            <p className="titleCar modelColor">{modalData.model},</p>
            <p className="titleCar">{modalData.year}</p>
          </div>
          <ul className="list carFeatures">
            <li className="carText">{modalData.address}</li>
            <li className="carText">Id: {modalData.id}</li>
            <li className="carText">Year: {modalData.year}</li>
            <li className="carText">Type: {modalData.type}</li>
            <li className="carText">
              FuelConsumption: {modalData.fuelConsumption}
            </li>
            <li className="carText">EngineSize: {modalData.engineSize}</li>
          </ul>
          <p className="description">{modalData.description}</p>
        </div>
        <div className="componentBox">
          <p className="componentTitle">Accessories and functionalities:</p>
          <ul className="accessories list">
            {modalData.accessories.map(accessory => {
              return <li className="accessory">{accessory}</li>;
            })}
          </ul>
          <ul className="functionalities list">
            {modalData.functionalities.map(functionality => {
              return <li className="functionality">{functionality}</li>;
            })}
          </ul>
        </div>
        <div>
          <p className="componentTitle">Rental Conditions: </p>
          <div>
            <p className="conditions">{modalData.rentalConditions}</p>
            <p className="conditions">{modalData.mileage}</p>
            <p className="conditions">{modalData.rentalPrice}</p>
          </div>
        </div>
        <button className="modalBtn" type="button">
          Rental car
        </button>
      </div>
    </StyleModal>
  );
};
