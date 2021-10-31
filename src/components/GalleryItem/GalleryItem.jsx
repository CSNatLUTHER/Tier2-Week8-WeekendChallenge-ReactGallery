import React, { useState } from 'react';
import axios from 'axios';

function GalleryItem(props) {
  const[show, setShow]= useState( true );

  const toggleShow = () =>{
        setShow(!show);
  }

  const increaseLike = () => {
    axios.put( '/gallery/like?id='+ props.image.id + "&likes="+(props.image.likes+1)).then( (response)=>{
     props.get()
    }).catch((err)=>{
      alert('PUT Failed');
      console.log(err);
    })
  }
  
    return (
      <div>
        {
            show?
              <img onClick={ toggleShow } src={props.image.path} alt={props.image.description} className="imageProperties"/>:
              <h4 onClick={ toggleShow } className="altTextBox">{props.image.description}</h4>
        }
        <input type="button" value="Like This Photo" onClick={ increaseLike } className="likeButton" />
        <h6>Number of Likes: {props.image.likes}</h6>
      </div>
    );
}

export default GalleryItem;