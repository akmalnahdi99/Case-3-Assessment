import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from '../assets/imgs/logo.png'
import { Link } from "react-router-dom";


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
    <header className="header row">
      <div className="navbar-header col-9">
        <div className="navbar-brand float-left mt-2">
          <Link to='/'>
            <img src={Logo} width='120px' alt='' /> <br />
          </Link>
          {error && <span className='text-danger'>{error}</span>}
        </div>
      </div>
      <ul className="nav navbar-right col-3 justify-content-end align-items-center">
        <li>
          <button className="p-0 bg-transparent" style={{ textDecoration: "none", border: "none" }} onClick={handleLogout}><span>Log Out</span></button>
        </li>
      </ul>
    </header>
  );
}