import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
           await login(emailRef.current.value, passwordRef.current.value) 
           history.push("/")
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
        
    }
    return (
        <div>
            <div className="row">
                <div className="col-12 middle-box text-center animated fadeInDown">
                    <div>
                    </div>
                    <h3>Welcome to Sample Hotel</h3>
                    <p className="font-light">Please Log In Your Account</p>
                    {error && <p className="text-danger">{error}</p>}
                    <form className="m-t" onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                        <input type="email" className="form-control" placeholder="Email" required="" name="email" ref={emailRef} autoComplete="username"/>
                    </div>
                    <div className="form-group mb-2">
                        <input type="password" className="form-control" placeholder="Password" required="" name="password" ref={passwordRef} autoComplete="current-password"/>
                    </div>
                    <button disabled={loading} type="submit" className="btn btn-primary w-100">
                        Log In
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}