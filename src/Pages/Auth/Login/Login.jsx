function Login() {
    return (
        <form className="Login">
            {/* Form Header */}
            <header className="form_Header">
                <h2 className="form_Heading"><span>L</span>ogin<span>.</span></h2>
            </header>

            <p>"<span className="indicate-required">*</span>" indicates "required"</p>

            {/* Form */}
            <section className="form_Section">
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
                <button type="submit" className='submit_Button'>Log In!</button>
            </section>

            {/* Form Footer */}
            <footer className="form_Footer">
                <div className="demo-account_Container">
                    <h3>Demo Accounts</h3>
                    <button type="submit" className="demo-account_Button btn">Standard</button>
                    <button type="submit" className="demo-account_Button btn">Business</button>
                </div>

                <p>Application built by: <a className='link' href="https://www.linkedin.com/in/alexball03/" rel="noreferrer" target="_blank">Alex ball</a></p>
            </footer>
        </form>
    );
}

export default Login;