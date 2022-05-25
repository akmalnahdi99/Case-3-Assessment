import React from "react";
import ImageGallery from 'react-image-gallery';

export default function GymGallery() {
    const images = [
        {
          original: 'https://ca-times.brightspotcdn.com/dims4/default/a31969a/2147483647/strip/true/crop/4873x3367+0+0/resize/840x580!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2Fc3%2F513dd6cc466ba548afefb1ea43d7%2F491555-fi-century-plaza-towers-full-jja-0006.JPG',
          thumbnail: 'https://ca-times.brightspotcdn.com/dims4/default/a31969a/2147483647/strip/true/crop/4873x3367+0+0/resize/840x580!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2Fc3%2F513dd6cc466ba548afefb1ea43d7%2F491555-fi-century-plaza-towers-full-jja-0006.JPG',
        },
        {
          original: 'https://image.shutterstock.com/image-photo/modern-light-gym-sports-equipment-600w-721723381.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/modern-light-gym-sports-equipment-600w-721723381.jpg',
        },
        {
          original: 'https://image.shutterstock.com/image-photo/modern-light-gym-sports-equipment-600w-1865807080.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/modern-light-gym-sports-equipment-600w-1865807080.jpg',
        },
      ];
    return (
        <div className='ibox mt-3 mb-0'>
            <div className='ibox-content'>
                <h2 className='m-3'><strong>Gym</strong></h2>
            <ImageGallery items={images} />
            </div>
        </div>
    )
}