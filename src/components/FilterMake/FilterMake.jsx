import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as IconChevron } from '../../assets/icons/chevron-down.svg';
import { ReactComponent as IconHeart } from '../../assets/icons/heart.svg';
import { selectFilter } from '../../redux/cars/carsSelectors';
import makes from '../../makes.json';
import { StyledFilter } from './FilterMake.styled';

export const FilterMake = ({ handleSelect }) => {
  const [searchParams] = useSearchParams();
  const queryMake = searchParams.get('make');
  const firstStateFilter = useSelector(selectFilter);
  return (
    <StyledFilter className="boxSearchFilter">
      <span className="brandSearch">Car brand</span>
      <select
        className="variantSearch"
        name="make"
        value={firstStateFilter}
        onChange={handleSelect}
        arrow={<IconChevron />}
      >
        {queryMake !== null && queryMake !== 'All Cars' ? (
          <option hidden>{queryMake}</option>
        ) : (
          <option hidden>{firstStateFilter}</option>
        )}
        {makes.map((make, i) => (
          <option key={i} value={make}>
            {make}
          </option>
        ))}
      </select>
    </StyledFilter>
  );
};
