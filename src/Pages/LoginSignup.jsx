import { useState } from "react"
import "./CSS/LoginSignup.css"
import { Link } from "react-router-dom";


export default function LoginSignup(props) {
    const [state, setState] = useState("Login");

    return (
        <div className="loginsignup">
            <h1>{props.cmnState}</h1>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up" ? <input name="username" type="text" placeholder="Your Name" /> :
                        <></>
                    }
                    <input name='email' type="email" placeholder="Email Address" />
                    <input name="password" type="password" placeholder="Password" />
                </div>

                <div className="loginsignup-agree">
                    <input required type="checkbox" name="" id="agree" />
                    <p required>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                <Link to={'/'}><button>Continue</button>
                </Link>
                {state === "Sign Up" ? <p className="loginsignup-login">
                    Already have an account? <Link to={'/login'}><span onClick={() => { setState("Login") }}><a >Login here</a></span></Link>
                </p> :
                    <p className="loginsignup-login">
                        Create an account?
                        <Link to={'/signup'}><span onClick={() => { setState("Sign Up") }}><a >Click here</a></span></Link>
                    </p>}
            </div>
            <br /><br />
            <br /><br />
        </div>

    )
}