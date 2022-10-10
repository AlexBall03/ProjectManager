import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return (
        <div className="Login">
            <header className="login_Header">
                <a href="/"><h1><span>Project</span>Manager<span>.</span></h1></a>
            </header>

            <form className="login_Form">
                {/* Form Header */}
                <header className="form_Header">
                    <h2 className="form_Heading"><span>L</span>ogin<span>.</span></h2>
                </header>

                <p>"<span className="indicate-required">*</span>" indicates required</p>

                <hr />

                {/* Form */}
                <main className="form_Main">
                    {/* Email */}
                    <div className="email-input_Container input_Container">
                        <label htmlFor="user_Email"><span className="indicate-required">*</span>Email</label> <br />
                        <input type="email" id="user_Email" autoFocus placeholder='Your Email...' required />
                    </div>
                    
                    {/* Password */}
                    <div className="password-input_Container input_Container">
                        <label htmlFor="user_Password"><span className="indicate-required">*</span>Password</label> <br />
                        <input type="password" id="user_Password" placeholder='Your Password...' required />
                    </div>

                    {/* Submit */}
                    <button type="submit" className='submit_Button'>Log In!</button>
                </main>

                <hr />

                <footer className="form_Footer">
                    <div className="demo-account_Container">
                        <h3>Demo Accounts</h3>
                        <button type="submit" className="demo-account_Button btn">Standard</button>
                        <button type="submit" className="demo-account_Button btn">Business</button>
                    </div>

                    <p>Don't have an account? <Link className="link" to="/signup">Sign Up</Link>, <br /> or use one of the demo accounts above!</p> <br />
                    <p>Application built by: <a className='link' href="https://www.linkedin.com/in/alexball03/" rel="noreferrer" target="_blank">Alex ball</a></p>
                </footer>
            </form>
            <br />
        </div>
    );
}

export default Login;