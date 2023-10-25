import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';




// Get User :
export const getAllUser = createAsyncThunk('getAllUser', async () => {

    try {
        const getUser = await fetch('https://653390f2d80bd20280f695d8.mockapi.io/crud', {
            method: 'GET'
        });
        const response = await getUser.json();
        return response;
    } catch (error) {
        return error;
    }

});
// Add User 
export const addUser = createAsyncThunk('addUser', async (data, { rejectWithValue }) => {

    try {
        const addUserData = await fetch(`https://653390f2d80bd20280f695d8.mockapi.io/crud`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const response = await addUserData.json();
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Delete User :

export const deleteUser = createAsyncThunk('deleteUser', async (id, { rejectWithValue }) => {

    try {
        const deleteUserData = await fetch(`https://653390f2d80bd20280f695d8.mockapi.io/crud/${id}`, {
            method: 'DELETE'
        })
        const response = await deleteUserData.json();
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const updateUser = createAsyncThunk('updateUser', async (data, { rejectWithValue }) => {

    try {
        const updateUserData = await fetch(`https://653390f2d80bd20280f695d8.mockapi.io/crud/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const response = await updateUserData.json();
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});



const userSlice = createSlice({

    name: 'app',
    initialState: {
        loading: false,
        users: [],
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [getAllUser.pending]: (state) => {
            state.loading = true
        },
        [getAllUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [getAllUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [addUser.pending]: (state) => {
            state.loading = true
        },
        [addUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        },
        [addUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [deleteUser.pending]: (state) => {
            state.loading = true
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = state.users.filter((ele) => {
                return ele.id !== action.payload.id;
            })
        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        [updateUser.pending]: (state) => {
            state.loading = true
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = state.users.map((ele) => ele.id === action.payload.id ? action.payload : ele);


        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
});

export default userSlice.reducer;