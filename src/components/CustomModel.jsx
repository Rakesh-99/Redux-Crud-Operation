import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const CustomModel = ({ setShowPopUp, id }) => {

    const [filterUserData, setFilterUserData] = useState();
    const { users, loading } = useSelector((state) => state.app);



    useEffect(() => {
        if (id) {
            const filterUser = users.filter((element) => element.id === id);
            setFilterUserData(filterUser[0]);
        }
    }, []);


    return (

        <>
            <div className="w-full flex items-center justify-center mt-32 transition-all">
                <div className="box shadow-2xl shadow-blue-300 rounded-md px-10  h-72 py-5 transition-all">
                    <div className="float-right">
                        <button className='bg-red-700 active:bg-red-900 text-center text-white rounded-md py-1 px-4' onClick={() => setShowPopUp(false)}>Close</button>
                    </div>
                    {loading === true ? <h1 className='text-2xl text-center mt-20'>Loading...</h1> :
                        <div className="flex flex-col mt-20 space-y-2">
                            <span>Username : {filterUserData && filterUserData.username}</span>
                            <span>Email : {filterUserData && filterUserData.email}</span>
                            <span>Age : {filterUserData && filterUserData.age}</span>
                            <span>Gender : {filterUserData && filterUserData.gender}</span>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default CustomModel
