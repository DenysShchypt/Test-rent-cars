import { CatalogList } from './Catalog.styled';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Car from 'components/Car/Car';
import { Modal } from 'components/Modal/Modal';
import { Section } from 'components/Section/Section';
import { fetchCars } from '../../redux/cars/operations';
import {
  selectCars,
  selectCarsPage,
  selectFilterCars,
} from '../../redux/cars/selectors';
import { changePage } from '../../redux/cars/carsSlice';
import { selectIsOpenModal } from '../../redux/modal/selectors';
import { Filter } from 'components/Filter/Filter';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';

const Catalog = () => {
  const isOpenModal = useSelector(selectIsOpenModal);
  const valueStateFilter = useSelector(selectFilterCars);
  const carsList = useSelector(selectCars);
  const page = useSelector(selectCarsPage);
  const startPage = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (startPage.current === false) {
      dispatch(fetchCars(page));
    }
    return () => {
      startPage.current = false;
    };
  }, [dispatch, page]);

  const handlePage = () => {
    if (page === 3) return;
    dispatch(changePage(page + 1));
  };

  return (
    <div>
      <Section>
        <Filter />
      </Section>
      <Section>
        <CatalogList>
          {valueStateFilter.length === 0
            ? carsList.map(car => {
                return (
                  <Car
                    key={car.id}
                    id={car.id}
                    img={car.img}
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
                  />
                );
              })
            : valueStateFilter.map(car => {
                return (
                  <Car
                    key={car.id}
                    id={car.id}
                    img={car.img}
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
                  />
                );
              })}
        </CatalogList>
      </Section>
      <Section>
        <ButtonLoadMore handlePage={handlePage} />
      </Section>
      {isOpenModal && <Modal />}
    </div>
  );
};

export default Catalog;
