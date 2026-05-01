import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData: null,
    userAppointments: []
}

export const userSlice = createSlice({
    name: 'userId',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        removeUserData: (state) => {
            state.userData = null;
            state.userAppointments = []
        }
    }
})

export const { setUserData, removeUserData } = userSlice.actions;
export default userSlice.reducer