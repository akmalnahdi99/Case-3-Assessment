import React, { useEffect, useState } from "react";
import app from "../../firebase";
import { useHistory, useParams } from "react-router";

const initialState = {
    status: 'Requested',
    context: '',

}

export default function StaffRoomMaintenanceEdit() {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    const { context, status } = state;

    const history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        app.child('maintenance').on('value', (snapshot) => {
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
        if (!context || !status) {
            return setError('Please fill in all of the necesary information')
        } else {
            app.child(`maintenance/${id}`).set(state, (err) => {
                if (err) {
                    setError(err);
                } else {
                    setError('Order has been updated successfully');
                }
            });
            setTimeout(() => history.push('/staff-home/room-maintenance'))
        }
    };
    return (
        <div className='ibox minhigh350px'>
            <div className='ibox-content border paddingtop minhigh350px'>
                <h2>Please fill in the details for your order</h2>
                <form className='m-t' onSubmit={handleSubmit}>
                    <div className='form-group' >
                        <label className='w-100 mb-2' htmlFor='context'>Context</label>
                        <textarea disabled className='form-control' value={context || ''} rows='5' id='context' name='context' onChange={handleInputChange} />
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