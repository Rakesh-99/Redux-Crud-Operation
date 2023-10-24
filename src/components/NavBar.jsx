import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const users = useSelector((val) => val.app.users);

    return (

        <>
            <nav className='py-4 px-10 shadow-2xl space-x-3'>
                <Link to={'/'} className='font-semibold text-xl'>User ({users.length})</Link>
                <Link to={'/create'} className='font-semibold text-xl'>CreateUser</Link>
            </nav>

        </>
    )
}

export default NavBar
