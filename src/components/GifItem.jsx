import React from 'react'

const GifItem = ({ url, title, id }) => {

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GifItem