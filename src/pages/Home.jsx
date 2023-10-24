import React, { useEffect, useState } from 'react';
import { deleteUser, getUser } from '../features/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import CustomModel from '../components/CustomModel';




const Home = () => {

    const dispatch = useDispatch();

    const { loading, users } = useSelector((state) => state.app);

    const [id, setId] = useState();
    const [popUp, setPopUp] = useState(false);



    useEffect(() => {
        dispatch(getUser());
    }, []);


    if (loading === true) {
        return (
            <h1 className='text-center mt-10'>Loading ....</h1>
        )
    };



    return (

        <>
            {popUp === true ? <CustomModel setPopUp={setPopUp} id={id} popUp={popUp} /> :
                <div className="flex my-10 px-10 flex-wrap">
                    {users && users.map((val) => {
                        return (
                            <div className="shadow-2xl border mx-2 flex px-4 py-2 my-5 rounded-md flex-col" key={val.id} >
                                <span>Username : {val.username}</span>
                                <span>Email : {val.email}</span>
                                <span>Age : {val.age}</span>
                                <span>Gender:  {val.gender}</span>

                                <div className="flex space-x-3 my-4">
                                    <button className='bg-yellow-700 text-white py-1 px-2 rounded-md'
                                        onClick={() => {
                                            setId(val.id);
                                            setPopUp(true);
                                        }}
                                    >View</button>
                                    <button className='bg-red-700 text-white py-1 px-2 rounded-md' onClick={() => dispatch(deleteUser(val.id))}>Delete</button >
                                    <button className='bg-green-700 text-white py-1 px-5 rounded-md'>Edit</button>
                                </div>

                            </div>
                        )
                    })}


                </div>
            }
        </>
    )
}

export default Home
