import React from "react";
import { Link } from 'react-router-dom';

export default function StaffHomeBody() {
    return (
        <div className='col-md-10 col-xs-12'>
                        <div className='ibox dash-box mt-3 mb-0'>
                            <div className='ibox-content pt-0'>
                            <h2 className='p-3 mb-3'><strong>Welcome</strong></h2>
                                <div className='row text-center justify-content-center'>
                                    <div className='col-md-4 col-xs-6 p-2 mb-2 align-items-center justify-content-center align-text-center'>
                                        <Link to='/staff-home/guest-signup' className='btn btn-default btn-block px-1 btn-dashboardicon w-100 h-100 align-text-center'>
                                            <h2>Create Guest Account</h2>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-xs-6 p-2 mb-2'>
                                        <Link to='/staff-home/food-delivery' className='btn btn-default btn-block px-1 btn-dashboardicon text-truncate h-100 w-100'>
                                           <h2>Food Delivery</h2>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-xs-6 p-2 mb-2'>
                                        <Link to='/staff-home/amenities-request' className='btn btn-default btn-block px-1 btn-dashboardicon text-truncate h-100 w-100'>
                                            <h2>Amenities Request</h2>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-xs-6 p-2 mb-2'>
                                        <Link to='/staff-home/room-maintenance' className='btn btn-default btn-block px-1 btn-dashboardicon text-truncate h-100 w-100'>
                                            <h2>Room Maintenance</h2>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-xs-6 p-2 mb-2'>
                                        <Link to='/staff-home/room-cleaning' className='btn btn-default btn-block px-1 btn-dashboardicon text-truncate h-100 w-100'>
                                            <h2>Room Cleaning</h2>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-xs-6 p-2 mb-2'>
                                        <Link to='/staff-home/transportation' className='btn btn-default btn-block px-1 btn-dashboardicon text-truncate h-100 w-100'>
                                            <h2>Transportation</h2>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-xs-6 p-2 mb-2'>
                                        <Link to='/staff-home/guest-feedback' className='btn btn-default btn-block px-1 btn-dashboardicon text-truncate h-100 w-100'>
                                            <h2>Guests' Feedback</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}