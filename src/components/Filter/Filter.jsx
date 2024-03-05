import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import makes from '../../makes.json';
import { selectFilter } from '../../redux/cars/carsSelectors';
import { setFilterTerm } from '../../redux/cars/carsSlice';
import { StyledFilter } from './Filter.styled';

export const Filter = ({ handleSearchCar }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const queryMake = searchParams.get('make');
  console.log(queryMake);
  const firstStateFilter = useSelector(selectFilter);
  console.log(firstStateFilter);
  const handleSelectChange = e => {
    dispatch(setFilterTerm(e.target.value));
  };

  return (
    <StyledFilter onSubmit={handleSearchCar}>
      <label className="boxSearchFilter">
        <span className="brandSearch">Car brand</span>
        <select
          className="variantSearch"
          id="dropdown"
          name="make"
          value={firstStateFilter}
          onChange={handleSelectChange}
        >
          {queryMake !== null ? (
            <option className="makeSearch">{queryMake}</option>
          ) : (
            <option className="makeSearch">{firstStateFilter}</option>
          )}
          {makes.map((make, i) => (
            <option key={i} value={make}>
              {make}
            </option>
          ))}
        </select>
      </label>
      <label>
        <select name="rentPrice" id="rent"></select>
      </label>
      <button className="searchBtn" type="submit">
        Search
      </button>
    </StyledFilter>
  );
};
