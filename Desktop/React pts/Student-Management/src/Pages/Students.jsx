import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Students.css";

function Students() {

    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const fetchStudent = async () => {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const apiStudents = await response.json();

        const localStudents =
            JSON.parse(localStorage.getItem("students")) || [];

        // API students + LocalStorage students
        // Same ID hone par localStorage wala student rahega
        const studentMap = new Map();

        apiStudents.forEach((student) => {
            studentMap.set(student.id, student);
        });

        localStudents.forEach((student) => {
            studentMap.set(student.id, student);
        });

        setStudents(Array.from(studentMap.values()));
    };

    useEffect(() => {
        fetchStudent();
    }, []);

    function goToDetails(id) {
        navigate(`/student/${id}`);
    }

    const filteredStudents = students.filter((student) =>
        (student.name || "")
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <>
            <input
                type="text"
                placeholder="Search Student..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <h1>hello students</h1>

            <div className="student-container">

                {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (

                        <div
                            className="student-card"
                            key={student.id}
                        >
                            <h4>{student.name}</h4>

                            <h6>{student.email}</h6>

                            <h6>
                                {student.address?.city || "N/A"}
                            </h6>

                            <button
                                onClick={() =>
                                    goToDetails(student.id)
                                }
                            >
                                goToDetails
                            </button>

                        </div>

                    ))
                ) : (
                    <h2>Student Not Found</h2>
                )}

            </div>
        </>
    );
}

export default Students;