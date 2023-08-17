// src/Box.js
import React from 'react';
import './Box.css';

function Box({ id, width, height, backgroundColor, removeBox }) {
    return (
        <div style={{ width: `${width}px`, height: `${height}px`, backgroundColor: backgroundColor }}>
            <button onClick={() => removeBox(id)}>X</button>
        </div>
    );
}

export default Box;
