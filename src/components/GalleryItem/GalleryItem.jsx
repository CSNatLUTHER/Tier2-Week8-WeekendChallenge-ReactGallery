import React, { useState } from 'react';
import axios from 'axios';

function GalleryItem(props) {
  const[show, setShow]= useState( true );

  const toggleShow = () =>{
        setShow(!show);
  }

  const deleteConfirm = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your image has been deleted!", {
          icon: "success",
        });
        deleteImage();
      } else {
        swal("Your image is safe!");
      }
    });
  }

  const deleteImage = () => {
    axios.delete( '/gallery?id='+ props.image.id ).then( (response)=>{
      props.get()
     }).catch((err)=>{
       alert('PUT Failed');
       console.log(err);
     })
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
      <div className="galleryItemDiv">
        {
            show?
              <div className="imagewrap"><img onClick={ toggleShow } src={props.image.path} alt={props.image.description} className="imageProperties"/><input type="button" className="button1" value="X" onClick={deleteConfirm}/></div>:
              <h4 onClick={ toggleShow } className="altTextBox">{props.image.description}</h4>
        }
        <input type="button" value="Like This Photo" onClick={ increaseLike } className="likeButton" />
        <h6>Number of Likes: {props.image.likes}</h6>
      </div>
    );
}

export default GalleryItem;