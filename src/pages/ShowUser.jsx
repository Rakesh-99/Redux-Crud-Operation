import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, getAllUser } from '../features/userSlice';
import CustomModel from '../components/CustomModel';
import { Link } from 'react-router-dom';




const ShowUser = () => {

    const [userId, setUserId] = useState();
    const [showPopUp, setShowPopUp] = useState(false);

    const dispatch = useDispatch();

    const { loading, users } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(getAllUser());
    }, []);




    return (


        <>

            {showPopUp === true ? <CustomModel id={userId} setShowPopUp={setShowPopUp} /> :


                <div className="flex flex-wrap px-10 py-10">
                    {users && users.map((element) => {
                        return (

                            <div className="w-80 shadow-xl rounded-md py-2 px-5 my-4" key={element.id} >

                                <div className="">
                                    {loading === true ? <h1 className='text-xl'>Loading data...</h1> :
                                        <p className='my-1'> <span className='font-semibold mr-5'>Username :</span>{element?.username}</p>
                                    }
                                </div>


                                <div className="">
                                    {loading === true ? <h1 className='text-xl'>Loading data...</h1> :

                                        <p className='my-1'> <span className='font-semibold mr-5'>Email :</span>{element?.email}</p>
                                    }
                                </div>

                                <div className="">
                                    {loading === true ? <h1 className='text-xl'>Loading data...</h1> :

                                        <p className='my-1'> <span className='font-semibold mr-5'>Age :</span>{element?.age}</p>
                                    }
                                </div>

                                <div className="">
                                    {loading === true ? <h1 className='text-xl'>Loading data...</h1> :

                                        <p className='my-1'> <span className='font-semibold mr-5'>Gender :</span>{element?.gender}</p>
                                    }
                                </div>

                                <div className="flex justify-around mt-5">
                                    <button className='py-1 px-5 rounded-md text-white bg-indigo-700' onClick={() => [setUserId(element.id), setShowPopUp(true)]}>view</button>
                                    <Link to={`/update/${element.id}`} className='py-1 px-5 rounded-md text-white bg-green-700' >Update</Link>
                                    <button className='py-1 px-5 rounded-md text-white bg-red-700' onClick={() => dispatch(deleteUser(element.id))}>Delete</button>
                                </div>
                            </div>


                        )
                    })}

                </div>

            }

        </>

    )
}

export default ShowUser
