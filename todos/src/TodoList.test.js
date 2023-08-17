import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

// Smoke Test
it('TodoList renders without crashing', () => {
  render(<TodoList />);
});

// Snapshot Test
it('TodoList matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it('adds a new todo', () => {
  const { getByRole, getByText } = render(<TodoList />);

  const input = getByRole('textbox');
  const button = getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);
  
  expect(getByText('New Task')).toBeInTheDocument();
});

// Logic Test for Deleting Todo
it('deletes a todo', () => {
  const { getByRole, getByText } = render(<TodoList />);
  
  const input = getByRole('textbox');
  const addButton = getByText('Add Todo');
  
  fireEvent.change(input, { target: { value: 'Task to delete' } });
  fireEvent.click(addButton);

  const deleteButton = getByText('X');
  fireEvent.click(deleteButton);
  
  expect(() => getByText('Task to delete')).toThrow();
});
