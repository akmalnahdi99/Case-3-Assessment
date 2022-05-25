import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/imgs/logo.png'

const Footer = () => {
  return (<footer class="footer section-dark p-0">
  <div className='info-footer px-3 py-2'>
    <div class="row">
      <div class="col-md-4 col-6">
        <Link href="index.html" rel="tooltip" title="Rizurf-Logo" data-placement="bottom" target="_blank">
          <img src={Logo} class="widthRes" alt='' />
        </Link>
        <ul class="footerlist mt-3">
          <li>
            <Link to='#'>Terms &amp; Conditions</Link>
          </li>
          <li>
            <Link to='#'>Privacy Policy</Link>
          </li>
          <li>
            <Link to='#'>Cookies Policy</Link>
          </li>
          <li>
            <Link to='#'>Work With Us</Link>
          </li>
          <li>
            <Link to='#'>Sitemap</Link>
          </li>
        </ul>
      </div>
      <div class="col-md-4 col-6 quicklinks-mt">
        <h5 class="mb-3 text-white">QuickLinks</h5>
        <hr />
        <ul class="footerlist mt-3">
          <li>
            <span className='text-white'>Address: 922.Lajola Hill</span>
          </li>
          <li>
            <span className='text-white'>Contact: 011-1111-1111</span>
          </li>
          <li>
            <span className='text-white'>Email: Samplehotel@mail.com</span>
          </li>
          <li>
            <Link href="aboutus.html">About Us</Link>
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <div class="row">
          <div class="col-lg-12 col-sm-12 col-6 mb-3">
            <h5 class="mb-3 text-white">Account</h5>
            <hr />
              <Link to='#'>
              Logout
              </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
      <div id="div_copyright" className="text-center">
      Copyright Sample Hotel
      </div>
    </footer>
  );
};
export default Footer;