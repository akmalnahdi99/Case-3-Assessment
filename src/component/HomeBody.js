import React from 'react';
import { Link } from 'react-router-dom';
import Gym from '../assets/imgs/gym.svg';
import Pool from '../assets/imgs/swimming-pool.svg';
import Restaurant from '../assets/imgs/cutlery.svg';
import Auditorium from '../assets/imgs/auditorium.svg';
import Bar from '../assets/imgs/cocktail.svg';
import Lounge from '../assets/imgs/lounge.svg'

export default function HomeBody() {
    return (
        <>
            <div className='row pe-0'>
                <div className='col-md-8 col-xs-12'>
                    <div className='col-12'>
                        <div className='ibox minhigh350px mt-3'>
                            <div className='ibox-content border paddingtop minhigh350px'>
                                <h2><strong>Sample Hotel</strong></h2>
                                <span>ILorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing </span>
                                <br />
                                <br />
                                <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='ibox dash-box mt-3 mb-4'>
                            <div className='ibox-content pt-0'>
                                <h2 className='p-3 mb-3'><strong>Check Out Our Facilities</strong></h2>
                                <div className='row text-center'>
                                    <div className='col-md-4 col-xs-6 p-2 mb-2'>
                                        <Link to='/facilities/gym' className='btn btn-default btn-block px-1 btn-dashboardicon text-truncate w-100'>
                                            <img src={Gym} width='24px' alt='' />
                                            <br /> Gym
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-xs-6 p-2 mb-2'>
                                        <Link to='/facilities/swimming-pool' className='btn btn-default btn-block px-1 btn-dashboardicon text-truncate w-100'>
                                            <img src={Pool} width='24px' alt='' />
                                            <br /> Swimming Pool
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-xs-6 p-2 mb-2'>
                                        <Link to='/facilities/restaurant' className='btn btn-default btn-block px-1 btn-dashboardicon text-truncate w-100'>
                                            <img src={Restaurant} width='24px' alt='' />
                                            <br /> Restaurant
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-xs-6 p-2 mb-2'>
                                        <Link to='/facilities/auditorium' className='btn btn-default btn-block px-1 btn-dashboardicon text-truncate w-100'>
                                            <img src={Auditorium} width='24px' alt='' />
                                            <br /> Auditorium
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-xs-6 p-2 mb-2'>
                                        <Link to='/facilities/bar' className='btn btn-default btn-block px-1 btn-dashboardicon text-truncate w-100'>
                                            <img src={Bar} width='24px' alt='' />
                                            <br /> Bar
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-xs-6 p-2 mb-2'>
                                        <Link to='/facilities/lounge' className='btn btn-default btn-block px-1 btn-dashboardicon text-truncate w-100'>
                                            <img src={Lounge} width='24px' alt='' />
                                            <br /> Lounge
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-xs-12 mt-3 mb-4'>
                    <div className='ibox h-100 w-100'>
                        <div className='ibox-content paddingtop'>
                            <h2><strong>What's New!</strong></h2>
                            <ul className='home-body-link'>
                                <li className='mb-3'>
                                    <Link to='/transportation' style={{ textDecoration: 'none' }}>
                                        Transportation Booking
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link to='/feedback' style={{ textDecoration: 'none' }}>
                                        Feedback Form
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link to='/room-cleaning' style={{ textDecoration: 'none' }}>
                                        Room Cleaning Booking
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link to='/amenities-request' style={{ textDecoration: 'none' }}>
                                        Room Amenities Request
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md-2 col-xs-6'>
                    <span className='text-center'>Wifi Code: 12345678</span>
                </div>
            </div>
        </>

    );
};
