import axios from 'axios'; 
import {useState, useEffect} from 'react'; 

function GalleryList (galleryData) {
    // const[list, setGalleryList] = useState([]); 




    // SAVE FOR LATER IF NEEDED 
    // useEffect(() => {
    //     fetchAdditem ();
    // }, []);

    return(
        <>
        <div>
        <h1>Gallery List</h1>
        {galleryData.map(item => (
            <galleryItem 
            key={item.id}
            item={item}
            />
        ))}
        </div>
        
        </>
    )
}

export default GalleryList