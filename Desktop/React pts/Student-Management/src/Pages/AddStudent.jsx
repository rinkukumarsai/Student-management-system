import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddStudent.css";

function AddStudent() {

    const [student, setStudent] = useState({

        name: "",
        email: "",
        age: "",
        course: ""
    });

    const navigate = useNavigate();

    function handleChange(e) {

        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(
            student.name === "" ||
            student.email === "" ||
            student.age === "" ||
            student.course === ""
        ) {
            alert("Please fill all fields")
            return;
        }

        const students = JSON.parse(localStorage.getItem("students")) || [];
        //New student
        const newStudent ={
           id : Date.now(),
           ...student,
        };
        //Add new student
        students.push(newStudent);

    //Save students
     localStorage.setItem("students",JSON.stringify(students));
    
        alert("student added suceesfully");

        navigate("/students");
    }
    return (
        <div className="add student">
            <h1>Add Students</h1>

            <form className="student-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="enter student name"
                    value={student.name}
                    onChange={handleChange}
                />
          <br />

                <input
                 type="email"
                 name="email"
          placeholder="Enter email"
          value={student.email}
          onChange={handleChange}
        />

        <br />
       

        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={student.age}
          onChange={handleChange}
        />

        <br />
        
        <input
          type="text"
          name="course"
          placeholder="Enter course"
          value={student.course}
          onChange={handleChange}
        />

        <br />
        

        <button className="add-btn" type="submit">Add Student</button>

            </form>
        </div>
    );
}
export default AddStudent;