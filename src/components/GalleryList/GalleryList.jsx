import axios from 'axios'; 
import {useState, useEffect} from 'react'; 

function GalleryList () {
    const[list, setGalleryList] = useState([]); 


    const galleryList = () => {
        axios.get('/gallery').then((response) => {
            setGalleryList(response.data)
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong in GET');
        });
    }


    // SAVE FOR LATER IF NEEDED 
    // useEffect(() => {
    //     fetchAdditem ();
    // }, []);

    return(
        <>
        <h1>Gallery List</h1>
        </>
    )
}

export default GalleryList