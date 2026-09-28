import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
    const navigate = useNavigate();

    return (
        <div className="about-page">

            <div className="about-container">

                <h1>About Student Management System</h1>

                <p className="about-intro">
                    Student Management System is a simple and user-friendly
                    application designed to manage student information easily.
                </p>

                <div className="about-features">

                    <div className="feature-card">
                        <h2>👨‍🎓 Student Management</h2>
                        <p>
                            Easily view and manage student information
                            in one place.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h2>➕ Add Student</h2>
                        <p>
                            Add new students with their basic information
                            such as name, email, age and course.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h2>✏️ Edit Student</h2>
                        <p>
                            Update student information whenever required.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h2>🗑️ Delete Student</h2>
                        <p>
                            Remove students that are no longer required
                            from the student list.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h2>🔍 Search Student</h2>
                        <p>
                            Quickly find a student using the search feature.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h2>📋 Student Details</h2>
                        <p>
                            View complete details of an individual student.
                        </p>
                    </div>

                </div>
                <div className="about-overview">

                    <h2>About This Project</h2>

                    <p>
                        This Student Management System is built to make student
                        information easy to manage. Users can add, view, edit,
                        search and delete student records through a simple interface.
                    </p>

                </div>

                <div className="technologies">

                    <h2>Technologies Used</h2>

                    <div className="tech-list">

                        <span>React.js</span>
                        <span>React Router</span>
                        <span>JavaScript</span>
                        <span>CSS</span>
                        <span>LocalStorage</span>
                        <span>REST API</span>

                    </div>

                </div>

                <div className="developer-section">

                    <h2>Developer</h2>

                    <div className="developer-card">

                        <div className="developer-icon">
                            👨‍💻
                        </div>

                        <div className="developer-info">
                            <h3>Rinku Kumar Saini</h3>

                            <p>
                                React Developer
                            </p>

                            <p>
                                This project is created to practice React.js,
                                React Router, API integration, LocalStorage
                                and CRUD operations.
                            </p>
                        </div>

                    </div>

                </div>

                <div className="project-stats">

                    <h2>Project Statistics</h2>

                    <div className="stats-container">

                        <div className="stat-card">
                            <h3>6+</h3>
                            <p>Features</p>
                        </div>

                        <div className="stat-card">
                            <h3>4</h3>
                            <p>CRUD Operations</p>
                        </div>

                        <div className="stat-card">
                            <h3>6</h3>
                            <p>Technologies</p>
                        </div>

                        <div className="stat-card">
                            <h3>4+</h3>
                            <p>Pages</p>
                        </div>

                    </div>

                </div>

                <button
                    className="about-students-btn"
                    onClick={() => navigate("/students")}
                >
                    Go to Students
                </button>

            </div>

            <footer className="about-footer">

    <p>
        © 2026 Student Management System
    </p>

    <div className="footer-links">
        <button onClick={() => navigate("/")}>
            Home
        </button>

        <button onClick={() => navigate("/students")}>
            Students
        </button>

        <button onClick={() => navigate("/about")}>
            About
        </button>
    </div>

</footer>

        </div>
    );
}

export default About;