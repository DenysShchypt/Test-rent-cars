import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Car from 'components/Car/Car';
import { Modal } from '../../components/Modal/Modal';
import { Section } from '../../components/Section/Section';
import { fetchCars, firstCars } from '../../redux/cars/operations';
import { CatalogList } from './Catalog.styled';
import {
  selectCars,
  selectCarsPage,
  selectFilter,
  selectFilterCars,
  selectIsLoading,
} from '../../redux/cars/carsSelectors';
import { changePage, setFilterTermCars } from '../../redux/cars/carsSlice';
import { selectIsOpenModal } from '../../redux/modal/modalSelectors';
import { Filter } from '../../components/Filter/Filter';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import Loader from 'components/Loader/Loader';

const Catalog = () => {
  const isOpenModal = useSelector(selectIsOpenModal);
  const valueStateFilter = useSelector(selectFilterCars);
  const carsList = useSelector(selectCars);
  const page = useSelector(selectCarsPage);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const firstStateFilter = useSelector(selectFilter);

  useEffect(() => {
    const queryMake = searchParams.get('make');
    if (!queryMake) return;
    const filterCarsList = carsList.filter(cars => cars.make === queryMake);
    dispatch(setFilterTermCars(filterCarsList));
  }, [dispatch, carsList, searchParams]);

  useEffect(() => {
    dispatch(firstCars());
    dispatch(changePage(1));
  }, [dispatch]);

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
    dispatch(changePage(page + 1));
    dispatch(fetchCars(page + 1));
  };

  return (
    <div>
      <Section>
        <Filter handleSearchCar={handleSearchCar} />
      </Section>
      <Section>
        {isLoading && <Loader />}
        <CatalogList>
          {valueStateFilter.length === 0 && carsList.length !== 0
            ? carsList.map(car => {
                return <Car key={car.id} oneCar={car} />;
              })
            : valueStateFilter.map(car => {
                return <Car key={car.id} oneCar={car} />;
              })}
        </CatalogList>
      </Section>
      <Section>
        {page < 3 && <ButtonLoadMore handlePage={handlePage} />}
      </Section>
      {isOpenModal && <Modal />}
    </div>
  );
};

export default Catalog;
