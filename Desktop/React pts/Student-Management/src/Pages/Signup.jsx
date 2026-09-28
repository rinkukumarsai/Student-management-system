import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    function handleSignup(e) {
        e.preventDefault();

        // Empty field check
        if (
            username === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            alert("Please fill all fields");
            return;
        }

        // Password length
        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        // Password match
        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match");
            return;
        }

        // User object
        const user = {
            username: username,
            password: password
        };

        // Save user
        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );

        alert("Signup successful");

        // Login page par bhejo
        navigate("/login");
    }

    return (
        <div className="signup-page">

            <div className="signup-card">

                <h2>Signup</h2>

                <form
                    className="signup-form"
                    onSubmit={handleSignup}
                >

                    <input
                        type="text"
                        placeholder="Enter Username"
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

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                    />

                    <button type="submit">
                        Signup
                    </button>

                    <p>
                        Already have an account?{" "}
                        <span
                            onClick={() => navigate("/login")}
                            style={{ cursor: "pointer" }}
                        >
                            Login
                        </span>
                    </p>

                </form>

            </div>

        </div>
    );
}

export default Signup;

