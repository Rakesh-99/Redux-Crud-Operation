import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';




// Get User : 
export const getUser = createAsyncThunk('getUser', async () => {
    // console.log(data);

    const get = await fetch('https://653390f2d80bd20280f695d8.mockapi.io/crud', {

        method: 'GET',
    })
    const response = await get.json();
    return response
});

// Create User : 
export const createUser = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {

    const create = await fetch('https://653390f2d80bd20280f695d8.mockapi.io/crud', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const response = await create.json();
    return response;

});

// Delete User : 
export const deleteUser = createAsyncThunk('deleteUser', async (id) => {
    const deleteUserById = await fetch(`https://653390f2d80bd20280f695d8.mockapi.io/crud/${id}`, {
        method: 'DELETE',

    })
    const response = await deleteUserById.json();
    return response;
});



const userSlice = createSlice({

    name: 'crud_app',

    initialState: {
        loading: false,
        users: [],
        error: null
    },

    reducers: {},

    extraReducers: {

        [getUser.pending]: (state) => {
            state.loading = true
        },
        [getUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload
        },
        [getUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [createUser.pending]: (state) => {
            state.loading = true;
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);

        },
        [createUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [deleteUser.pending]: (state) => {
            state.loading = true;
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = () => { }

        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }

});

export default userSlice.reducer;