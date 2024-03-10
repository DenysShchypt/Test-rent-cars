import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ChevronDownSVG from '../../assets/icons/chevron-down.svg';
import { selectFilter, viewIconSelect } from '../../redux/cars/carsSelectors';
import makes from '../../makes.json';
import { StyledFilter } from './FilterMake.styled';
import { changeViewIconSelect } from '../../redux/cars/carsSlice';

export const FilterMake = ({ handleSelect }) => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const isActive = useSelector(viewIconSelect);
  console.log(isActive);
  const queryMake = searchParams.get('make');
  const firstStateFilter = useSelector(selectFilter);

  const toggleActive = () => {
    dispatch(changeViewIconSelect(!isActive));
  };
  return (
    <StyledFilter>
      <span className="brandSearch">Car brand</span>
      <select
        className={`variantSearch ${isActive ? 'active' : ''}`}
        name="make"
        value={firstStateFilter}
        onChange={handleSelect}
        onFocus={toggleActive}
        onBlur={toggleActive}
        style={{
          backgroundImage: `url(${ChevronDownSVG})`, // Встановлення SVG як фонового зображення
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 18px center',
          backgroundSize: '20px 20px',
          transform: isActive ? 'rotate(180deg)' : 'none',
        }}
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
