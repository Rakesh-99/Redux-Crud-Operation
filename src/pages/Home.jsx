import React, { useEffect } from 'react';
import { getUser } from '../features/userSlice';
import { useSelector, useDispatch } from 'react-redux';




const Home = () => {

    const dispatch = useDispatch();

    const userData = useSelector((state) => {
        return state.app.users;
    })

    useEffect(() => {
        dispatch(getUser(userData));
    }, [])

    return (

        <>
            <div className="flex my-10 flex-wrap">
                {userData && userData.map((val) => {
                    return (
                        <div className="shadow-2xl border mx-2 flex px-4 py-2 my-5 rounded-md flex-col" key={val.id} >
                            <span>Username : {val.username}</span>
                            <span>Email : {val.email}</span>
                            <span>Age : {val.age}</span>
                            <span>Gender:  {val.gender}</span>

                            <div className="flex space-x-3 my-4">
                                <button className='bg-red-700 text-white py-1 px-2 rounded-md'>Delete</button>
                                <button className='bg-green-700 text-white py-1 px-5 rounded-md'>Edit</button>
                            </div>

                        </div>
                    )
                })}


            </div>
        </>
    )
}

export default Home
