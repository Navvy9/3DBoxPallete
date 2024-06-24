// src/components/BoxList.js
import React from 'react';
import './BoxList.css';

const BoxList = ({ boxes, onDeleteBox }) => {
  return (
    <div className="box-list">
      <h3>Box List</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Dimensions</th>
            <th>Color</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {boxes.map((box) => (
            <tr key={box.id}>
              <td>{box.id}</td>
              <td>{box.dimensions.join(' x ')}</td>
              <td>
                <div style={{ backgroundColor: box.color, width: '20px', height: '20px' }}></div>
              </td>
              <td>
                <button onClick={() => onDeleteBox(box.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoxList;
