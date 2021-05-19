import React, { useState } from 'react';

import LoginForm from './LoginForm';

const Login = () => {

    const [loginState, setLoginState] = useState({ passwordState: false });

    const changePassHandler = () => {
        setLoginState({ ...loginState, passwordState: !loginState.passwordState })
    }

    return (
        <LoginForm
            changePassHandler={changePassHandler}
        />
    )
}

export default Login;