import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [ errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({name: '', email: '', message: '' });
    const {name, email, message} = formState;
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        console.log('errorMessage', errorMessage);
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return(
        <section className="container">
        <h1 data-testid="h1tag">Contact me</h1>
        <form  className="mb-3" id = "contact-form" onSubmit={handleSubmit}>
            {/* name input */}
            <div>
                <label className="form-label" htmlFor="name">Name:</label>
                <input className="form-control" type="text" defaultValue={name}  onBlur={handleChange} name="name" />
            </div>
            {/* email input */}
            <div>
                <label className="form-label" htmlFor="email">Email address:</label>
                <input className="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange}/>
            </div>
            {/* message text area */}
            <div>
                <label className="form-label" htmlFor="message">Message:</label>
                <textarea className="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="5" /> 
            </div>
            { errorMessage && (
                <div> 
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
                <button className = "contact-button" data-testid="button" type="submit">Submit</button>
        </form>
    </section>
    )
}

export default ContactForm;