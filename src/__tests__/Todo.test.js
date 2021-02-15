import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import AddTodo from '../features/todos/AddTodo';

describe('Tests for addTodo component', () => {
  const initialState = [];
  const mockStore = configureStore();

  it('should display the initial components', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={mockStore(initialState)}>
        <AddTodo />
      </Provider>
    );

    expect(
      getByPlaceholderText('What needs to be done today?')
    ).toBeInTheDocument();
    expect(getByText('Add')).toBeInTheDocument();
  });
});
