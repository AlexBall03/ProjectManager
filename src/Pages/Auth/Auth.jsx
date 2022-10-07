import "./Auth.css";
import Login from "./Login/Login";
// import Signup from "./Signup/Signup";

function Auth() {
    return (
        <div className="Auth">
            <header className="auth_Header">
                <a href="/"><h1><span>Project</span>Manager<span>.</span></h1></a>
            </header>

            <main className="auth_Main">
                {/* Use React Router below! */}

                {/* Log In */}
                <Login />

                {/* Sign Up */}
                {/* <Signup /> */}
            </main>
        </div>
    );
}

export default Auth;