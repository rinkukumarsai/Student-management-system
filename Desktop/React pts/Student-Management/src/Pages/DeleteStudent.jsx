import { useNavigate, useParams } from "react-router-dom";

function DeleteStudent() {
    const { id } = useParams();
    const navigate = useNavigate();

    function handleDelete() {
        const localStudents =
            JSON.parse(localStorage.getItem("students")) || [];

        const deletedStudents =
            JSON.parse(localStorage.getItem("deletedStudents")) || [];

        const studentId = Number(id);

        // Check karo student localStorage me hai ya nahi
        const isLocalStudent = localStudents.some(
            (student) => student.id === studentId
        );

        if (isLocalStudent) {
            // LocalStorage student delete
            const updatedStudents = localStudents.filter(
                (student) => student.id !== studentId
            );

            localStorage.setItem(
                "students",
                JSON.stringify(updatedStudents)
            );
        } else {
            // API student ko hide karne ke liye ID save karo
            if (!deletedStudents.includes(studentId)) {
                deletedStudents.push(studentId);
            }

            localStorage.setItem(
                "deletedStudents",
                JSON.stringify(deletedStudents)
            );
        }

        alert("Student deleted successfully");

        navigate("/students");
    }

    function handleCancel() {
        navigate(`/student/${id}`);
    }

    return (
        <div>
            <h1>Delete Student</h1>

            <p>
                Are you sure you want to delete this student?
            </p>

            <button onClick={handleDelete}>
                Yes, Delete
            </button>

            <button onClick={handleCancel}>
                Cancel
            </button>
        </div>
    );
}

export default DeleteStudent;