import React, { useState, useEffect } from 'react';
import ThreeScene from './components/ThreeScene';
import BoxForm from './components/BoxForm';
import './App.css';

const App = () => {
    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/boxes')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => setBoxes(data))
            .catch(error => console.error('Fetch error:', error));
    }, []); // Empty dependency array ensures it runs once on mount

    const addBox = (newBox) => {
        fetch('http://localhost:5000/api/boxes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBox),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(box => {
                const position = calculatePosition(boxes, box.dimensions);
                setBoxes([...boxes, { ...box, position }]);
            })
            .catch(error => console.error('Add box error:', error));
    };

    const deleteBox = (index) => {
        if (index >= 0 && index < boxes.length) {
            const boxId = boxes[index].id;
            fetch(`http://localhost:5000/api/boxes/${boxId}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.statusText}`);
                    }
                    setBoxes(boxes.filter((_, i) => i !== index));
                })
                .catch(error => console.error('Delete box error:', error));
        }
    };

    const calculatePosition = (existingBoxes, newDimensions) => {
        const xOffset = existingBoxes.reduce((acc, box) => acc + box.dimensions[0] + 0.5, 0);
        return [xOffset + newDimensions[0] / 2, newDimensions[1] / 2, 0];
    };

    return (
        <div className="app-container">
            <div className="scene-container">
                <ThreeScene boxes={boxes} onDeleteBox={deleteBox} />
            </div>
            <div className="form-container">
                <BoxForm onAddBox={addBox} onDeleteBox={deleteBox} />
            </div>
        </div>
    );
};

export default App;
