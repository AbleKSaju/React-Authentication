import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null
}

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials:(state,action)=>{
            console.log(action.payload,'payload');
            state.userInfo = action.payload;
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
        },
        logout:(state,action)=>{
            state.userInfo = null;
            localStorage.removeItem('userInfo')
        }
    }
})

export const {setCredentials,logout} = AuthSlice.actions;
export default AuthSlice.reducer;