import React, { useState } from 'react';

const AdminSignup = () => {

    const [firstName, setFirstName]= useState('');
    const [firstNameTouched, setFirstNameTouched] = useState(false);

    const [lastName, setLastName]= useState('');
    const [lastNameTouched, setLastNameTouched] = useState(false);

    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);   

    const firstNameIsValid =firstName.trim() !=='';
    const firstNameInputIsvalid = !firstNameIsValid && firstNameTouched;

    const lastNameIsValid =lastName.trim() !=='';
    const lastNameInputIsvalid = !lastNameIsValid && lastNameTouched;

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredEmailIsValid = enteredEmail.includes('@');
    const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const firstNameHandler = (e)=>{
        setFirstName(e.target.value)
    }

    const lastNameHandler = (e)=>{
        setLastName(e.target.value)
    }

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };
    const firstNameInputBlurHandler = (e)=>{
        setFirstNameTouched(true);
    }

    const lastNameInputBlurHandler = (e)=>{
        setLastNameTouched(true);
    }

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);
    };

    const emailInputBlurHandler = (event) => {
        setEnteredEmailTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredEmail);
        console.log(enteredName);

        // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
        setEnteredName('');
        setEnteredNameTouched(false);

        setFirstNameTouched('');
        setFirstNameTouched(false);

        setLastNameTouched('');
        setLastNameTouched(false);

        setEnteredEmail('');
        setEnteredEmailTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClasses = enteredEmailIsInvalid
        ? 'form-control invalid'
        : 'form-control';
    
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={emailInputClasses}>
                <label htmlFor='email'>First Name</label>
                <input
                    type='text'
                    id='fname'
                    onChange={firstNameHandler}
                    onBlur={firstNameInputBlurHandler}
                    value={firstName}
                />
                {firstNameInputIsvalid && (
                    <p className='error-text'>Please enter a valid name.</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Last Name</label>
                <input
                    type='text'
                    id='fname'
                    onChange={lastNameHandler}
                    onBlur={lastNameInputBlurHandler}
                    value={lastName}
                />
                {lastNameInputIsvalid && (
                    <p className='error-text'>Please enter a valid name.</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Email</label>
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
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && (
                    <p className='error-text'>Enter your Password</p>
                )}
            </div>

            <div className='form-actions'>
                <button disabled={!formIsValid}>Sign Up</button>
            </div>
        </form>
    )
}

export default AdminSignup;