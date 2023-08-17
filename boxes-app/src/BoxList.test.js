// src/__tests__/BoxList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it("renders without crashing", function() {
    render(<BoxList />);
});

it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new box via the form", function() {
    const { getByPlaceholderText, getByText } = render(<BoxList />);

    // Get form inputs
    const widthInput = getByPlaceholderText("Width");
    const heightInput = getByPlaceholderText("Height");
    const bgColorInput = getByPlaceholderText("Background Color");
    
    // Fire events to simulate user filling out form
    fireEvent.change(widthInput, { target: { value: '100' } });
    fireEvent.change(heightInput, { target: { value: '100' } });
    fireEvent.change(bgColorInput, { target: { value: 'red' } });
    
    const addButton = getByText("Add Box");
    fireEvent.click(addButton);

    // Check that a new box has been added
    expect(getByText('X')).toBeInTheDocument();
});

it("new box appears in the DOM with the correct size and color", function() {
    const { getByPlaceholderText, getByText, container } = render(<BoxList />);

    const widthInput = getByPlaceholderText("Width");
    const heightInput = getByPlaceholderText("Height");
    const bgColorInput = getByPlaceholderText("Background Color");

    fireEvent.change(widthInput, { target: { value: '100' } });
    fireEvent.change(heightInput, { target: { value: '100' } });
    fireEvent.change(bgColorInput, { target: { value: 'red' } });

    const addButton = getByText("Add Box");
    fireEvent.click(addButton);

    const addedBox = container.querySelector("div[style='width: 100px; height: 100px; background-color: red;']");
    expect(addedBox).toBeInTheDocument();
});

it("can remove a box", function() {
    const { getByPlaceholderText, getByText, queryByText, container } = render(<BoxList />);

    const widthInput = getByPlaceholderText("Width");
    const heightInput = getByPlaceholderText("Height");
    const bgColorInput = getByPlaceholderText("Background Color");

    fireEvent.change(widthInput, { target: { value: '100' } });
    fireEvent.change(heightInput, { target: { value: '100' } });
    fireEvent.change(bgColorInput, { target: { value: 'red' } });

    const addButton = getByText("Add Box");
    fireEvent.click(addButton);

    // Now, we have added the box. Let's remove it.
    const removeButton = getByText('X');
    fireEvent.click(removeButton);

    // Ensure the box and the 'X' button are no longer in the document
    const removedBox = container.querySelector("div[style='width: 100px; height: 100px; background-color: red;']");
    expect(removedBox).not.toBeInTheDocument();
    expect(queryByText('X')).not.toBeInTheDocument();
});
