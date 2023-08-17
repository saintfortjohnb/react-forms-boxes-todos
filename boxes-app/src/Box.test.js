// src/__tests__/Box.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

it('renders without crashing', function() {
    render(<Box />);
});

it('matches snapshot', function() {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});
