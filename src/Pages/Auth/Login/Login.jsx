import './Login.css';

function Login() {
    return (
        <main className="Login">
            <header className='login_Header'>
                <a className='site_Title' href="/"><h1><span>Project</span>Manager<span>.</span></h1></a>
            </header>

            <form className="login_Form">
                <h2><span>L</span>ogin<span>.</span></h2>

                <section className="inputs_Section">
                    {/* Username */}
                    <label htmlFor="user_Email">Username:</label>
                    <input type="email" id="user_Email" autoFocus placeholder='Your Email...' />

                    {/* Email */}
                    <label htmlFor="user_Password">Email:</label>
                    <input type="password" id="user_Password" placeholder='Your Password...' />

                    {/* Submit */}
                    <button type="submit" className='submit_Button'>Log In</button>
                </section>

                <footer className="form_Footer">
                    <div className="demo-accounts_Container">
                        <h3>Demo Accounts</h3>

                        <button className="demo-account-1 submit_Button" type="submit">Standard</button>
                        <button className="demo-account-2 submit_Button" type="submit">Business</button>
                    </div>

                    <p>Don't have an account? <a className='link' href="Signup">Singup</a> today! <br /> Or, choose one of the demo accounts above.</p>
                </footer>
            </form>
        </main>
    );
}

export default Login;