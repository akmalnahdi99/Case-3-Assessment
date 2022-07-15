import React from "react";
import ImageGallery from 'react-image-gallery';

export default function SwimmingPoolGallery() {
    const images = [
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/n9l5fddieyno1-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/n9l5fddieyno1-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/9mjhijis8u7-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/9mjhijis8u7-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/dvjcehvruzx2-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/dvjcehvruzx2-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/ijbvuhhphogm3-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/ijbvuhhphogm3-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/h2z4hqobzx453-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/h2z4hqobzx453-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/vzru40yy3xxl1-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/vzru40yy3xxl1-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/ybolpqxok7mj2-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/ybolpqxok7mj2-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/3623cu64klvm3-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/3623cu64klvm3-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/ei1ukmrsrerm1-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/ei1ukmrsrerm1-ID/image;s=1080x1080',
        },
      ];
    return (
        <div className='ibox mt-3 mb-0'>
            <div className='ibox-content'>
                <h1 className='m-3'><strong>Toyota Agya 2021</strong></h1>
            <ImageGallery items={images} />
            </div>
        </div>
    )
}