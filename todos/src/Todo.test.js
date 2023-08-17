import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

// Smoke Test
it('Todo renders without crashing', () => {
  const mockRemoveTodo = jest.fn();
  render(<Todo id="123" task="Test task" removeTodo={mockRemoveTodo} />);
});

// Snapshot Test
it('Todo matches snapshot', () => {
  const mockRemoveTodo = jest.fn();
  const { asFragment } = render(<Todo id="123" task="Test task" removeTodo={mockRemoveTodo} />);
  expect(asFragment()).toMatchSnapshot();
});
