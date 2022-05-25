import React, { useState, useEffect } from "react";
import app from '../../firebase';
import { Link } from "react-router-dom";


export default function StaffGuestFeedbackTable() {
    const [data, setData] = useState({});
    const [error] = useState('')

    useEffect(() => {
        app.child('feedback').on('value', (snapshot) => {
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
    return (
        <div className='ibox minhigh350px'>
            <div className='ibox-content border m-0 paddingtop minhigh350px text-center'>
            {error && <p className="text-orange mt-2">{error}</p>}
                <table className='styled-table w-100' style={{maxWidth: '570px', display: 'inline'}}>
                    <thead>
                        <tr>
                            <th className='text-center'>No.</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Topic</th>
                            <th className='text-center'>Context</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(data).map((id, index) => {
                            return (
                                <tr key={id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{data[id].useremail}</td>
                                    <td>{data[id].feedbacktopic}</td>
                                    <td>{data[id].context}</td>
                                    <td>
                                        <Link to={`/staff-home/guest-feedback/details/${id}`}>
                                        <button className='btn btn-edit'>View Details</button>
                                        </Link>
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