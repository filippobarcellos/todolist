import { useDispatch } from 'react-redux';
import { setFilter } from './filtersSlice';

const buttons = [
  { name: 'All', value: 'all' },
  { name: 'Active', value: 'active' },
  { name: 'Completed', value: 'completed' },
];

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <ul data-testid="filters" className="filters">
      {buttons.map(({ name, value }) => (
        <li key={name}>
          <button value={value} onClick={() => dispatch(setFilter(value))}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Filters;
