import {React, useState} from 'react';

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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [serverResponse, setServerResponse] = useState(null);

    const submitForm = event => {
        event.preventDefault();
        const serverResponse = handleSubmit(username, password);
        setServerResponse(serverResponse)
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
                        setUsername(event.target.value)
                        setServerResponse(null)
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
                        setPassword(event.target.value)
                        setServerResponse(null)
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