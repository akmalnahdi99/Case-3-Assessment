import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from '../assets/imgs/logo.jpg'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'



export default function Header() {
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
    <>
    <header className="header row p-2">
      <div className="navbar-header col-9">
        <div className="navbar-brand float-left mt-2">
          <Link to='/'>
            <img className="img-fluid" src={Logo} width='150px' alt='' /> <br />
          </Link>
          {error && <span className='text-danger'>{error}</span>}
        </div>
      </div>
      <div className="nav navbar-right col-3 justify-content-end align-items-center">
        <Link to='/about'>
          <button className="headerb1"><span>About Us</span></button>
          </Link>
      </div>
    </header>
    <div className="rline p-1" style={{ backgroundColor: "#ca1f05"}}>

    </div>
    <div className="rline p-1" style={{ backgroundColor: "#B2B2B2"}}>

    </div>
    </>
  );
}