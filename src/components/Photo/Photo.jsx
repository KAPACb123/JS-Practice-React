import React from 'react';
import './Photo.css'

const Photo = ({ photo }) => {
    const {url, title} = photo;
    return (
        <div className="photo-item">
            <img srcSet={url} alt={title} />
            <div className="photo-title">{title}</div>
        </div>
    );
};

export default Photo;