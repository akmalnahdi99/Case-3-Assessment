import React, { useState, useEffect } from "react";
import app from '../../firebase';
import { Link } from "react-router-dom";


export default function StaffTransportTable() {
    const [data, setData] = useState({});
    const [error, setError] = useState('')

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
    }, []);
    const onDelete = (id) => {
        if (window.confirm('Are you sure you want to cancel your request?')){
            app.child(`transport/${id}`).remove((err) => {
                if (err) {
                    setError('unable to cancel request')
                } else {
                    setError('Your request has been cancelled successfully')
                }
            })
        }
    }
    return (
        <div className='ibox minhigh350px'>
            <div className='ibox-content border m-0 paddingtop minhigh350px text-center'>
            {error && <p className="text-orange mt-2">{error}</p>}
                <table className='styled-table' style={{maxWidth: '840px'}}>
                    <thead>
                        <tr>
                            <th className='text-center'>No.</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Item Name</th>
                            <th className='text-center'>Delivery Day</th>
                            <th className='text-center'>Delivery Time</th>
                            <th className='text-center'>Status</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(data).map((id, index) => {
                            return (
                                <tr key={id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{data[id].useremail}</td>
                                    <td>{data[id].vehicletype}</td>
                                    <td>{data[id].day}</td>
                                    <td>{data[id].duration}</td>
                                    <td>{data[id].status}</td>
                                    <td>
                                        <Link to={`/staff-home/transportation/details/${id}`}>
                                        <button className='btn btn-edit'>View Details</button>
                                        </Link>
                                        <button className='btn btn-delete' disabled={data[id].status === 'Completed'} onClick={() => onDelete(id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}