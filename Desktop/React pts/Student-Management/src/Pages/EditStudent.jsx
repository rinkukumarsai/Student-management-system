import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditStudent.css";

function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const studentId = Number(id);
        //localStorage students

        const localStudents =
            JSON.parse(localStorage.getItem("students")) || [];

        //chack deleted student

        const deletedStudents = JSON.parse(localStorage.getItem("deletedStudents")) || [];

        // Check deleted student
        if (deletedStudents.includes(studentId)) {

            alert("This student has been deleted.")
            navigate("/students");

            return;
        }

        // Chack localStorage student
        const localStudent = localStudents.find(
            (item) => item.id === studentId
        );

        if (localStudent) {

            setStudent({
                name: localStudent.name || "",
                email: localStudent.email || "",
                phone: localStudent.phone || ""
            });
            setLoading(false);

            return;
        }

        // Agar localStorage me nahi mila,
        // API se student fetch karo

        fetch(
            `https://jsonplaceholder.typicode.com/users/${studentId}`
        )
            .then((response) => {

                if (!response.ok) {
                    throw new Error("Student not found");
                }

                return response.json();
            })

            .then((data) => {

                setStudent({
                    name: data.name || "",
                    email: data.email || "",
                    phone: data.phone || ""
                });

                setLoading(false);
            })

            .catch((error) => {

                console.log(error);

                alert("Student not found");

                navigate("/students");
            });

    }, [id, navigate]);

    function handleChange(e) {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const studentId = Number(id);

        //localStorage students
        const students =
            JSON.parse(localStorage.getItem("students")) || [];
        //Update student
        const updatedStudent = {
            id: Number(id),
            name: student.name,
            email: student.email,
            phone: student.phone
        };
        //Check student already localStorage me hai
        const studentExists = students.some(
            (item) => item.id === Number(id)
        );

        let updatedStudents;

        if (studentExists) {
            // Existing student update
            updatedStudents = students.map((item) =>
                item.id === Number(id)
                    ? {
                        ...item,
                        name: student.name,
                        email: student.email,
                        phone: student.phone
                    }
                    : item
            );
        } else {
            // API student ko localStorage me save karo
            updatedStudents = [...students, updatedStudent];
        }
        //localStorage update
        localStorage.setItem(
            "students",
            JSON.stringify(updatedStudents)
        );

        // Agar ID deletedStudents me thi,
        // to usko remove kar do
        const deletedStudents =
            JSON.parse(localStorage.getItem("deletedStudents")) || [];

        const updatedDeletedStudents =
            deletedStudents.filter(
                (deletedId) => deletedId !== studentId
            );

        localStorage.setItem(
            "deletedStudents",
            JSON.stringify(updatedDeletedStudents)
        );

        alert("Student updated successfully");

        navigate(`/student/${id}`);
    }

    if (loading) {
        return <h2>Loading student...</h2>;
    }


    return (
        <div className="edit-student">
            <h1>Edit Student</h1>

            <form className="edit-student-form" onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                />


                <input
                    type="email"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                />


                <input
                    type="text"
                    name="phone"
                    value={student.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone"
                />

                <div className="edit-buttons">
                    <button type="submit" className="update-btn">
                        Update Student
                    </button>

                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => navigate(`/student/${id}`)}>

                        Cancel
                    </button>

                </div>

            </form>
        </div>
    );
}

export default EditStudent;