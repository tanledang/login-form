import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        credentials: {
            huxley: {
              password: 's3kr3t'
            }
          },
        username: '',
        password: '',
        serverResponse: null
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setServerResponse: (state, action) => {
            state.serverResponse = action.payload
        },
        toggleServerResponseValid: (state) => {
            state.serverReseponse.isValid = !state.serverReseponse.isValid
        },
        setServerResponseMessage: (state, action) => {
            state.serverReseponse.message = action.payload
        }
    }
})

export const { setUsername, setPassword, setServerResponse, toggleServerResponseValid, setServerResponseMessage} = loginSlice.actions;

export default loginSlice.reducer;

