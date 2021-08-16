import  {useState, useEffect} from 'react';
import axios from 'axios';

//API KEY
const api_key = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;

const useGif = (tag) => {
    const [gif, setGif] = useState('');

    const fetchGif = async (tag) => {
        // Tag GIF V1
        
        const {data} = await axios.get(tag ? `${url}&tag=${tag}`: url);  //promise

        const imageSrc = data.data.images.downsized_large.url;

        setGif(imageSrc);
    }

    //componentDidMount - first render
    useEffect(() => {
        fetchGif(tag);
    }, [tag]);

    

    return {gif, fetchGif};
    
}

export default useGif
