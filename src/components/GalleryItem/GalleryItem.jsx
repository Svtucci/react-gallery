import axios from 'axios'; 
import {useState, useEffect} from 'react'; 
import Button from '@mui/material/Button';


function GalleryItem ({item}) {
    const [likeCount, setLikeCount] = useState(item.likes)
    const [toggleDescription, setDescription] = useState(false); 

    const addLike = () => {
        axios.put(`/gallery/like/${item.id}`).then((response) => {
            setLikeCount(likeCount + 1);
    }).catch((error) => {
        console.log(`Error in POST ${error}`);
        alert('Something went wrong in POSt');
    });
};

const getDescription = () => {
    if (toggleDescription === true) {
        return (
            <p onClick={() => setDescription(!toggleDescription)}>{'\"'+item.description+'\"'}</p>
        )
    } else {
        return (
            <img onClick={() => setDescription(!toggleDescription)} src={item.path} />
        )
    }
}
// Used a concatonating string to add "" around descriptions ^^^

    return(
        <>
        <p>
        {
            getDescription()
        }
        </p>
        <p>{likeCount} likes</p>
        <p>
        <Button variant = "outlined" onClick= {addLike}>Like</Button>
        <br />
        <br />
        <Button variant= "outlined" onClick={() => setDescription(!toggleDescription)}>
            {toggleDescription ? 'Image' : 'Description'}
        </Button>
        </p>
        </>
    )
}


export default GalleryItem