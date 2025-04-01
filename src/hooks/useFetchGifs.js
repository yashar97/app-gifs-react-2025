import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs.js";

const useFetchGifs = (category) => {

    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setimages(newImages);
        // setisLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading: false
    }
}

export default useFetchGifs