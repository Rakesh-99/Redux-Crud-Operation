import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import NavBar from './components/NavBar';



const App = () => {

    return (

        <>
            <Provider store={store}>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/create' element={<CreateUser />} />
                        <Route path='/edit' element={<EditUser />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default App
