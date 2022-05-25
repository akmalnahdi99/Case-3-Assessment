import React, { useEffect, useState } from "react";
import app from "../../firebase";
import { useHistory, useParams } from "react-router";

const initialState = {
    status: 'Requested',
    itemname: '',
    deliveryday: '',
    deliverytime: '',
    quantity: '',
    additionalrequest: ''

}

export default function StaffFoodDeliveryEdit() {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    const { itemname, additionalrequest, deliveryday, deliverytime, quantity, status } = state;

    const history = useHistory();

    const {id} = useParams();

    useEffect(() => {
        app.child('orders').on('value', (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() })
            } else {
                setData({});
            }
        });

        return () => {
            setData({})
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            setState({...data[id]})
        } else {
            setState({...initialState})
        }

        return () => {
            setState({...initialState})
        }
    }, [id, data])

    const [error, setError] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!itemname || !deliveryday || !quantity || !deliverytime || !status ) {
            return setError('Please fill in all of the necesary information')
        } else {
            app.child(`orders/${id}`).set(state, (err) => {
                if (err) {
                    setError(err);
                } else {
                    setError('Order has been updated successfully');
                }
            });
            setTimeout(() => history.push('/staff-home/food-delivery'))
        }
    };
    return (
            <div className='ibox minhigh350px'>
                <div className='ibox-content border paddingtop minhigh350px'>
                    <h2>Please fill in the details for your order</h2>
                    <form className='m-t' onSubmit={handleSubmit}>
                        <div className='form-group' >
                            <label className='w-100 mb-2' htmlFor='itemname'>Item Name</label>
                            <select className='form-control' id='itemname' value={itemname || ''} disabled name='itemname'onChange={handleInputChange} >
                                <option value=''>...</option>
                                <option value='aglioolio'>Aglio Olio</option>
                                <option value='carbonara'>Alfredo Carbonara</option>
                                <option value='chickenandwaffle'>Chicken and Waffle</option>
                                <option value='chickensandwich'>Chicken Sandwich</option>
                                <option value='grilledsalmon'>Grilled Salmon</option>
                                <option value='friedrice'>Fried Rice</option>
                                <option value='icedlemontea'>Iced Lemon Tea</option>
                                <option value='mojito'>Mojito</option>
                                <option value='ribeyesteak'>Rib-eye Steak</option>
                                <option value='redwine'>Red Wine</option>
                                <option value='steakandcheese'>Steak and Cheese Sandwich</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label className='my-2' htmlFor='additionalrequest'>Additional Request</label>
                            <textarea disabled className='w-100 form-control textarea' value={additionalrequest || ''} id='additionalrequest' rows='5' name='additionalrequest' onChange={handleInputChange} />
                        </div>
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-6'>
                                    <label className='my-2' htmlFor='additionalrequest'>Delivery day</label>
                                    <select disabled className='form-control' value={deliveryday || ''} name='deliveryday' id='deliveryday' onChange={handleInputChange}>
                                        <option value=''>...</option>
                                        <option value='today'>Today</option>
                                        <option value='tomorrow'>Tomorrow</option>
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <label className='my-2' htmlFor='additionalrequest'>Delivery time</label>
                                    <select disabled className='form-control' value={deliverytime || ''} name='deliverytime' id='deliverytime' onChange={handleInputChange}>
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
                            <select disabled className='form-control' value={quantity || ''} id='quantity' name='quantity'onChange={handleInputChange} >
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
                            <label className='w-100 mb-2' htmlFor='quantity'>Status</label>
                            <select className='form-control' value={status || ''} id='status' name='status'onChange={handleInputChange} >
                                <option value=''>...</option>
                                <option value='Requested'>Requested</option>
                                <option value='In Progress'>In Progress</option>
                                <option value='Delivering'>Delivering</option>
                                <option value='Delivered'>Delivered</option>
                                <option value='Canceled'>Canceled</option>
                            </select>
                        </div>
                        {error && <p className="text-orange mt-2">{error}</p>}
                        <input className='btn btn-primary my-3 w-100' type='submit' value={id ? 'Update' : 'Save'} />
                    </form>
                </div>
            </div>
    )
}