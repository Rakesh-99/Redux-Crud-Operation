import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({

        username: '',
        email: '',
        age: '',
        gender: ''
    });


    const submitHandle = (e) => {
        e.preventDefault();
        dispatch(createUser(userDetails));
        navigate('/');

    };

    const changeHandle = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value })
    }

    return (

        <>
            <div className="flex w-full justify-center mt-40">

                <form action="" className='flex flex-col space-y-2' onSubmit={submitHandle}>

                    <div className="flex flex-col">
                        <label htmlFor="" className=''>Username</label>
                        <input type="text" placeholder='Enter your username' required className='py-1 px-2 border rounded-md w-80  outline-none' name='username' onChange={changeHandle} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="" className=''>Email</label>
                        <input type="email" placeholder='Enter your email' required className='py-1 px-2 border rounded-md w-80 outline-none' name='email' onChange={changeHandle} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="" className=''>Age</label>
                        <input type="number" placeholder='Enter your age' required className='py-1 px-2 border rounded-md w-80 outline-none' name='age' onChange={changeHandle} />
                    </div>

                    <label htmlFor="">Gender</label>
                    <div className="flex gap-2">
                        <input type="radio" name='gender' value='male' required onChange={changeHandle} />
                        <label htmlFor="">Male</label>
                        <input type="radio" name='gender' value='female' required onChange={changeHandle} />
                        <label htmlFor="">Female</label>
                    </div>

                    <button type='submit' className='bg-indigo-600 text-white w-80 rounded-md py-2 '>Add</button>
                </form>
            </div>
        </>
    )
}

export default CreateUser
