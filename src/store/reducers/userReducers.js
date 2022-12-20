import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk('users', async ()=>{
    //users/pending
    //users/fulfilled
    //users/rejected --> three types of request status that we may get
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
})
const initialState = {
    users: [],
    usersContainer: [],
    employees: [],
    loading: false,
    errors: {}
}
const userReducers = createSlice({
    name: "users",
    initialState,
    reducers: {
        filteredUser: (state, action) => {
            state.users = state.usersContainer.filter(user=>
                user.name.toLowerCase().includes(action.payload));
        }
    },
    extraReducers: {
        [getUsers.pending]: (state)=>{
            state.loading = true;
            console.log('pending');
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = [...state.users, ...action.payload];
            state.usersContainer = action.payload;
            console.log('fulfilled');
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false;
            state.errors = action.payload
            console.log('rejected');
        }
    }
});

export const {filteredUser} = userReducers.actions;
export default userReducers.reducer;