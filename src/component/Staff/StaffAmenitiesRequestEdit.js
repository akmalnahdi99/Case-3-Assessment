import React, { useEffect, useState } from "react";
import app from "../../firebase";
import { useHistory, useParams } from "react-router";

const initialState = {
    status: 'Requested',
    amenities: '',
    deliveryday: '',
    deliverytime: '',
    quantity: '',

}

export default function StaffAmenitiesRequestEdit() {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    const { amenities, deliveryday, deliverytime, quantity, status } = state;

    const history = useHistory();

    const {id} = useParams();

    useEffect(() => {
        app.child('amenities').on('value', (snapshot) => {
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
        if (!amenities || !deliveryday || !quantity || !deliverytime || !status ) {
            return setError('Please fill in all of the necesary information')
        } else {
            app.child(`amenities/${id}`).set(state, (err) => {
                if (err) {
                    setError(err);
                } else {
                    setError('Order has been updated successfully');
                }
            });
            setTimeout(() => history.push('/staff-home/amenities-request'))
        }
    };
    return (
            <div className='ibox minhigh350px'>
                <div className='ibox-content border paddingtop minhigh350px'>
                    <h2>Please fill in the details for your order</h2>
                    <form className='m-t' onSubmit={handleSubmit}>
                    <div className='form-group' >
                            <label className='w-100 mb-2' htmlFor='amenities'>Item Name</label>
                            <select disabled className='form-control' value={amenities || ''} id='amenities' name='amenities'onChange={handleInputChange} >
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
                                    <select disabled className='form-control' value={deliveryday || ''} name='deliveryday' id='deliveryday' onChange={handleInputChange}>
                                        <option value=''>...</option>
                                        <option value='Today'>Today</option>
                                        <option value='Tomorrow'>Tomorrow</option>
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