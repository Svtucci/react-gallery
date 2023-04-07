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
        <>
        <div>
        <h1>Gallery List</h1>
        </div>

        

        {galleryData.map((item) => (
            <div key={item.id}>

            <GalleryItem 
            item={item}
            />
            </div>
        ))}
        
        
        </>
    )
}

export default GalleryList