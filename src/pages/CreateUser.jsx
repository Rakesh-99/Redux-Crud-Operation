import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [createUser, setCreateUser] = useState({
    username: '',
    email: '',
    age: '',
    gender: ''
  });


  const inputChangeHandle = (e) => {
    const { name, value } = e.target;
    setCreateUser({ ...createUser, [name]: value });
  }

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(addUser(createUser));
    navigate('/')


  }


  return (

    <div className='bg-gray-50 h-screen'>
      <h1 className='text-2xl text-center pt-10'>Create User</h1>

      <div className="flex justify-center items-center mt-10 ">
        <form action="" className='flex flex-col shadow-xl bg-white shadow-blue-300 w-96 rounded-md px-10 py-10 space-y-2' onSubmit={submitHandle}>

          <label htmlFor="" className=' text-gray-800'>Username</label>
          {/* username  */}
          <input type="text" placeholder='Enter username' className='rounded-md w-80 px-5 py-2 outline-none border  ' autoComplete='off' required name='username' value={createUser.username} onChange={inputChangeHandle} />

          {/* email  */}
          <label htmlFor="" className=' text-gray-800'>Email</label>
          <input type="email" placeholder='Enter email' className='rounded-md w-80 px-5 py-2 outline-none  border' autoComplete='off' required name='email' value={createUser.email} onChange={inputChangeHandle} />

          {/* age  */}
          <label htmlFor="" className=' text-gray-800'>Age</label>
          <input type="number" placeholder='Enter Age' className='rounded-md w-80 px-5 py-2 outline-none border' autoComplete='off' required name='age' value={createUser.age} onChange={inputChangeHandle} />

          <label htmlFor="" className=' text-gray-800' >Gender</label>

          {/* gender */}
          <div className="flex space-x-1">
            <input type="radio" name='gender' value='male' required onChange={inputChangeHandle} />
            <label htmlFor="">Male</label>

            <input type="radio" name='gender' value='female' required onChange={inputChangeHandle} />
            <label htmlFor="">Female</label>
          </div>

          {/* terms & conditions */}
          <div className="flex items-center  space-x-2 mt-5">
            <input type="checkbox" required />
            <span>I have read terms & conditions</span>
          </div>

          <button className='rounded-md w-80 py-2 bg-blue-800 text-white'>Create</button>

        </form>
      </div>
    </div>
  )
}

export default CreateUser
