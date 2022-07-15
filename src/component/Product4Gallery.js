import React from "react";
import ImageGallery from 'react-image-gallery';

export default function RestaurantGallery() {
    const images = [
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/mhm5t527yvet2-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/mhm5t527yvet2-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/dvbmn0pan2hu2-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/dvbmn0pan2hu2-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/ou29n27myugy1-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/ou29n27myugy1-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/0wvbcpk5xbt22-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/0wvbcpk5xbt22-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/k8qjcec5zvwe1-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/k8qjcec5zvwe1-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/0l1zq57qw24e2-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/0l1zq57qw24e2-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/nrio0gsmhxut-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/nrio0gsmhxut-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/epdhhh61rw4t3-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/epdhhh61rw4t3-ID/image;s=1080x1080',
        },
      ];
    return (
        <div className='ibox mt-3 mb-0'>
            <div className='ibox-content'>
                <h1 className='m-3'><strong>Daihatsu Ayla 2021</strong></h1>
            <ImageGallery items={images} />
            </div>
        </div>
    )
}