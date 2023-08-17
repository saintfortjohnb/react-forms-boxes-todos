// src/NewBoxForm.js
import React, { useState } from 'react';
import { v4 } from 'uuid';
import './NewBoxForm.css';


function NewBoxForm({ addBox }) {
    const [formData, setFormData] = useState({ width: "", height: "", backgroundColor: "" });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({ ...formData, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        addBox({ ...formData, id: v4() });
        setFormData({ width: "", height: "", backgroundColor: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="width" value={formData.width} onChange={handleChange} placeholder="Width"/>
            <input name="height" value={formData.height} onChange={handleChange} placeholder="Height"/>
            <input name="backgroundColor" value={formData.backgroundColor} onChange={handleChange} placeholder="Background Color"/>
            <button>Add Box</button>
        </form>
    );
}

export default NewBoxForm;
