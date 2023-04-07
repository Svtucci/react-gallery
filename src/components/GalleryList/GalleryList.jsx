import axios from 'axios'; 
import {useState, useEffect} from 'react'; 
import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList ({galleryData}) {
    const[list, setGalleryList] = useState([]); 

   


    // SAVE FOR LATER IF NEEDED 
    // useEffect(() => {
    //     galleryList ();
    // }, []);

    return(
        
    <div>
        <h1>Gallery List</h1>
        <p>
        {galleryData.map((item) => (
            <GalleryItem 
                key={item.id} 
                item={item} 
            />
        ))}
        </p>
    </div>
    );
}

export default GalleryList