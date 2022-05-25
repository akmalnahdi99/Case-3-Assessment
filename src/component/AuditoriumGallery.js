import React from "react";
import ImageGallery from 'react-image-gallery';

export default function AuditoriumGallery() {
    const images = [
        {
          original: 'https://image.shutterstock.com/image-photo/minsk-belarus-july-2017-rows-600w-1733592131.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/minsk-belarus-july-2017-rows-600w-1733592131.jpg',
        },
        {
          original: 'https://image.shutterstock.com/image-photo/minsk-belarus-july-2017-rows-600w-1707856600.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/minsk-belarus-july-2017-rows-600w-1707856600.jpg',
        },
        {
          original: 'https://image.shutterstock.com/image-photo/business-meeting-room-board-interiors-600w-640121368.jpg',
          thumbnail: 'https://image.shutterstock.com/image-photo/business-meeting-room-board-interiors-600w-640121368.jpg',
        },
      ];
    return (
        <div className='ibox mt-3 mb-0'>
            <div className='ibox-content'>
                <h2 className='m-3'><strong>Auditorium</strong></h2>
            <ImageGallery items={images} />
            </div>
        </div>
    )
}