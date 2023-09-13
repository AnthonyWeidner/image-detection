// ImageUpload.js

/**
import React, { useState } from 'react';

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);


    fetch("https://machine-learning-app-617e3f1aeaad.herokuapp.com/", {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(result => {
      setPrediction(result);
    })
    .catch(error => console.log('Error:', error));
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button type="submit">Upload and Predict</button>
      </form>
      {prediction && <p>Predicted Label: {prediction}</p>}
    </div>
  );
}

export default ImageUpload;
*/

import React, { useState } from 'react';

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [model, setModel] = useState('model1');  // Default model

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', file);
    formData.append('model', model);  // Append the model identifier to the form data

    fetch("https://machine-learning-app-617e3f1aeaad.herokuapp.com/", {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(result => {
      setPrediction(result);
    })
    .catch(error => console.log('Error:', error));
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        {/* Model Selection Dropdown */}
        <select value={model} onChange={(e) => setModel(e.target.value)}>
          <option value="model1">Model 1 (Standard CNN)</option>
          <option value="model2">Model 2 (Heavy layers)</option>
          {/* Add more models as needed */}
        </select>

        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button type="submit">Upload and Predict</button>
      </form>
      {prediction && <p>Predicted Label: {prediction}</p>}
    </div>
  );
}

export default ImageUpload;
