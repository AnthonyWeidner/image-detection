// CIFAR10Upload.js

import React, { useState } from 'react';

function CIFAR10Upload() {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    // You can also append a model identifier if your backend supports choosing between models
    // formData.append('model', 'cifar10');

    // Update this URL to your backend endpoint for CIFAR-10
    fetch("https://machine-learning-app-617e3f1aeaad.herokuapp.com/cifar10", {
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
      <h2>CIFAR-10 Image Upload</h2>
      <form onSubmit={onFormSubmit}>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button type="submit">Upload and Predict using CIFAR-10</button>
      </form>
      {prediction && <p>Predicted Label: {prediction}</p>}
    </div>
  );
}

export default CIFAR10Upload;
