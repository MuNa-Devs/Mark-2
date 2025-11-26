// Need to complete it (add backend communication)

// import Logo from '../reusable_elements/Logo'
import styles from './signin_page.module.css';
import WarningDiv from '../../reusable_components/WarningDiv';
import { serverurl } from '../../../handlings/LocalConstants';

// For global values from context provider
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignInPage(){
    
    // Variables to handle login status (from context provider)
    const {is_logged_in, setLogin, setLogOut} = useContext(AuthContext);

    const navigate = useNavigate();
    const [isLoginTriggered, setLoginStatus] = useState(false);
    const [login_error, setLoginErr] = useState(false);

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const handleInputUpdates = e => setInput({
            ...input, [e.target.name]: e.target.value
    });

    const [input_err_status, setInputErrStatus] = useState({
        email: false,
        password: false
    });

    const loginTriggered = () => {
        const temp_input_err_status = {
            email: ! input.email,
            password: ! input.password
        };

        const start = Date.now();
        setInputErrStatus(temp_input_err_status);

        if (Object.values(temp_input_err_status).includes(true)) return;

        setLoginStatus(true);
        axios.post(serverurl + "/login",
            input,
            {timeout: 3000}
        )
        .then((res) => {
            const data = res.data;
            const end = Date.now();

            console.log(
                "Server response on '" + data.request + "':" +
                "\nMethod: " + data.method +
                "\nStatus: " + res.status +
                "\nTime taken: " + (end - start) + "ms",
            );

            if (data.condition){
                setLogin();
                navigate("/dashboard");
            }

            else{
                setLoginErr(data.reason);
                console.log("\nReason: " + data.reason);
            }

            setLoginStatus(false);
        })
        .catch(err => {
            if (err === "ECONNABORTED") setLoginErr("Request timed out!");
            else{
                setLoginErr("unknown");
                console.log(
                    "\nReason: " + "unknown" +
                    "\nerr: " + err
                );
                setLoginStatus(false);
            }
        })
    }

    return (
        <div className={styles.signinBody}>
            <div className={styles.headerTexts}>
                <div className="logo">
                    <h1 className={styles.title}>Mark 2</h1>
                </div>

                <h2 className={styles.greetings}>Welcome Back!</h2>

                <p>Login to your Mark account</p>
            </div>

            <div className={styles.signinCard}>
                <div className={styles.email}>
                    <h5>Email</h5>

                    <input className={styles.text}
                        type="email" 
                        placeholder='Enter your email address'
                        name='email'
                        value={input.email}
                        onChange={handleInputUpdates}
                        style={{outline: input_err_status.email && "1px solid red"}}
                    />
                </div>

                <div className={styles.pswd}>
                    <h5>Password</h5>

                    <input className={styles.text}
                        type="password"
                        placeholder='Enter your password' 
                        name='password'
                        value={input.password}
                        onChange={handleInputUpdates}
                        style={{outline: input_err_status.password && "1px solid red"}}
                    />
                </div>

                <div className={styles.utils}>
                    <div className={styles.rememberMeDude}>
                        <label>
                            <input type="checkbox" />
                            <h5>Remember me</h5>
                        </label>
                    </div>

                    <a href="#" className={styles.forgotpswd}><p>Forgot Password?</p></a>
                </div>

                {
                    Object.values(input_err_status).includes(true) && <WarningDiv warning_text='All fields are required!' /> ||
                    login_error === "invalid data" && <WarningDiv warning_text="Invalid data" /> ||
                    login_error === "incorrect password" && <WarningDiv warning_text='Incorrect credentials' /> ||
                    login_error === "user not found" && <WarningDiv warning_text="Account doesn't exist!" /> ||
                    login_error === "unknown" && <WarningDiv />
                }

                <button
                    className={styles.loginBtn}
                    onClick={loginTriggered}
                    disabled={isLoginTriggered}
                >{isLoginTriggered ? "Processing..." : "Login"}</button>
            </div>

            <div className={styles.signupoption}>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
    );
}

export default SignInPage;