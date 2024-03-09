import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';

// import { selectFilter } from '../../redux/cars/carsSelectors';
import { setFilterTerm } from '../../redux/cars/carsSlice';
import { StyledFilter } from './Filter.styled';
import { FilterMake } from 'components/FilterMake/FilterMake';

export const Filter = ({ handleSearchCar }) => {
  const dispatch = useDispatch();
  // const [searchParams] = useSearchParams();
  // const queryMake = searchParams.get('make');
  // const firstStateFilter = useSelector(selectFilter);
  const handleSelect = e => {
    const eventName = e.target.name;
    switch (eventName) {
      case 'make':
        dispatch(setFilterTerm(e.target.value));
        break;

      default:
        break;
    }
  };

  return (
    <StyledFilter onSubmit={handleSearchCar}>
      <FilterMake handleSelect={handleSelect} />
      <label>
        <select name="rentPrice" id="rent"></select>
      </label>
      <button className="searchBtn" type="submit">
        Search
      </button>
    </StyledFilter>
  );
};
