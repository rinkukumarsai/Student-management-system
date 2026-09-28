import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import "./Login.css";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    function handleLogin(e) {

        e.preventDefault();

        const savedUser = JSON.parse(
            localStorage.getItem("user")
        );

        // Signup nahi kiya
        if (!savedUser) {
            alert("Please signup first");
            return;
        }

        // Username + Password check
        if (
            username === savedUser.username &&
            password === savedUser.password
        ) {

            // AuthContext ka login function
            login();

            alert("Login successful");

            navigate("/students");

        } else {

            alert("Invalid username or password");

        }
    }

    return (
        <div className="login-page">

            <div className="login-card">

                <h2>Login Page</h2>

                <form
                    className="login-form"
                    onSubmit={handleLogin}
                >

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <button type="submit">
                        Login
                    </button>

                    <p>
                        Don't have an account?{" "}

                        <span
                            onClick={() =>
                                navigate("/signup")
                            }
                            style={{ cursor: "pointer" }}
                        >
                            Signup
                        </span>

                    </p>

                </form>

            </div>

        </div>
    );
}

export default Login;