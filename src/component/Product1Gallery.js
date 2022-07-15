import React from "react";
import ImageGallery from 'react-image-gallery';

export default function GymGallery() {
    const images = [
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/082ergskk93p3-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/082ergskk93p3-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/uo4k9pzxv25y-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/uo4k9pzxv25y-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/zaklphro8diw2-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/zaklphro8diw2-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/754qpf7z1zno1-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/754qpf7z1zno1-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/9iwdmgmcxc1r3-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/9iwdmgmcxc1r3-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/tzfcceq47g23-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/tzfcceq47g23-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/5zisglb6074a1-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/5zisglb6074a1-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/3aiyqhoozsu9-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/3aiyqhoozsu9-ID/image;s=1080x1080',
        },
      ];
    return (
        <div className='ibox mt-3 mb-0'>
            <div className='ibox-content'>
                <h1 className='m-3'><strong>Suzuki XL7 2020</strong></h1>
            <ImageGallery items={images} />
            </div>
        </div>
    )
}