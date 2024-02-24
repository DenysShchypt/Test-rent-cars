import Car from 'components/Car/Car';
import { useSelector } from 'react-redux';
import { Filter } from '../../components/Filter/Filter';
import { Modal } from '../../components/Modal/Modal';
import { Section } from '../../components/Section/Section';
import { favoriteCars } from '../../redux/favorite/favoriteSelectors';
import { selectIsOpenModal } from '../../redux/modal/modalSelectors';
import { selectFilterCars } from '../../redux/cars/carsSelectors';
import { FavoriteList } from './Favorites.styled';

const Favorites = () => {
  const isOpenModal = useSelector(selectIsOpenModal);
  const favoriteCarsList = useSelector(favoriteCars);
  const valueStateFilter = useSelector(selectFilterCars);
  return (
    <div>
      <Section>
        <Filter />
      </Section>
      <Section>
        <FavoriteList>
          {valueStateFilter.length === 0
            ? favoriteCarsList.map(car => {
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
        </FavoriteList>
      </Section>
      {isOpenModal && <Modal />}
    </div>
  );
};

export default Favorites;
