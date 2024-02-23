import { useDispatch, useSelector } from 'react-redux';
import makes from '../../makes.json';
import { selectCars, selectFilter } from '../../redux/cars/selectors';
import { setFilterTerm, setFilterTermCars } from '../../redux/cars/carsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const carsList = useSelector(selectCars);
  const firstStateFilter = useSelector(selectFilter);

  const handleSelectChange = e => {
    dispatch(setFilterTerm(e.target.value));
  };
  const handleSearchCar = () => {
    const filterCarsList = carsList.filter(
      cars => cars.make === firstStateFilter
    );
    dispatch(setFilterTermCars(filterCarsList));
  };
  return (
    <div>
      <select
        id="dropdown"
        value={firstStateFilter}
        onChange={handleSelectChange}
      >
        <option value=""></option>
        {makes.map((make, i) => (
          <option key={i} value={make}>
            {make}
          </option>
        ))}
      </select>
      <button onClick={handleSearchCar} type="button">
        Search
      </button>
    </div>
  );
};
