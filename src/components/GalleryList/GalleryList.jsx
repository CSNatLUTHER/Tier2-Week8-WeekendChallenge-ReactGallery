import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {  
  return (
      <div>
        <div id="galleryList">
            { props.images.map( image=>(<GalleryItem class="itemBox" image={image} get={props.get}/>))}
        </div>
      </div>
    );
}

export default GalleryList;