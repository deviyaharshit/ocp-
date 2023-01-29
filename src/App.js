import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Admincode from "./components/Admin/Admincode";
import Adminhome from "./components/Admin/Adminhome";
import Adminlogin from "./components/Admin/Adminlogin";
import Adminque from "./components/Admin/Adminque";
import Adminuser from "./components/Admin/Adminuser";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Question from "./components/Question";
import Questions from "./components/Questions";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/questions/:cat" element={<Questions/>}></Route>
        <Route path="/question/:que" element={<Question/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/profile" element={<Profile />}></Route>

        <Route path="/admin/login" element={<Adminlogin />}></Route>
        <Route path="/admin" element={<Adminhome />}></Route>
        <Route path="/admin/allquestion" element={<Adminque />}></Route>
        <Route path="/admin/allcode" element={<Admincode />}></Route>
        <Route path="/admin/alluser" element={<Adminuser />}></Route>
      </Routes>
    </>
  );
}

export default App;
