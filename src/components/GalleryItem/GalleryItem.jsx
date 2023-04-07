import axios from 'axios'; 
import {useState, useEffect} from 'react'; 


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
            <p>{item.description}</p>
        )
    } else {
        return (
            <img src={item.path} />
        )
    }
}


    return(
        <>
        <img src = {item.path} />
        <p>{likeCount} likes</p>
        <button onClick= {addLike}>Like</button>

        <button onClick={() => setDescription(!toggleDescription)}>
            {toggleDescription ? 'Image' : 'Description'}
        </button>
        {
            getDescription()
        }
        </>
    )
}


export default GalleryItem