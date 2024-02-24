import { useDispatch, useSelector } from 'react-redux';
import makes from '../../makes.json';
import { selectCars, selectFilter } from '../../redux/cars/carsSelectors';
import { setFilterTerm, setFilterTermCars } from '../../redux/cars/carsSlice';
import { StyledFilter } from './Filter.styled';

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
    <StyledFilter>
      <div className="boxSearchFilter">
        <label className="brandSearch" htmlFor="cars">
          Car brand
        </label>

        <select
          className="variantSearch"
          id="dropdown"
          value={firstStateFilter}
          onChange={handleSelectChange}
        >
          <option className="makeSearch">{makes[0]}</option>
          {makes.map((make, i) => (
            <option key={i} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>
      <button className="searchBtn" onClick={handleSearchCar} type="button">
        Search
      </button>
    </StyledFilter>
  );
};
