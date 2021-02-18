import { useEffect } from 'react';
import { useTodo } from '../context/useTodo';

const buttons = [
  { name: 'All', value: 'all' },
  { name: 'Active', value: 'active' },
  { name: 'Completed', value: 'completed' },
];

const Filters = () => {
  const { filterTodos, setStatus } = useTodo();

  // const handleFilter = (value) => {
  //   filterTodos(value);
  // };

  return (
    <ul data-testid="filters" className="filters">
      {buttons.map(({ name, value }) => (
        <li key={name}>
          <button value={value} onClick={() => setStatus(value)}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Filters;
