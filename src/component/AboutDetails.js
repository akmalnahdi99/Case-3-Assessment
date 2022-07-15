import React from "react";
import logo from '../assets/imgs/logo.jpg'

export default function AboutDetails() {
    return (
        <>
            <img className="mx-auto d-block img-fluid" src={logo} width='400px' />
            <div className='ibox mt-3 mb-4'>
                <div className='ibox-content'>
                    <span className="fs-5" style={{lineHeight: "40px"}}>Alamat: Jl. S. Parman No.102, Karangbawang, Purwokerto Kulon, Kec. Purwokerto Sel., Kabupaten Banyumas, Jawa Tengah 53141<br />
                    Telp: 0811-2900-211<br />
                    Buka Setiap Hari pukul 08.00 – 17.30 WIB<br />
                    Instagram: @autoprestigepwt<br />
                    Facebook: @autoprestigepwt<br />
                    Twitter: @autoprestigepwt</span>

                </div>
            </div>
        </>
    )
}