import React from 'react';
import {photos} from '../../constans'
import Photo from "../Photo/Photo";

const PhotoContainer = () => {
    return (
        <div className="photo-list">
            {photos.map(photo => (
                <Photo key={photo.id} photo={photo} />
            ))}
        </div>
    );
};

export default PhotoContainer;