import React, { useState } from "react";
import app from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";

export default function AmenitiesRequestForm() {

    const { currentUser } = useAuth()

    const initialState = {
        status: 'Requested',
        amenities: '',
        deliveryday: '',
        deliverytime: '',
        quantity: '',
        userID: currentUser.uid,
        useremail: currentUser.email,
        roomnumber: ''
    }
    const [state, setState] = useState(initialState);

    const { amenities, deliveryday, deliverytime, quantity, userID, useremail, roomnumber } = state;

    const history = useHistory();
    const [error, setError] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amenities || !deliveryday || !quantity || !deliverytime || !userID || !useremail || !roomnumber) {
            return setError('Please fill in all of the necesary information')
        } else {
            app.child('amenities').push(state, (err) => {
                if (err) {
                    setError(err);
                } else {
                    setError('Your order has been placed');
                }
            });
            setTimeout(() => history.push('/amenities-request'))
        }
    };
    return (
        <div className='ibox minhigh350px'>
            <div className='ibox-content border paddingtop minhigh350px'>
                <h2>Please fill in the details for your request</h2>
                <form className='m-t' onSubmit={handleSubmit}>
                    <div className='form-group' >
                        <label className='w-100 mb-2' htmlFor='amenities'>Item Name</label>
                        <select className='form-control' id='amenities' name='amenities' onChange={handleInputChange} >
                            <option value=''>...</option>
                            <option value='Towel'>Towel</option>
                            <option value='Tooth Brush'>Tooth Brush</option>
                            <option value='Tissue'>Tissue</option>
                            <option value='Cups'>Cups</option>
                            <option value='Sugar'>Sugar</option>
                            <option value='Pillow'>Pillow</option>
                            <option value='Water Bottle'>Water Bottle</option>
                            <option value='Tooth Paste'>Tooth Paste</option>
                            <option value='Coffee Sachet'>Coffee Sachet</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <div className='row'>
                            <div className='col-6'>
                                <label className='my-2' htmlFor='additionalrequest'>Delivery day</label>
                                <select className='form-control' name='deliveryday' id='deliveryday' onChange={handleInputChange}>
                                    <option value=''>...</option>
                                    <option value='Today'>Today</option>
                                    <option value='Tomorrow'>Tomorrow</option>
                                </select>
                            </div>
                            <div className='col-6'>
                                <label className='my-2' htmlFor='additionalrequest'>Delivery time</label>
                                <select className='form-control' name='deliverytime' id='deliverytime' onChange={handleInputChange}>
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
                                    <option value='8:00 PM'>8:00 PM</option>
                                    <option value='9:00 PM'>9:00 PM</option>
                                    <option value='10:00 PM'>10:00 PM</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='form-group' >
                        <label className='w-100 mb-2' htmlFor='quantity'>Quantity</label>
                        <select className='form-control' id='quantity' name='quantity' onChange={handleInputChange} >
                            <option value=''>...</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                        </select>
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