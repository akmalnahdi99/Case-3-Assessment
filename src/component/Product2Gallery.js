import React from "react";
import ImageGallery from 'react-image-gallery';

export default function BarGallery() {
    const images = [
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/hg65z23g1tik1-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/hg65z23g1tik1-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/8tl9cbn6e6oq-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/8tl9cbn6e6oq-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/4gksy2jevasq1-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/4gksy2jevasq1-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/2a8b5w3qe0qv2-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/2a8b5w3qe0qv2-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/aa3gp0ri99vr-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/aa3gp0ri99vr-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/yajlz5vzjnws-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/yajlz5vzjnws-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/so0zpnis3ri82-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/so0zpnis3ri82-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/cwdpwjal18cp1-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/cwdpwjal18cp1-ID/image;s=1080x1080',
        },
        {
          original: 'https://apollo-singapore.akamaized.net/v1/files/j68kcy531u9r2-ID/image;s=1080x1080',
          thumbnail: 'https://apollo-singapore.akamaized.net/v1/files/j68kcy531u9r2-ID/image;s=1080x1080',
        },
      ];
    return (
        <div className='ibox mt-3 mb-0'>
            <div className='ibox-content'>
                <h1 className='m-3'><strong>Daihatsu Sigra R 2021</strong></h1>
            <ImageGallery items={images} />
            </div>
        </div>
    )
}