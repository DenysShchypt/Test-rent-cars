import { CatalogList } from './Catalog.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Section from 'components/Section/Section';
import Car from 'components/Car/Car';
import { Modal } from 'components/Modal/Modal';

const Catalog = () => {
  const [carsList, setCarsList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://65d61b2df6967ba8e3bd85bb.mockapi.io/rent-cars?page=1&limit=20`
        );
        setCarsList(data);
      } catch (error) {
        return error.message;
      }
    };
    fetchData();
  }, []);

  const openModal = someDataToModal => {
    setIsOpenModal(true);
    setModalData(someDataToModal);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setModalData(null);
  };

  return (
    <div>
      <Section>
        <CatalogList>
          {carsList.map(car => {
            return (
              <Car
                id={car.id}
                img={car.img}
                key={car.id}
                type={car.type}
                fuelConsumption={car.fuelConsumption}
                engineSize={car.engineSize}
                make={car.make}
                model={car.model}
                year={car.year}
                rentalPrice={car.rentalPrice}
                description={car.description}
                address={car.address}
                rentalCompany={car.rentalCompany}
                functionalities={car.functionalities}
                accessories={car.accessories}
                rentalConditions={car.rentalConditions}
                mileage={car.mileage}
                openModal={openModal}
              />
            );
          })}
        </CatalogList>
      </Section>
      {isOpenModal && <Modal closeModal={closeModal} modalData={modalData} />}
    </div>
  );
};

export default Catalog;
