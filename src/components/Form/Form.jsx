import React, { useState } from 'react';
import axios from 'axios';


function Form(props) {

  const galleryUpdates = [
    {
      path: "images/pic_seven.jpeg",
      description: 'Pal got a gig working at the Airport #TherapyDog',
    },
    {
      path: "images/pic_eight.jpeg",
      description: 'Rainy days are great for curling up.',
    },
    {
      path: "images/pic_nine.jpeg",
      description: 'Fall is our favorite season. Afton Orchard is beautiful',
    },
    {
      path: "images/pic_ten.jpeg",
      description: 'Bringing a few Irish tunes to the neighborhood',
    }
  ]
  
  const [picSelect, setPicSelect ] = useState({
    path: '',
    description: '',
    likes: 0
  })

  const imageSelect = ( event ) =>{
    setPicSelect(
        {...picSelect, path: galleryUpdates[event.target.value].path, description: galleryUpdates[event.target.value].description }
    )
  }

  const addPicture = () => {
    axios({
      method: 'POST',
      url: '/gallery',
      data: picSelect
    }).then( (response)=>{
      props.get()
    }).catch((err)=>{
       alert('PUT Failed');
       console.log(err);
    })
  }

    return (
      <div id="formDiv">
        <div>
          <label><u>Add a Picture</u>:</label>
              <select id="picsSelect" onChange={ (event)=> imageSelect ( event ) }>
                <option selected disabled>Select an Image </option>
                <option value={0}>Working at the Airport</option>
                <option value={1}>Pal's Leather Couch</option>
                <option value={2}>A Day at the Orchard</option>
                <option value={3}>Whistle Away!</option>
              </select>
          <button onClick={addPicture} className="addPictureButton">Add Picture</button>
        </div>
      </div>
    );
}

export default Form;