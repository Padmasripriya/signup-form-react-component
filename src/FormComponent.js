import React from "react";
import { useState } from "react";

export function FormComponent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    // const [error, setError] = useState(false);

    const handleValidation = (e) => {
        e.preventDefault(); //preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
        console.log(firstName + " " + lastName + " " + email);
        // if(firstName.length == 0 || lastName.length == 0 || email.length == 0 || password.length == 0) {
        //     setError(true)
        // }
        if(firstName.length == 0) {
            setFirstNameError(true)
        }
        if(lastName.length == 0) {
            setLastNameError(true)
        }
        if(email.length == 0) {
            setEmailError(true)
        }
        if(password.length == 0) {
            setPasswordError(true)
        }
    }

    return(
        <div>
            <p className="signup-form-offer-desktop"><strong>Try it for free 7 days</strong> then $20/mo. thereafter</p>
            <div className="signup-form">
            <form onSubmit={handleValidation}>
            <p>
                <input 
                      onChange={(e) => setFirstName(e.target.value)} 
                      type="text" 
                      placeholder={firstNameError ? " " : "First Name" }
                      style= {{ background: firstNameError ? `url('/static/media/icon-error.b72f792e9c900128f5c8.svg') 90% center no-repeat` : "none",
                                border: firstNameError ? "2px solid hsl(0deg 100% 74% / 67%)" : "1px solid var(--netural-color-grayish-blue)"
                              }}
                      data-testid = "first-name"/>
            </p>
            {firstNameError ? <span className="error">First Name cannot be empty</span> : " "}       
            <p>
                <input 
                       onChange={(e) => setLastName(e.target.value)} 
                       type="text" 
                       placeholder={lastNameError ? " " : "Last Name"} 
                       style= {{ background: lastNameError ? `url('/static/media/icon-error.b72f792e9c900128f5c8.svg') 90% center no-repeat` : "none",
                                 border: lastNameError ? "2px solid hsl(0deg 100% 74% / 67%)" : "1px solid var(--netural-color-grayish-blue)"
                              }}
                       data-testid = "last-name"/>
            </p>
            {lastNameError ? <span className="error">Last Name cannot be empty</span> : " "}
            <p>
                <input 
                       onChange={(e) => setEmail(e.target.value)} 
                       id = "email"
                       type="email" 
                       placeholder= {emailError ? " " : "Email Address"}
                       style= {{ background: emailError ? `url('/static/media/icon-error.b72f792e9c900128f5c8.svg') 90% center no-repeat` : "none",
                                 border: emailError ? "2px solid hsl(0deg 100% 74% / 67%)" : "1px solid var(--netural-color-grayish-blue)",
                                 color: emailError ? "var(--primary-color-red)" : "black"
                              }}
                       data-testid = "email-address"/>
            </p>
            {emailError ? <span className="error">Looks like this is not an email</span> : " "}
            <p>
                <input 
                       onChange={(e) => setPassword(e.target.value)} 
                       type="password" 
                       placeholder={passwordError ? " " : "Password"}
                       style= {{ background: passwordError ? `url('/static/media/icon-error.b72f792e9c900128f5c8.svg') 90% center no-repeat` : "none",
                                 border: passwordError ? "2px solid hsl(0deg 100% 74% / 67%)" : "1px solid var(--netural-color-grayish-blue)"
                               }}
                       data-testid = "password"/>
            </p>
            {passwordError ? <span className="error">Password cannot be empty</span> : " "}
            <button className="signup-form-button">CLAIM YOUR FREE TRAIL</button>
            </form>
            <p className="signup-form-footer">By clicking the button, you are agreeing to our <span style={{ color: 'hsl(0, 100%, 74%)', fontWeight: 700 }}>Terms and Services</span></p>
            </div>
        </div>
    );
}