import React from 'react';
import { Link } from 'react-router-dom';
import sigra from '../assets/imgs/sigra.JPG';
import xl7 from '../assets/imgs/xl7.jpg';
import greysigra from '../assets/imgs/greysigra.jpg';


export default function HomeBody() {
    return (
        <>
            <div className='row mt-5 pe-0 text-center'>
            <h1 className='display-2'>Available For Sale</h1>
                <div className='col-md-4 col-xs-12'>
                    <div className='col-12'>
                        <Link to='/product1' className='product'>
                        <div className='ibox minhigh350px mt-3'>
                            <div className='ibox-content border paddingtop minhigh350px'>
                                <div className='row justify-content-center'>
                                <h1>Suzuki XL7 2020</h1>
                                <img src={xl7} width='300px'/>
                                <button className='btn btn-primary mt-3'><span>View Details</span></button>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-4 col-xs-12'>
                    <div className='col-12'>
                        <Link to='/product2' className='product'>
                        <div className='ibox minhigh350px mt-3'>
                            <div className='ibox-content border paddingtop minhigh350px'>
                                <div className='row justify-content-center'>
                                <h1>Daihatsu Sigra R 2021</h1>
                                <img src={sigra} width='300px'/>
                                <button className='btn btn-primary mt-3'><span>View Details</span></button>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-4 col-xs-12'>
                    <div className='col-12'>
                        <Link to='/product3' className='product'>
                        <div className='ibox minhigh350px mt-3'>
                            <div className='ibox-content border paddingtop minhigh350px'>
                                <div className='row justify-content-center'>
                                <h1>Daihatsu Sigra R 2021</h1>
                                <img src={greysigra} width='300px'/>
                                <button className='btn btn-primary mt-3'><span>View Details</span></button>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-4 col-xs-12'>
                    <div className='col-12'>
                        <Link to='/product4' className='product'>
                        <div className='ibox minhigh350px mt-3'>
                            <div className='ibox-content border paddingtop minhigh350px'>
                                <div className='row justify-content-center'>
                                <h1>Daihatsu Ayla 2021</h1>
                                <img src='https://apollo-singapore.akamaized.net/v1/files/mhm5t527yvet2-ID/image;s=1080x1080' width='300px'/>
                                <button className='btn btn-primary mt-3'><span>View Details</span></button>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-4 col-xs-12'>
                    <div className='col-12'>
                        <Link to='/product5' className='product'>
                        <div className='ibox minhigh350px mt-3'>
                            <div className='ibox-content border paddingtop minhigh350px'>
                                <div className='row justify-content-center'>
                                <h1>Suzuki Carry 2021</h1>
                                <img src='https://apollo-singapore.akamaized.net/v1/files/slx33hizyqft2-ID/image;s=1080x1080' width='300px'/>
                                <button className='btn btn-primary mt-3'><span>View Details</span></button>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-4 col-xs-12'>
                    <div className='col-12'>
                        <Link to='/product6' className='product'>
                        <div className='ibox minhigh350px mt-3'>
                            <div className='ibox-content border paddingtop minhigh350px'>
                                <div className='row justify-content-center'>
                                <h1>Toyota Agya 2021</h1>
                                <img src='https://apollo-singapore.akamaized.net/v1/files/n9l5fddieyno1-ID/image;s=1080x1080' width='300px'/>
                                <button className='btn btn-primary mt-3'><span>View Details</span></button>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                
                
            </div>
        </>

    );
};
