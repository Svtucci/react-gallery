import axios from 'axios'; 
import {useState, useEffect} from 'react'; 
import Button from '@mui/material/Button';
//big mui cards imports 
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



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
            <Typography onClick={() => setDescription(!toggleDescription)} variant="body2" color="text.secondary">
                {'\"'+item.description+'\"'}
            </Typography>
        )
    } else {
        return (
            <CardMedia
                component="img"
                height="375"
                width="500"
                image={item.path}
                onClick={() => setDescription(!toggleDescription)}
            />
        )
    }
}
// Used a concatonating string to add "" around descriptions ^^^

    return(
    <div style={{ display:'flex', justifyContent: 'center', margin: '10px'}}>
    <Card sx={{height: 500}}>
        <CardActionArea>
            {getDescription()}
        </CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {likeCount} likes
            </Typography>
            <Button variant="outlined" onClick={addLike}>Like</Button>
            <Button variant="outlined" onClick={() => setDescription(!toggleDescription)}>
                {toggleDescription ? 'Image' : 'Description'}
            </Button>
        </CardContent>
    </Card>
    </div>
    )
}


export default GalleryItem


// ORIGINAL CODE BEFORE MUI
// import axios from 'axios'; 
// import {useState, useEffect} from 'react'; 
// import Button from '@mui/material/Button';


// function GalleryItem ({item}) {
//     const [likeCount, setLikeCount] = useState(item.likes)
//     const [toggleDescription, setDescription] = useState(false); 

//     const addLike = () => {
//         axios.put(`/gallery/like/${item.id}`).then((response) => {
//             setLikeCount(likeCount + 1);
//     }).catch((error) => {
//         console.log(`Error in POST ${error}`);
//         alert('Something went wrong in POSt');
//     });
// };

// const getDescription = () => {
//     if (toggleDescription === true) {
//         return (
//             <p onClick={() => setDescription(!toggleDescription)}>{'\"'+item.description+'\"'}</p>
//         )
//     } else {
//         return (
//             <img onClick={() => setDescription(!toggleDescription)} src={item.path} />
//         )
//     }
// }
// // Used a concatonating string to add "" around descriptions ^^^

//     return(
//         <>
//         <p>
//         {
//             getDescription()
//         }
//         </p>
//         <p>{likeCount} likes</p>
//         <p>
//         <Button variant = "outlined" onClick= {addLike}>Like</Button>
//         <br />
//         <br />
//         <Button variant= "outlined" onClick={() => setDescription(!toggleDescription)}>
//             {toggleDescription ? 'Image' : 'Description'}
//         </Button>
//         </p>
//         </>
//     )
// }
