import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {  
  return (
      <div>
        <h2>GalleryList</h2>
        <div id="galleryList">
            { props.images.map( image=>(<div><GalleryItem class="itemBox" image={image} get={props.get}/></div>))}
        </div>
      </div>
    );
}

export default GalleryList;