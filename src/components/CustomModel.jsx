import React from 'react'
import { useSelector } from 'react-redux';

const CustomModel = ({ setPopUp, id, popUp }) => {

    const users = useSelector((state) => state.app.users);
    const filterUser = users.filter((val) => val.id === id);



    return (

        <>
            <div className="w-full mt-40 flex justify-center items-center">
                <div className="w-96 py-10 rounded-md shadow-2xl">

                    <button className='bg-red-600 text-white rounded-md px-2 py-1 float-right mr-2' onClick={() => { setPopUp(false) }}>Close</button>

                    <div className="flex flex-col items-center justify-center w-full space-y-3">
                        <span>Name :{filterUser[0].username}</span>
                        <span>Email : {filterUser[0].email}</span>
                        <span>Age : {filterUser[0].age}</span>
                        <span>Gender : {filterUser[0].gender}</span>


                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomModel;
