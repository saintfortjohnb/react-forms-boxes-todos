// src/BoxList.js
import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const addBox = box => {
        setBoxes(boxes => [...boxes, box]);
    };

    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map(box => (
                <Box key={box.id} {...box} removeBox={removeBox} />
            ))}
        </div>
    );
}

export default BoxList;
