import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import "./Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const { isLogin, logout } = useContext(AuthContext);

    function handleLogout() {

        logout();

        alert("Logout successful");

        navigate("/login");
    }

    return (
        <nav className="navbar">

            <div className="navbar-logo">
                <NavLink to="/">
                    Student Management
                </NavLink>
            </div>

            <div className="navbar-links">

                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    About
                </NavLink>

                {isLogin ? (
                    <>
                        <NavLink
                            to="/students"
                            className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }
                        >
                            Students
                        </NavLink>

                        <NavLink
                            to="/addstudent"
                            className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }
                        >
                            Add Student
                        </NavLink>

                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }
                        >
                            Login
                        </NavLink>

                        <NavLink
                            to="/signup"
                            className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }
                        >
                            Signup
                        </NavLink>
                    </>
                )}

            </div>

        </nav>
    );
}

export default Navbar;