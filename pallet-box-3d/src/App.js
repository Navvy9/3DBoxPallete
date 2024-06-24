// src/App.js
import React, { useState, useEffect } from 'react';
import ThreeScene from './components/ThreeScene';
import BoxForm from './components/BoxForm';
import BoxList from './components/BoxList';
import './App.css';

const App = () => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5169/api/box')
      .then((response) => response.json())
      .then((data) => setBoxes(data));
  }, []);

  const addBox = (newBox) => {
    fetch('http://localhost:5169/api/box', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBox),
    })
      .then((response) => response.json())
      .then((box) => {
        const newPosition = calculatePosition(boxes, box.dimensions);
        setBoxes((prevBoxes) => [...prevBoxes, { ...box, position: newPosition }]);
      });
  };

  const deleteBox = (id) => {
    fetch(`http://localhost:5169/api/box/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== id));
    });
  };

  const calculatePosition = (existingBoxes, newDimensions) => {
    const offsetX = existingBoxes.reduce((acc, box) => acc + box.dimensions[0] + 0.5, 0);
    return [offsetX + newDimensions[0] / 2, newDimensions[1] / 2, 0];
  };

  return (
    <div className="app-container">
      <div className="scene-container">
        <ThreeScene boxes={boxes} />
      </div>
      <div className="form-container">
        <BoxForm onAddBox={addBox} />
      </div>
      <div className="data-container">
        <BoxList boxes={boxes} onDeleteBox={deleteBox} />
      </div>
    </div>
  );
};

export default App;
