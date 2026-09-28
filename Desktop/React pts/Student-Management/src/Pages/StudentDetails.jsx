import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./StudentDetails.css";

function StudentDetails() {
    const [studentDetails, setStudentDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const { id } = useParams();
    // console.log(id);
    const navigate = useNavigate();



    useEffect(() => {

        const studentId = Number(id);

        //localStorage students

        const localStudents =
            JSON.parse(localStorage.getItem("students")) || [];

        //Deleted API student
        const deletedStudnets = JSON.parse(localStorage.getItem("deletedStudents")) || [];

        //chack API student delete hua ya nahi
        if (deletedStudnets.includes(studentId)) {

            setNotFound(true);
            setLoading(false);

            return;
        }

        //localStorage me studnet chack karo

        const localStudent = localStudents.find(
            (student) => student.id === studentId
        );

        if (localStudent) {
            setStudentDetails(localStudent);
            setLoading(false);
            return;
        }
        //API se student fetch karo
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

            .then((response) => {

                if (!response.ok) {

                    throw new Error("student not found");
                }

                return response.json();
            })

            .then((data) => {
                setStudentDetails(data);
                setLoading(false);
            })
            .catch((error) => {

                console.log(error);
                setNotFound(true);
                setLoading(false);
            });

    }, [id])


    function goBack() {
        navigate("/students");
    }

    if (loading) {
        return <h2>Loading student details...</h2>
    }

    if (notFound) {
        return (
            <div className="student-details-card">
                <h2>Student Not Found</h2>

                <p>
                    This student has been deleted or does not exist.
                </p>

                <button className="go-back-btn" onClick={goBack}>
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="student-details-card">

                <h2>{studentDetails.name}</h2>

                <p><strong>Email:</strong>{studentDetails.email}</p>
                <p><strong>Address:</strong>{studentDetails.address?.city}</p>
                <p><strong>Phone:</strong>{studentDetails.phone}</p>
                <p><strong>Website:</strong>{studentDetails.website}</p>

                <div className="student-actions">

                    <button
                        className="edit-student-btn"
                        onClick={() => navigate(`/student/${id}/edit`)}
                    >
                        Edit Student
                    </button>

                    <button
                        className="delete-student-btn"
                        onClick={() => navigate(`/student/${id}/delete`)}
                    >
                        Delete Student
                    </button>

                    <button className="go-back-btn" onClick={goBack}>
                        Go Back
                    </button>

                </div>
            </div>
        </>
    );
}
export default StudentDetails;