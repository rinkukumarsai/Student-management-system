import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Students from "./Pages/Students";
import AddStudent from "./Pages/AddStudent";
import Navbar from "./Component/Navbar";
import StudentDetails from "./Pages/StudentDetails";
import ProtectedRoute from "./Component/ProtectedRoute";
import Login from "./Pages/Login";
import EditStudent from "./Pages/EditStudent";
import DeleteStudent from "./Pages/DeleteStudent";
import Signup from "/src/Pages/Signup";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="/students" element={
          <ProtectedRoute>
            <Students />
          </ProtectedRoute>
        }
        />
        <Route path="/student/:id" element={
          <ProtectedRoute>
            <StudentDetails />
          </ProtectedRoute>
        }
        />
        <Route path="/addstudent" element={
          <ProtectedRoute>
            <AddStudent />
          </ProtectedRoute>
        }
        />

        <Route path="student/:id/edit" element={
          <ProtectedRoute>
            <EditStudent />
          </ProtectedRoute>
        } />

        <Route
          path="/student/:id/delete"
          element={
            <ProtectedRoute>
              <DeleteStudent />
            </ProtectedRoute>

          } />
      </Routes>


    </>
  )
}
export default App;