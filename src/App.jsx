import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowUser from './pages/ShowUser';
import CreateUser from './pages/CreateUser';
import UpdateUser from './pages/UpdateUser';
import NavBar from './components/NavBar';


const App = () => {



    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ShowUser />} />
                        <Route path='/create' element={<CreateUser />} />
                        <Route path='/update/:id' element={<UpdateUser />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default App;
