import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../Form/Form'
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {
  const[images, setImages ] = useState( [] );

  useEffect( ()=>{
    getImages();
  }, []);

  const getImages=()=>{
    axios.get( '/gallery' ).then( (response)=>{
      setImages( response.data );
    }).catch((err)=>{
      alert('nope');
      console.log(err);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <Form get={getImages}/>
      <div></div><GalleryList images={images} get={getImages}/>
    </div>
  );
}

export default App;
