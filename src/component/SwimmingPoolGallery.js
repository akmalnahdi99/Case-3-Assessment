import React from "react";
import ImageGallery from 'react-image-gallery';

export default function SwimmingPoolGallery() {
    const images = [
        {
          original: 'https://image.shutterstock.com/image-photo/swimming-pool-stair-wooden-deck-600w-607921568.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/swimming-pool-stair-wooden-deck-600w-607921568.jpg',
        },
        {
          original: 'https://image.shutterstock.com/image-photo/edge-luxury-swimming-pool-white-600w-697306684.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/edge-luxury-swimming-pool-white-600w-697306684.jpg',
        },
        {
          original: 'https://image.shutterstock.com/image-photo/isla-mujeres-hotelmexico-600w-585528.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/isla-mujeres-hotelmexico-600w-585528.jpg',
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