import {React, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setUsername, setPassword, setServerResponse } from '../features/login/loginSlice'

const LoginMessage = ({message, isValid}) => {
    if (message) {
        return (
            <h1 className={isValid ? 'success' : 'error'}>
                {message}
            </h1>
        )
    } else {
        return null;
    }
}

const LoginForm = ({handleSubmit}) => {
    const username = useSelector(state => state.login.username)
    const password = useSelector(state => state.login.password)
    const serverResponse = useSelector(state => state.login.serverResponse)
    const dispatch = useDispatch();

    const submitForm = event => {
        event.preventDefault();
        const serverResponse = handleSubmit(username, password);
        dispatch(setServerResponse(serverResponse))
        console.log(serverResponse);
    }

    return (
    <div>
        <form onSubmit={submitForm}>
            <label>
                username:
                <input
                    type="text"
                    value={username}
                    onChange={(event) => {
                        dispatch(setUsername(event.target.value))
                        dispatch(setServerResponse(null))
                        }}
                />
            </label>
            <br />
            <label>
                password:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => {
                        dispatch(setPassword(event.target.value))
                        dispatch(setServerResponse(null))
                        }}
                />
            </label>
            <br />
            <input type="submit" />
            {serverResponse && <LoginMessage {...serverResponse}/>}
        </form>
    </div>
    )
}

export default LoginForm;