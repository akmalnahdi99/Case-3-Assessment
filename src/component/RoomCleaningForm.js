import React, { useState } from "react";
import app from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";


export default function FeedbackForm() {

    const { currentUser } = useAuth()

    const initialState = {
        status: 'Requested',
        cleaningday: '',
        cleaningtime: '',
        additionalcleaningrequest: '',
        userID: currentUser.uid,
        useremail: currentUser.email,
        roomnumber: ''
    }
    const [state, setState] = useState(initialState);

    const { cleaningday, cleaningtime, additionalcleaningrequest, userID, useremail, roomnumber } = state;

    const [error, setError] = useState('')

    const history = useHistory();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!cleaningday || !cleaningtime || !userID || !useremail || !roomnumber) {
            return setError('Please fill in all of the necesary information')
        } else {
            app.child('cleaning').push(state, (err) => {
                if (err) {
                    setError(err);
                } else {
                    setError('Your request have been sent');
                }
            });
            setTimeout(() => history.push('/room-cleaning'))
        }
    };
    return (
        <div className='ibox minhigh350px'>
            <div className='ibox-content border paddingtop minhigh350px'>
                <h2>Please fill in the details for your order</h2>
                <form className='m-t' onSubmit={handleSubmit}>

                    <div className='form-group'>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <label className='w-100 mb-2' htmlFor='cleaningday'>Select the day</label>
                                <select className='form-control' name='cleaningday' id='cleaningday' onChange={handleInputChange}>
                                    <option value=''>...</option>
                                    <option value='Today'>Today</option>
                                    <option value='Tomorrow'>Tomorrow</option>
                                </select>
                            </div>
                            <div className='col-md-6 col-xs-12'>
                                <label className='w-100 mb-2' htmlFor='cleaningtime'>Select the time</label>
                                <select className='form-control' name='cleaningtime' id='cleaningtime' onChange={handleInputChange}>
                                    <option value=''>...</option>
                                    <option value='ASAP'>ASAP</option>
                                    <option value='7:00 AM'>7:00 AM</option>
                                    <option value='8:00 AM'>8:00 AM</option>
                                    <option value='9:00 AM'>9:00 AM</option>
                                    <option value='10:00 AM'>10:00 AM</option>
                                    <option value='11:00 AM'>11:00 AM</option>
                                    <option value='12:00 PM'>12:00 PM</option>
                                    <option value='1:00 PM'>1:00 PM</option>
                                    <option value='2:00 PM'>2:00 PM</option>
                                    <option value='3:00 PM'>3:00 PM</option>
                                    <option value='4:00 PM'>4:00 PM</option>
                                    <option value='5:00 PM'>5:00 PM</option>
                                    <option value='6:00 PM'>6:00 PM</option>
                                    <option value='7:00 PM'>7:00 PM</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className='form-group'>
                        <label className='my-2'>Additional Request</label>
                        <textarea className='form-control' rows='5' id='additionalcleaningrequest' name='additionalcleaningrequest' value={additionalcleaningrequest} onChange={handleInputChange} />
                    </div>

                    <div className='form-group' >
                        <label className='w-100 mb-2' htmlFor='quantity'>Room Number</label>
                        <input className='form-control' type='text' id='roomnumber' name='roomnumber' value={roomnumber} onChange={handleInputChange} />
                    </div>

                    {error && <p className="text-orange mt-2">{error}</p>}
                    <input className='btn btn-primary my-3 w-100' type='submit' />
                </form>
            </div>
        </div>
    )
}