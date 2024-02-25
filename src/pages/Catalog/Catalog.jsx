import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Car from 'components/Car/Car';
import { Modal } from '../../components/Modal/Modal';
import { Section } from '../../components/Section/Section';
import { fetchCars } from '../../redux/cars/operations';
import { CatalogList } from './Catalog.styled';
import {
  selectCars,
  selectCarsPage,
  selectFilter,
  selectFilterCars,
} from '../../redux/cars/carsSelectors';
import { changePage, setFilterTermCars } from '../../redux/cars/carsSlice';
import { selectIsOpenModal } from '../../redux/modal/modalSelectors';
import { Filter } from '../../components/Filter/Filter';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';

const Catalog = () => {
  const isOpenModal = useSelector(selectIsOpenModal);
  const valueStateFilter = useSelector(selectFilterCars);
  const carsList = useSelector(selectCars);
  const page = useSelector(selectCarsPage);
  const startPage = useRef(true);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const firstStateFilter = useSelector(selectFilter);
  const queryMake = searchParams.get('make');

  useEffect(() => {
    if (!queryMake) return;
    const filterCarsList = carsList.filter(cars => cars.make === queryMake);
    dispatch(setFilterTermCars(filterCarsList));
  }, [dispatch, queryMake, carsList]);

  useEffect(() => {
    if (startPage.current === false && carsList.length < 12) {
      dispatch(fetchCars(1));
    }

    return () => {
      startPage.current = false;
    };
  }, [carsList.length, dispatch, queryMake, carsList, firstStateFilter]);

  const handleSearchCar = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.make.value;
    setSearchParams({ make: value });
    const filterCarsList = carsList.filter(
      cars => cars.make === firstStateFilter
    );
    dispatch(setFilterTermCars(filterCarsList));
  };

  const handlePage = () => {
    if (page === 4) return;
    dispatch(changePage());
  };

  return (
    <div>
      <Section>
        <Filter handleSearchCar={handleSearchCar} />
      </Section>
      <Section>
        <CatalogList>
          {valueStateFilter.length === 0 && carsList.length !== 0
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
