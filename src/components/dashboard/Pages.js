import {Route, Routes} from "react-router-dom";
import Signup from "../pages/SignUp.js"
import Login from "../pages/Login";
import Users from "../Users/Users";
import Main from "../pages/Main";
import About from "../pages/About";
import User from "../Users/User";

const Pages = () => (
    <Routes>
        <Route path="/users" element={<Users/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/users/:id" element={<User/>}/>


    </Routes>
)

export default Pages