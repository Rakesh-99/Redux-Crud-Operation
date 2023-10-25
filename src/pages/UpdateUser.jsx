import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../features/userSlice';

const UpdateUser = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateUserData, setUpdateUserData] = useState({
    username: '',
    email: '',
    age: '',
    gender: ''
  });


  const { id } = useParams();
  const { loading, users } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const filterUser = users.filter(ele => ele.id === id);
      setUpdateUserData(filterUser[0]);
    }
  }, [id, users]);

  const updateChangeHandle = (e) => {
    const { name, value } = e.target;
    setUpdateUserData({ ...updateUserData, [name]: value });
  };

  const updateSubmitHandle = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateUserData));
    navigate('/');
  }


  return (

    <>
      {loading === true ? <h1 className='text-2xl text-center mt-32'>Loading data</h1> :
        <div className='bg-gray-50 h-screen'>
          <h1 className='text-2xl text-center pt-10'>Update User</h1>

          <div className="flex justify-center items-center mt-10 ">
            <form action="" className='flex flex-col shadow-xl bg-white shadow-blue-300 w-96 rounded-md px-10 py-10 space-y-2' onSubmit={updateSubmitHandle}>

              <label htmlFor="" className=' text-gray-800'>Username</label>
              {/* username  */}
              <input type="text" placeholder='Enter username' className='rounded-md w-80 px-5 py-2 outline-none border  ' autoComplete='off' required name='username' value={updateUserData && updateUserData.username} onChange={updateChangeHandle} />

              {/* email  */}
              <label htmlFor="" className=' text-gray-800'>Email</label>
              <input type="email" placeholder='Enter email' className='rounded-md w-80 px-5 py-2 outline-none  border' autoComplete='off' required name='email' value={updateUserData && updateUserData.email} onChange={updateChangeHandle} />

              {/* age  */}
              <label htmlFor="" className=' text-gray-800'>Age</label>
              <input type="number" placeholder='Enter Age' className='rounded-md w-80 px-5 py-2 outline-none border' autoComplete='off' required name='age' value={updateUserData && updateUserData.age} onChange={updateChangeHandle} />

              <label htmlFor="" className=' text-gray-800' >Gender</label>

              {/* gender */}
              <div className="flex space-x-1">
                <input type="radio" name='gender' value='male' required checked={updateUserData && updateUserData.gender === 'male'} onChange={updateChangeHandle} />
                <label htmlFor="">Male</label>

                <input type="radio" name='gender' value='female' required checked={updateUserData && updateUserData.gender === 'female'} onChange={updateChangeHandle} />
                <label htmlFor="">Female</label>
              </div>

              {/* terms & conditions */}
              <div className="flex items-center  space-x-2 mt-5">
                <input type="checkbox" required />
                <span>I have read terms & conditions</span>
              </div>

              <button className='rounded-md w-80 py-2 bg-blue-800 text-white' type='submit'>Update</button>

            </form>
          </div>
        </div>
      }
    </>
  )
}

export default UpdateUser;
