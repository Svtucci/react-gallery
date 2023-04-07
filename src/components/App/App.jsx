import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import {useState, useEffect} from 'react'
import axios from 'axios'; 

function App() {
  const [galleryData, setGalleryList] = useState([])

  const galleryList = () => {
    axios.get('/gallery').then((response) => {
        setGalleryList(response.data)
    }).catch((error) => {
        console.log(`Error in GET ${error}`);
        alert('Something went wrong in GET');
    }, []);
}

    useEffect(() => {
        galleryList ();
    }, []);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

        <GalleryList
        galleryData = {galleryData}
        />

      </div>
    );
}

export default App;
