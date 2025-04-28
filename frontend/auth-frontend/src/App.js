import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login1 from "./pages/Login/Login1";
import Courses from "./pages/Courses/Courses";
import CoursesDetail from "./pages/Courses/CoursesDetail";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="login1" element={<Login1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseID" element={<CoursesDetail />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
