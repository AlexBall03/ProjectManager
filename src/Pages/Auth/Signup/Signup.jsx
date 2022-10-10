import { Link } from "react-router-dom";

function Signup() {
    return (
        <form className="Signup">
            {/* Form Header */}
            <header className="form_Header">
                <h2 className="form_Heading"><span>S</span>ignup<span>.</span></h2>
            </header>

            <p>"<span className="indicate-required">*</span>" indicates required</p>

            {/* Form */}
            <section className="form_Section">
                {/* First Name */}
                <div className="email-input_Container input_Container">
                    <label htmlFor="user_Email"><span className="indicate-required">*</span>First Name</label> <br />
                    <input type="text" id="user_FirstName" autoFocus placeholder='Your First Name...' required />
                </div>
                
                {/* Last Name */}
                <div className="last-name-input_Container input_Container">
                    <label htmlFor="user_Email"><span className="indicate-required">*</span>Last Name</label> <br />
                    <input type="text" id="user_LastName" placeholder='Your Last Name...' required />
                </div>
                
                {/* Username */}
                <div className="username-input_Container input_Container">
                    <label htmlFor="username"><span className="indicate-required">*</span>Username</label> <br />
                    <input type="email" id="username" placeholder='Your Username...' required />
                </div>

                {/* Email */}
                <div className="email-input_Container input_Container">
                    <label htmlFor="user_Email"><span className="indicate-required">*</span>Email</label> <br />
                    <input type="email" id="user_Email" placeholder='Your Email...' required />
                </div>
                
                {/* Password */}
                <div className="password-input_Container input_Container">
                    <label htmlFor="user_Password"><span className="indicate-required">*</span>Password</label> <br />
                    <input type="password" id="user_Password" placeholder='Your Password...' required />
                </div>

                {/* Submit */}
                <button type="submit" className='submit_Button'>Sign Up!</button>
            </section>

            {/* Form Footer */}
            <footer className="form_Footer">
                <p>Already have an account? <Link className="link" to="/login">Log In</Link>!</p> <br />
                <p>Application built by: <a className='link' href="https://www.linkedin.com/in/alexball03/" rel="noreferrer" target="_blank">Alex ball</a></p>
            </footer>
        </form>
    );
}

export default Signup;