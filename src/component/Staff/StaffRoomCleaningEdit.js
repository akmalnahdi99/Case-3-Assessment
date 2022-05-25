import React, { useEffect, useState } from "react";
import app from "../../firebase";
import { useHistory, useParams } from "react-router";

const initialState = {
    status: 'Requested',
    cleaningday: '',
    cleaningtime: '',
    additionalcleaningrequest: ''
}

export default function StaffRoomCleaningEdit() {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    const { cleaningday, cleaningtime, additionalcleaningrequest, status } = state;

    const history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        app.child('cleaning').on('value', (snapshot) => {
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
            setState({ ...data[id] })
        } else {
            setState({ ...initialState })
        }

        return () => {
            setState({ ...initialState })
        }
    }, [id, data])

    const [error, setError] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!cleaningday || !cleaningtime || !status) {
            return setError('Please fill in all of the necesary information')
        } else {
            app.child(`cleaning/${id}`).set(state, (err) => {
                if (err) {
                    setError(err);
                } else {
                    setError('Order has been updated successfully');
                }
            });
            setTimeout(() => history.push('/staff-home/room-cleaning'))
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
                                <select className='form-control' disabled value={cleaningday || ''} name='cleaningday' id='cleaningday' onChange={handleInputChange}>
                                    <option value=''>...</option>
                                    <option value='Today'>Today</option>
                                    <option value='Tomorrow'>Tomorrow</option>
                                </select>
                            </div>
                            <div className='col-md-6 col-xs-12'>
                                <label className='w-100 mb-2' htmlFor='cleaningtime'>Select the time</label>
                                <select className='form-control' disabled value={cleaningtime || ''} name='cleaningtime' id='cleaningtime' onChange={handleInputChange}>
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
                        <textarea className='form-control' disabled value={additionalcleaningrequest || ''} rows='5' id='additionalcleaningrequest' name='additionalcleaningrequest' onChange={handleInputChange} />
                    </div>

                    <div className='form-group' >
                        <label className='w-100 mb-2' htmlFor='quantity'>Status</label>
                        <select className='form-control' value={status || ''} id='status' name='status' onChange={handleInputChange} >
                            <option value=''>...</option>
                            <option value='Requested'>Requested</option>
                            <option value='In Progress'>In Progress</option>
                            <option value='Completed'>Completed</option>
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