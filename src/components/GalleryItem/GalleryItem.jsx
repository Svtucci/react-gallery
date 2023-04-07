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
            <p onClick={() => setDescription(!toggleDescription)}>{'\"'+item.description+'\"'}</p>
        )
    } else {
        return (
            <img onClick={() => setDescription(!toggleDescription)} src={item.path} />
        )
    }
}
// Used a concatonatin string to add "" around descriptions ^^^

    return(
        <>
        <p>
        {
            getDescription()
        }
        </p>
        <p>{likeCount} likes</p>
        <p>
        <button onClick= {addLike}>Like</button>

        <button onClick={() => setDescription(!toggleDescription)}>
            {toggleDescription ? 'Image' : 'Description'}
        </button>
        </p>
        </>
    )
}


export default GalleryItem