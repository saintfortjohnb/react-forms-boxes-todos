import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

// Smoke Test
it('NewTodoForm renders without crashing', () => {
  const mockAddTodo = jest.fn();
  render(<NewTodoForm addTodo={mockAddTodo} />);
});

// Snapshot Test
it('NewTodoForm matches snapshot', () => {
  const mockAddTodo = jest.fn();
  const { asFragment } = render(<NewTodoForm addTodo={mockAddTodo} />);
  expect(asFragment()).toMatchSnapshot();
});
