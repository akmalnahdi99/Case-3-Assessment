import React, { useState } from "react";
import app from "../firebase";
import { useHistory } from "react-router";
import { useAuth } from "../contexts/AuthContext";


export default function FeedbackForm() {
    const { currentUser } = useAuth()

const initialState = {
    feedbacktopic: '',
    context: '',
    userID: currentUser.uid,
    useremail: currentUser.email
}


    const [state, setState] = useState(initialState);
    
    const { feedbacktopic, context, userID, useremail } = state;
    
    const [error, setError] = useState('')

    const history = useHistory();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!feedbacktopic || !context || !userID || !useremail){
            return setError('Please fill in all of the necesary information')
        }else {
            app.child('feedback').push(state, (err) => {
                if(err){
                    setError(err);
                } else {
                    setError('Your feedback has been sent');
                }
            });
            setTimeout(() => history.push('/feedback'))
        }
    };
    return (
            <div className='row'>
                <div className='ibox minhigh350px'>
                    <div className='ibox-content border paddingtop minhigh350px'>
                        <h2>Please fill in the details for your order</h2>
                        <form className='m-t' onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label className='w-100 mb-2' htmlFor='itemname'>Feebck Topic</label>
                                <select className='form-control' name='feedbacktopic' id='feedbacktopic' onChange={handleInputChange}>
                                    <option value=''>...</option>
                                    <option value='Food Delivery'>Food delivery</option>
                                    <option value='Room Maintainace'>Room maintainace</option>
                                    <option value='Transportation'>Transportation</option>
                                    <option value='Amenities Request'>Amenities request</option>
                                    <option value='Room Cleaning'>Room cleaning</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label className='my-2'>Context</label>
                                <textarea className='form-control' rows='5' id='context' name='context' value={context} onChange={handleInputChange} />
                            </div>
                            
                        {error && <p className="text-orange mt-2">{error}</p>}
                            <input className='btn btn-primary my-3 w-100' type='submit'/>
                        </form>
                    </div>
                </div>
            </div>
    )
}