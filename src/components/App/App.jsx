import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import {useState, useEffect} from 'react'

function App() {
  const [galleryData, setGalleryList] = useState([])

  const galleryList = () => {
    axios.get('/gallery').then((response) => {
        setGalleryList(response.data)
    }).catch((error) => {
        console.log(`Error in GET ${error}`);
        alert('Something went wrong in GET');
    });
}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <GalleryList
        galleryData = {galleryData}
        />
      </div>
    );
}

export default App;
