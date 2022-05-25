import React from "react";

export default function RestaurantDetails() {
    return (
        <div className='ibox mt-3 mb-0'>
            <div className='ibox-title'>
                <h2 className='m-3'><strong>Details</strong></h2>
            <div className='ibox-content'>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                <span><strong>Location: </strong>Ground floor of Sample Hotel</span>
                <br />
                <span><strong>Operating hours: </strong>Open 24 hours</span>
            </div>
            </div>
        </div>
    )
}