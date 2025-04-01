import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs.js'
import GifItem from "./GifItem.jsx";
import useFetchGifs from "../hooks/useFetchGifs.js";

const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <p>Cargando...</p>
            }
            <div className="card-grid">
                {
                    images.map(image => (
                        <GifItem {...image} />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid