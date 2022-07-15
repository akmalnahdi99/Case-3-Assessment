import React, {useState} from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/imgs/logo.jpg';
import Instagram from '../assets/imgs/instagram.png';
import Twitter from '../assets/imgs/twitter.png';
import Whatsapp from '../assets/imgs/whatsapp.png';
import Facebook from '../assets/imgs/facebook.png';
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('failed to logout')
        }
    }
  return (
  <footer class="footer section-dark p-0">
  <div className='info-footer px-3 py-2'>
    <div class="row">
      <div class="col-md-4 col-sm-6 col-xs-12">
        <Link href="index.html" rel="tooltip" title="Rizurf-Logo" data-placement="bottom" target="_blank">
          <img src={Logo} width='150px' alt='' />
        </Link>
        <ul class="footerlist mt-3">
          <li>
          <button className="p-0 bg-transparent" style={{ textDecoration: "none", border: "none" }} onClick={handleLogout}><span>Log Out</span></button>
          </li>
        </ul>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12 quicklinks-mt">
        <h5 class="mb-3 ">QuickLinks</h5>
        <hr />
        <ul class="footerlist mt-3">
          <li>
            <span>Address: Jl. S. Parman No.102, Karangbawang, Purwokerto Kulon, Kec. Purwokerto Sel., Kabupaten Banyumas, Jawa Tengah 53141</span>
          </li>
          <li>
            <span>Contact: 0811-2900-211</span>
          </li>
          <li>
            <span>Email: autoprestigepwt@gmail.com</span>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <div class="row">
          <div class="col-lg-12 col-sm-12 mb-3">
            <h5 class="mb-3">Socials</h5>
            <hr />
              <a className="m-2" href='https://www.instagram.com/autoprestigepwt/'>
              <img src={Instagram} width='50px'/>
              </a>
              <a className="m-2" href='https://twitter.com/autoprestigepwt'>
              <img src={Twitter} width='50px'/>
              </a>
              <a className="m-2" href='https://www.whatsapp.com/catalog/628112900211/?app_absent=0'>
              <img src={Whatsapp} width='50px'/>
              </a>
              <a className="m-2" href='https://www.facebook.com/autoprestigepwt/'>
              <img src={Facebook} width='50px'/>
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
      <div id="div_copyright" className="text-center">
      Copyright Auto Prestige
      </div>
    </footer>
  );
};
export default Footer;