import React from "react";

export function FormComponent() {
    return(
        <div className="signup-form">
            <form>
                <p><input type="text" placeholder="First Name" /></p>
                <p><input type="text" placeholder="Last Name"/></p>
                <p><input type="email" placeholder="Email Address"/></p>
                <p><input type="password" placeholder="Password"/></p>
                <button>CLAIM YOUR FREE TRAIL</button>
            </form>
            <p className="signup-form-footer">By clicking the button, you are agreeing to our Terms and Services</p>
        </div>
    );
}