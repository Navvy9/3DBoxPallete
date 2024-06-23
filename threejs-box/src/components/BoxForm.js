// src/components/BoxForm.js
import React, { useState } from 'react';
import './BoxForm.css';

const BoxForm = ({ onAddBox, onDeleteBox }) => {
  const [box, setBox] = useState({ length: 1, width: 1, height: 1, color: '#ff0000' });
  const [deleteId, setDeleteId] = useState('');

  const handleChange = (e) => {
    setBox({ ...box, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBox({
      id: Date.now(),
      dimensions: [parseFloat(box.length), parseFloat(box.height), parseFloat(box.width)],
      color: box.color,
    });
    setBox({ length: 1, width: 1, height: 1, color: '#ff0000' });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    onDeleteBox(parseInt(deleteId, 10) - 1); // Decrease by 1 to convert to zero-based index
    setDeleteId('');
  };

  return (
    <div className="box-form">
      <form onSubmit={handleSubmit}>
        <h3>Add Box</h3>
        <label>
          Length:
          <input type="number" name="length" value={box.length} onChange={handleChange} />
        </label>
        <label>
          Width:
          <input type="number" name="width" value={box.width} onChange={handleChange} />
        </label>
        <label>
          Height:
          <input type="number" name="height" value={box.height} onChange={handleChange} />
        </label>
        <label>
          Color:
          <input type="color" name="color" value={box.color} onChange={handleChange} />
        </label>
        <button type="submit">Add Box</button>
      </form>
      <form onSubmit={handleDelete}>
        <h3>Delete Box</h3>
        <label>
          Box Number:
          <input
            type="number"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
          />
        </label>
        <button type="submit">Delete Box</button>
      </form>
    </div>
  );
};

export default BoxForm;
