import React from "react";
import { useState } from "react";

export function FormComponent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleValidation = (e) => {
        e.preventDefault(); //preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
        console.log(firstName + " " + lastName + " " + email);
        if(firstName.length == 0 || lastName.length == 0 || email.length == 0 || password.length == 0) {
            setError(true)
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
                      placeholder={error ? " " : "First Name" }
                      style= {{ background: error ? `url('/static/media/icon-error.b72f792e9c900128f5c8.svg') 90% center no-repeat` : "none",
                                border: error ? "2px solid hsl(0deg 100% 74% / 67%)" : "1px solid var(--netural-color-grayish-blue)"
                             }}/>
            </p>
            {error ? <span className="error">First Name cannot be empty</span> : " "}       
            <p>
                <input 
                       onChange={(e) => setLastName(e.target.value)} 
                       type="text" 
                       placeholder={error ? " " : "Last Name"} 
                       style= {{ background: error ? `url('/static/media/icon-error.b72f792e9c900128f5c8.svg') 90% center no-repeat` : "none",
                                 border: error ? "2px solid hsl(0deg 100% 74% / 67%)" : "1px solid var(--netural-color-grayish-blue)"
                       }}/>
            </p>
            {error ? <span className="error">Last Name cannot be empty</span> : " "}
            <p>
                <input 
                       onChange={(e) => setEmail(e.target.value)} 
                       id = "email"
                       type="email" 
                       placeholder= {error ? " " : "Email Address"}
                       style= {{ background: error ? `url('/static/media/icon-error.b72f792e9c900128f5c8.svg') 90% center no-repeat` : "none",
                                 border: error ? "2px solid hsl(0deg 100% 74% / 67%)" : "1px solid var(--netural-color-grayish-blue)",
                                 color: email ? "var(--primary-color-red)" : "black"
                       }}/>
            </p>
            {error ? <span className="error">Looks like this is not an email</span> : " "}
            <p>
                <input 
                       onChange={(e) => setPassword(e.target.value)} 
                       type="password" 
                       placeholder={error ? " " : "Password"}
                       style= {{ background: error ? `url('/static/media/icon-error.b72f792e9c900128f5c8.svg') 90% center no-repeat` : "none",
                                border: error ? "2px solid hsl(0deg 100% 74% / 67%)" : "1px solid var(--netural-color-grayish-blue)"
                              }}/>
            </p>
            {error ? <span className="error">Password cannot be empty</span> : " "}
            <button className="signup-form-button">CLAIM YOUR FREE TRAIL</button>
            </form>
            <p className="signup-form-footer">By clicking the button, you are agreeing to our <span style={{ color: 'hsl(0, 100%, 74%)', fontWeight: 700 }}>Terms and Services</span></p>
            </div>
        </div>
    );
}