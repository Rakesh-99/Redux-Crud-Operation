import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const { users } = useSelector((state) => state.app);


    return (



        <>
            <div className="shadow-xl shadow-blue-100 py-4 px-5 w-full flex justify-around">
                <Link to={'/'} className='font-semibold'>Users [{users && users.length}]</Link>
                <Link to={'/create'} className='font-semibold'>Create User</Link>
                <input type="text" name="search" placeholder='search..' className='border-gray-400 w-80 border rounded-md px-5 py-1' />
            </div>
        </>
    )
}

export default NavBar
