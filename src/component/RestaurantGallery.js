import React from "react";
import ImageGallery from 'react-image-gallery';

export default function RestaurantGallery() {
    const images = [
        {
          original: 'https://image.shutterstock.com/image-photo/interior-cozy-restaurant-contemporary-design-600w-709645828.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/interior-cozy-restaurant-contemporary-design-600w-709645828.jpg',
        },
        {
          original: 'https://image.shutterstock.com/image-photo/friends-dinner-party-600w-764054833.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/friends-dinner-party-600w-764054833.jpg',
        },
        {
          original: 'https://image.shutterstock.com/image-photo/chef-restaurant-arrangin-decorating-food-600w-601993277.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/chef-restaurant-arrangin-decorating-food-600w-601993277.jpg',
        },
      ];
    return (
        <div className='ibox mt-3 mb-0'>
            <div className='ibox-content'>
                <h2 className='m-3'><strong>Swimming Pool</strong></h2>
            <ImageGallery items={images} />
            </div>
        </div>
    )
}