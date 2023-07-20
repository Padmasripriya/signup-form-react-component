import React from "react";

export function FormComponent() {
    return(
        <div>
            <p className="signup-form-offer-desktop"><strong>Try it for free 7 days</strong> then $20/mo. thereafter</p>
            <div className="signup-form">
            <form>
                <p><input type="text" placeholder="First Name" /></p>
                <p><input type="text" placeholder="Last Name" /></p>
                <p><input type="email" placeholder="Email Address" /></p>
                <p><input type="password" placeholder="Password" /></p>
                <button className="signup-form-button">CLAIM YOUR FREE TRAIL</button>
            </form>
            <p className="signup-form-footer">By clicking the button, you are agreeing to our <span style={{ color: 'hsl(0, 100%, 74%)', fontWeight: 700 }}>Terms and Services</span></p>
            </div>
        </div>
    );
}