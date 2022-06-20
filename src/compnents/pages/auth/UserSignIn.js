import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const UserSignIn = (props) => {

    const navigate = useNavigate();

    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredPasswordIsValid = enteredPassword.trim() !== '';
    const passwordInputIsInvalid = !enteredPasswordIsValid && enteredPasswordTouched;

    const enteredEmailIsValid = enteredEmail.includes('@');
    const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if (enteredPasswordIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const passwordInputChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const PasswordInputBlurHandler = (event) => {
        setEnteredPasswordTouched(true);
    };

    const emailInputBlurHandler = (event) => {
        setEnteredEmailTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredPasswordTouched(true);

        if (!enteredPasswordIsValid) {
            return;
        }

        console.log(enteredPassword);
        console.log(enteredEmail);

        // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
        setEnteredPassword('');
        setEnteredPasswordTouched(false);

        setEnteredEmail('');
        setEnteredEmailTouched(false);

        navigate('/userdashboard')
    };

    const nameInputClasses = passwordInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClasses = enteredEmailIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={emailInputClasses}>
                <label htmlFor='email'>E-Mail</label>
                <input
                    type='email'
                    id='email'
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {enteredEmailIsInvalid && (
                    <p className='error-text'>Please enter a valid email.</p>
                )}
            </div>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Password</label>
                <input
                    type='password'
                    id='name'
                    onChange={passwordInputChangeHandler}
                    onBlur={PasswordInputBlurHandler}
                    value={enteredPassword}
                />
                {passwordInputIsInvalid && (
                    <p className='error-text'>Enter a valid password</p>
                )}
            </div>

            <div className='form-actions'>
                <button disabled={!formIsValid}>Sign In</button>
            </div>
        </form>
    )
}

export default UserSignIn