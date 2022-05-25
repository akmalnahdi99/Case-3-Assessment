import React from "react";
import { Link } from "react-router-dom";
import Gym from '../assets/imgs/gym.svg';
import Pool from '../assets/imgs/swimming-pool.svg';
import Restaurant from '../assets/imgs/cutlery.svg';
import Auditorium from '../assets/imgs/auditorium.svg';
import Bar from '../assets/imgs/cocktail.svg';
import Lounge from '../assets/imgs/lounge.svg'

export default function FacilitiesItem() {
    return (
        <div className='ibox dash-box mt-3 mb-0'>
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
    )
}