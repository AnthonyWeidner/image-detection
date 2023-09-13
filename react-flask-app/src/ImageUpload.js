// ImageUpload.js

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
