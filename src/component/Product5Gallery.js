import React from "react";
import ImageGallery from 'react-image-gallery';

export default function AuditoriumGallery() {
    const images = [
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/slx33hizyqft2-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/slx33hizyqft2-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/ifp8gufld1bb2-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/ifp8gufld1bb2-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/dt7lpjiukp5i3-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/dt7lpjiukp5i3-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/pv70cn5tuu3q3-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/pv70cn5tuu3q3-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/g7e7k67b6xld3-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/g7e7k67b6xld3-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/ibxjh2vkpa9t-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/ibxjh2vkpa9t-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/p17fjfg4sz913-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/p17fjfg4sz913-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/vmtuar29vyqd3-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/vmtuar29vyqd3-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/n8kswmjr7jtt2-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/n8kswmjr7jtt2-ID/image;s=1080x1080',
        },
      ];
    return (
        <div className='ibox mt-3 mb-0'>
            <div className='ibox-content'>
                <h1 className='m-3'><strong>Suzuki Carry 2021</strong></h1>
            <ImageGallery items={images} />
            </div>
        </div>
    )
}