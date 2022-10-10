import "./Auth.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// Pages
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

function Auth() {
    return (
        <Router>
            <div className="Auth">
                <header className="auth_Header">
                    <a href="/"><h1><span>Project</span>Manager<span>.</span></h1></a>
                </header>

                <main className="auth_Main">
                    <Routes>
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default Auth;