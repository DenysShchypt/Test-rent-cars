import Car from 'components/Car/Car';
import { useSelector } from 'react-redux';
import { Filter } from '../../components/Filter/Filter';
import { Modal } from '../../components/Modal/Modal';
import { Section } from '../../components/Section/Section';
import { favoriteCars } from '../../redux/favorite/favoriteSelectors';
import { selectIsOpenModal } from '../../redux/modal/modalSelectors';
import {
  selectFilterCars,
  selectIsLoading,
} from '../../redux/cars/carsSelectors';
import { FavoriteList } from './Favorites.styled';
import Loader from 'components/Loader/Loader';
import { FavoriteChoose } from 'components/FavoriteChoose/FavoriteChoose';

const Favorites = () => {
  const isOpenModal = useSelector(selectIsOpenModal);
  const favoriteCarsList = useSelector(favoriteCars);
  const valueStateFilter = useSelector(selectFilterCars);
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      <Section>
        <Filter />
      </Section>
      <Section>
        {isLoading && <Loader />}
        {favoriteCarsList.length === 0 ? (
          <FavoriteChoose />
        ) : (
          <FavoriteList>
            {valueStateFilter.length === 0
              ? favoriteCarsList.map(car => {
                  return <Car key={car.id} oneCar={car} />;
                })
              : valueStateFilter.map(car => {
                  return <Car key={car.id} oneCar={car} />;
                })}
          </FavoriteList>
        )}
      </Section>
      {isOpenModal && <Modal />}
    </div>
  );
};

export default Favorites;
