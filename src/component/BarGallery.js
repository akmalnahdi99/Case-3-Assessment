import React from "react";
import ImageGallery from 'react-image-gallery';

export default function BarGallery() {
    const images = [
        {
          original: 'https://image.shutterstock.com/image-photo/five-cocktails-on-bar-counter-600w-167718563.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/five-cocktails-on-bar-counter-600w-167718563.jpg',
        },
        {
          original: 'https://image.shutterstock.com/image-photo/this-interior-modern-european-pub-600w-421062862.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/this-interior-modern-european-pub-600w-421062862.jpg',
        },
        {
          original: 'https://image.shutterstock.com/image-photo/london-april-26-interior-pub-600w-1078242479.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/london-april-26-interior-pub-600w-1078242479.jpg',
        },
      ];
    return (
        <div className='ibox mt-3 mb-0'>
            <div className='ibox-content'>
                <h2 className='m-3'><strong>Bar</strong></h2>
            <ImageGallery items={images} />
            </div>
        </div>
    )
}