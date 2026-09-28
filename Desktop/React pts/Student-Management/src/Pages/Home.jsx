import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "./Home.css";

function Home() {

    const navigate = useNavigate();

    const { isLogin } = useContext(AuthContext);

    return (
        <div className="home-page">

            <div className="home-content">

                <h1>Student Management System</h1>

                <p>
                    Manage students easily, view student details,
                    add new students and update their information.
                </p>

                <div className="home-buttons">

                    {isLogin ? (
                        <button
                            onClick={() => navigate("/students")}
                        >
                            View Students
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </button>

                            <button
                                onClick={() => navigate("/signup")}
                            >
                                Signup
                            </button>
                        </>
                    )}

                </div>

            </div>

        </div>
    );
}

export default Home;