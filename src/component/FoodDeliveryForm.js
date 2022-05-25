import React, { useState } from "react";
import app from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";


export default function FoodDeliveryForm() {
    const { currentUser } = useAuth()

    const initialState = {
        status: 'Requested',
        itemname: '',
        deliveryday: '',
        deliverytime: '',
        quantity: '',
        additionalrequest: '',
        userID: currentUser.uid,
        useremail: currentUser.email,
        roomnumber: ''
    }

    const [state, setState] = useState(initialState);
    
    

    const { itemname, additionalrequest, deliveryday, deliverytime, quantity, userID, useremail, roomnumber } = state;

    const history = useHistory();
    const [error, setError] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!itemname || !deliveryday || !quantity || !deliverytime || !userID || !useremail || !roomnumber) {
            return setError('Please fill in all of the necessary information')
        } else {
            app.child('orders').push(state, (err) => {
                if (err) {
                    setError(err);
                } else {
                    setError('Your order has been added');
                }
            });
            setTimeout(() => history.push('/food-delivery'))
        }
    };
    return (
        <div className='ibox minhigh350px'>
            <div className='ibox-content border paddingtop minhigh350px'>
                <h2>Please fill in the details for your order</h2>
                <form className='m-t' onSubmit={handleSubmit}>
                    <div className='form-group' >
                        <label className='w-100 mb-2' htmlFor='itemname'>Item Name</label>
                        <select className='form-control' id='itemname' name='itemname' onChange={handleInputChange} >
                            <option value=''>...</option>
                            <option value='Aglio Olio'>Aglio Olio</option>
                            <option value='Alfredo Carbonara'>Alfredo Carbonara</option>
                            <option value='Chicken and Waffle'>Chicken and Waffle</option>
                            <option value='Chicken Sandwich'>Chicken Sandwich</option>
                            <option value='Grilled Salmon'>Grilled Salmon</option>
                            <option value='Fried Rice'>Fried Rice</option>
                            <option value='Iced Lemon Tea'>Iced Lemon Tea</option>
                            <option value='Mojito'>Mojito</option>
                            <option value='Rib-eye Steak'>Rib-eye Steak</option>
                            <option value='Red Wine'>Red Wine</option>
                            <option value='Steak and Cheese Sandwich'>Steak and Cheese Sandwich</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label className='my-2' htmlFor='additionalrequest'>Additional Request</label>
                        <textarea className='w-100 form-control textarea' id='additionalrequest' rows='5' name='additionalrequest' value={additionalrequest} onChange={handleInputChange} />
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
                        <input className='form-control' type='text' id='roomnumber' name='roomnumber' value={roomnumber} onChange={handleInputChange}/>
                    </div>
                    
                    {error && <p className="text-orange mt-2">{error}</p>}
                    <input className='btn btn-primary my-3 w-100' type='submit' />
                </form>
            </div>
        </div>
    )
}