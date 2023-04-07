import axios from 'axios'; 
import {useState, useEffect} from 'react'; 


function GalleryItem ({item}) {

    return(
        <>
        <img src = {item.path} />
        </>
    )
}


export default GalleryItem