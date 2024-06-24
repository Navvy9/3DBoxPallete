// src/components/BoxForm.js
import React, { useState } from 'react';
import './BoxForm.css';

const BoxForm = ({ onAddBox }) => {
  const [id, setId] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [height, setHeight] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id && width && length && height && color) {
      const newBox = {
        id,
        dimensions: [parseFloat(width), parseFloat(height), parseFloat(length)],
        color,
      };
      onAddBox(newBox);
      setId('');
      setWidth('');
      setLength('');
      setHeight('');
      setColor('#ffffff');
      setError('');
    } else {
      setError('Please fill out all fields.');
    }
  };

  return (
    <form className="box-form" onSubmit={handleSubmit}>
      <h3>Add Box</h3>
      <label>ID:</label>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <label>Width:</label>
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        required
      />
      <label>Length:</label>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        required
      />
      <label>Height:</label>
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        required
      />
      <label>Color:</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        required
      />
      <button type="submit">Add Box</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default BoxForm;
