import React from "react";

export function FormComponent() {
    return(
        <div className="signup-form">
            <form>
                <p><input type="text" placeholder="First Name" required/></p>
                <p><input type="text" placeholder="Last Name" required/></p>
                <p><input type="email" placeholder="Email Address" required/></p>
                <p><input type="password" placeholder="Password" required/></p>
                <button className="signup-form-button">CLAIM YOUR FREE TRAIL</button>
            </form>
            <p className="signup-form-footer">By clicking the button, you are agreeing to our <span style={{ color: 'hsl(0, 100%, 74%)', fontWeight: 700 }}>Terms and Services</span></p>
        </div>
    );
}