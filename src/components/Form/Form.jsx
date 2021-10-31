import React, { useState } from 'react';
import axios from 'axios';



function Form(props) {

  const galleryUpdates = [
    {
      path: "images/pic_one.jpeg",
      description: 'My dog Pal... Looking for treats.',
    },
    {
      path: "images/pic_two.jpeg",
      description: 'My wife and I spent her birthday in Hawaii.',
    },
    {
      path: "images/pic_three.jpeg",
      description: 'My dog Pal and her favorite toy.',
    },
    {
      path: "images/pic_four.jpeg",
      description: 'They are best friends.',
    },
    {
      path: "images/pic_five.jpeg",
      description: 'Pal LOVES walks at the lake!',
    },
    {
      path: "images/pic_six.jpeg",
      description: 'A beautiful fall day, celebrating a friend.',
    },
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
          <label id="addPictureLabel">Add a Picture:</label>
              <select id="picsSelect" onChange={ (event)=> imageSelect ( event ) }>
                <option selected disabled>Select an Image </option>
                <option value={0}>Pal on the Bed</option>
                <option value={1}>Hawaii Bound</option>
                <option value={2}>Nothing Beats a Ball</option>
                <option value={3}>Love is in the Air</option>
                <option value={4}>Lakefront Adventures</option>
                <option value={5}>All Dressed Up</option>
                <option value={6}>Working at the Airport</option>
                <option value={7}>Pal's Leather Couch</option>
                <option value={8}>A Day at the Orchard</option>
                <option value={9}>Whistle Away!</option>
              </select>
          <button onClick={addPicture} className="addPictureButton">Add Picture</button>
        </div>
      </div>
    );
}

export default Form;