import React from "react";
import ImageGallery from 'react-image-gallery';

export default function LoungeGallery() {
    const images = [
        {
          original: 'https://image.shutterstock.com/image-photo/luxury-lounge-bar-interior-600w-473085298.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/luxury-lounge-bar-interior-600w-473085298.jpg',
        },
        {
          original: 'https://image.shutterstock.com/image-photo/modern-lobby-600w-246119302.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/modern-lobby-600w-246119302.jpg',
        },
        {
          original: 'https://image.shutterstock.com/image-photo/abu-dhabi-summer-2016-modern-600w-634620089.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/abu-dhabi-summer-2016-modern-600w-634620089.jpg',
        },
      ];
    return (
        <div className='ibox mt-3 mb-0'>
            <div className='ibox-content'>
                <h2 className='m-3'><strong>Lounge</strong></h2>
            <ImageGallery items={images} />
            </div>
        </div>
    )
}