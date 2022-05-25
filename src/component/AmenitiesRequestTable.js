import React, { useState, useEffect } from "react";
import app from '../firebase';
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";


export default function AmenitiesRequestTable() {
    const [data, setData] = useState({});
    const [error, setError] = useState('')
    const { currentUser } = useAuth()
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
    }, []);
    const onDelete = (id) => {
        if (window.confirm('Are you sure you want to cancel your request?')){
            app.child(`amenities/${id}`).remove((err) => {
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
                <table className='styled-table'  style={{maxWidth: '670px'}}>
                    <thead>
                        <tr>
                            <th className='text-center'>Item Name</th>
                            <th className='text-center'>Delivery Day</th>
                            <th className='text-center'>Delivery Time</th>
                            <th className='text-center'>Status</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(data).map((id) => {
                            if(data[id].userID === currentUser.uid)
                            return (
                                <tr key={id}>
                                    <td>{data[id].amenities}</td>
                                    <td>{data[id].deliveryday}</td>
                                    <td>{data[id].deliverytime}</td>
                                    <td>{data[id].status}</td>
                                    <td>
                                        <Link to={`amenities-request/details/${id}`}>
                                        <button className='btn btn-edit'>View Details</button>
                                        </Link>
                                        <button className='btn btn-delete' disabled={data[id].status === 'In Progress' || data[id].status === 'Delivering' || data[id].status === 'Delivered'} onClick={() => onDelete(id)}>Delete</button>
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