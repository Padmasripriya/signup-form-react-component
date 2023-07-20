import React from "react";
import { useState } from "react";

export function FormComponent() {
    const [error, setError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleValidation() {
        if(firstName.length == 0 && lastName.length == 0 && email.length == 0 && password.length == 0){
            setError(true)
        }
    }
    return(
        <div>
            <p className="signup-form-offer-desktop"><strong>Try it for free 7 days</strong> then $20/mo. thereafter</p>
            <div className="signup-form">
            <form>
            <p><input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" /></p>
                {error && <span className="error">First Name cannot be empty</span>}
                <p><input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" /></p>
                {error && <span className="error">Last Name cannot be empty</span>}
                <p><input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" /></p>
                {error && <span className="error">Looks like this is not an email</span>}
                <p><input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" /></p>
                {error || <span className="error">Password cannot be empty</span>}
                <button onClick={handleValidation} className="signup-form-button">CLAIM YOUR FREE TRAIL</button>
            </form>
            <p className="signup-form-footer">By clicking the button, you are agreeing to our <span style={{ color: 'hsl(0, 100%, 74%)', fontWeight: 700 }}>Terms and Services</span></p>
            </div>
        </div>
    );
}