import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import StaffLayout from "../../component/Staff/StaffLayout";
import { useAuth } from "../../contexts/AuthContext";

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const roomNumberRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password does not match')
        }

        try {
            setError('')
            setLoading(true)
           await signup(emailRef.current.value, passwordRef.current.value, roomNumberRef.current.value) 
           setError('User has been created successfully')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }
    return (
        <StaffLayout>
            <Container style={{minHeight: '600px'}}>
            <div className="row justify-content-center">
                <div className="col-8 text-center animated fadeInDown mt-5">
                    <div>
                    </div>
                    <h2 className="font-light">Register Guest</h2>
                    {error && <p className="text-orange">{error}</p>}
                    <form className="m-t" onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                        <input type="email" className="form-control" placeholder="Email" required="" name="email" ref={emailRef} autoComplete="username"/>
                    </div>
                    <div className="form-group mb-2">
                        <input type="password" className="form-control" placeholder="Password" required="" name="password" ref={passwordRef} autoComplete="current-password"/>
                    </div>
                    <div className="form-group mb-2">
                        <input type="password" className="form-control" placeholder="Confirm Password" required="" name="password" ref={passwordConfirmRef} autoComplete="current-password"/>
                    </div>
                    <div className="form-group mb-2">
                        <input type="text" className="form-control" placeholder="Room Number" required="" name="roomNumber" ref={roomNumberRef} autoComplete="current-password"/>
                    </div>
                    <button disabled={loading} type="submit" className="btn btn-primary w-100">
                        Register
                    </button>
                    </form>
                </div>
            </div>
            </Container>
        </StaffLayout>
    )
}