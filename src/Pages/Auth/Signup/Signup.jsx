import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
    return (
        <div className="Signup">
            <header className="signup_Header">
                <a href="/"><h1><span>Project</span>Manager<span>.</span></h1></a>
            </header>

            <form className="signup_Form">
                {/* Form Header */}
                <header className="form_Header">
                    <h2 className="form_Heading"><span>S</span>ignup<span>.</span></h2>
                </header>

                <p>"<span className="indicate-required">*</span>" indicates required</p>

                <hr />

                {/* Form */}
                <main className="form_Main">
                    {/* First Name */}
                    <div className="email-input_Container input_Container">
                        <label htmlFor="user_FirstName"><span className="indicate-required">*</span>First Name</label> <br />
                        <input type="text" id="user_FirstName" autoFocus placeholder='Your First Name...' required />
                    </div>
                    
                    {/* Last Name */}
                    <div className="password-input_Container input_Container">
                        <label htmlFor="user_LastName"><span className="indicate-required">*</span>Last Name</label> <br />
                        <input type="text" id="user_LastName" placeholder='Your Last Name...' required />
                    </div>

                    {/* User Name */}
                    <div className="password-input_Container input_Container">
                        <label htmlFor="username"><span className="indicate-required">*</span>Username</label> <br />
                        <input type="text" id="username" placeholder='Your Username...' required />
                    </div>

                    {/* Email */}
                    <div className="password-input_Container input_Container">
                        <label htmlFor="user_Email"><span className="indicate-required">*</span>Email</label> <br />
                        <input type="email" id="user_Email" placeholder='Your Email...' required />
                    </div>

                    {/* Password */}
                    <div className="password-input_Container input_Container">
                        <label htmlFor="user_Password"><span className="indicate-required">*</span>Password</label> <br />
                        <input type="password" id="user_Password" placeholder='Your Password...' required />
                    </div>
                    
                    {/* Confirm Password */}
                    <div className="password-input_Container input_Container">
                        <label htmlFor="confirm_user_Password"><span className="indicate-required">*</span>Confirm Password</label> <br />
                        <input type="password" id="confirm_user_Password" placeholder='Confirm Your Password...' required />
                    </div>

                    {/* Submit */}
                    <button type="submit" className='submit_Button'>Log In!</button>
                </main>

                <hr />

                <footer className="form_Footer">
                    <p>Already have an account? <Link className="link" to="/login">Login</Link>!</p> <br />
                    <p>Application built by: <a className='link' href="https://www.linkedin.com/in/alexball03/" rel="noreferrer" target="_blank">Alex ball</a></p>
                </footer>
            </form>
            <br />
        </div>
    );
}

export default Signup;