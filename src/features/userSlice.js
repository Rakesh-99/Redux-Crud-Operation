import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const getUser = createAsyncThunk('getUser', async () => {

    const get = await fetch('https://653390f2d80bd20280f695d8.mockapi.io/crud')
    const response = await get.json();
    return response
});

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
        }
    }

});

export default userSlice.reducer;