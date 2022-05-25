import React, { useEffect, useState } from "react";
import app from "../../firebase";
import { useHistory, useParams } from "react-router";

const initialState = {
    status: 'Requested',
    vehicletype: '',
    day: '',
    duration: '',
}

export default function StaffTransportEdit() {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    const { vehicletype, day, duration, status } = state;

    const history = useHistory();

    const {id} = useParams();

    useEffect(() => {
        app.child('transport').on('value', (snapshot) => {
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
        if (!vehicletype || !day || !duration || !status ) {
            return setError('Please fill in all of the necesary information')
        } else {
            app.child(`transport/${id}`).set(state, (err) => {
                if (err) {
                    setError(err);
                } else {
                    setError('Order has been updated successfully');
                }
            });
            setTimeout(() => history.push('/staff-home/transportation'))
        }
    };
    return (
            <div className='ibox minhigh350px'>
                <div className='ibox-content border paddingtop minhigh350px'>
                    <form className='m-t' onSubmit={handleSubmit}>
                    <div className='form-group' >
                            <label className='w-100 mb-2' htmlFor='vehicletype'>Vehicle Type</label>
                            <select className='form-control' disabled value={vehicletype || ''} id='vehicletype' name='vehicletype'onChange={handleInputChange} >
                                <option value=''>...</option>
                                <option value='5 Seeter SUV'>4 Seeter SUV</option>
                                <option value='7 Seeter SUV'>7 Seeter SUV</option>
                                <option value='7 Seeter Mini Van'>7 Seeter Mini Van</option>
                                <option value='9 Seeter Mini Van'>9 Seeter Mini Van</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-md-6 col-xs-12'>
                                    <label className='my-2' htmlFor='day'>Day</label>
                                    <select className='form-control' disabled value={day || ''} name='day' id='day' onChange={handleInputChange}>
                                        <option value=''>...</option>
                                        <option value='Today'>Today</option>
                                        <option value='Tomorrow'>Tomorrow</option>
                                    </select>
                                </div>
                                <div className='col-md-6 col-xs-12'>
                                    <label className='my-2' htmlFor='duration'>Duration</label>
                                    <select className='form-control' disabled value={duration || ''} name='duration' id='duration' onChange={handleInputChange}>
                                        <option value=''>...</option>
                                        <option value='3 hours'>3 hours</option>
                                        <option value='6 hours'>6 hours</option>
                                        <option value='12 hours'>12 hours</option>
                                        <option value='24 hours'>24 hours</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    <div className='form-group' >
                        <label className='w-100 mb-2' htmlFor='quantity'>Status</label>
                        <select className='form-control' value={status || ''} id='status' name='status' onChange={handleInputChange} >
                            <option value=''>...</option>
                            <option value='Requested'>Requested</option>
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