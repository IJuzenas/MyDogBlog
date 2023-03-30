import {Route, Routes} from "react-router-dom";
import Signup from "../pages/SignUp.js"
import Login from "../pages/Login";
import Users from "../Users/Users";
import Main from "../pages/Main";
import About from "../pages/About";
import User from "../Users/User";
import ElementsPreview from "../Elements/ElementsPreview";
import CreateElement from "../Elements/CreateElement";


const Pages = () => (
    <Routes>
        <Route path="/users" element={<Users/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/users/:id" element={<User/>}/>
        <Route path="/elementsPreview" element={<ElementsPreview/>}/>


    </Routes>
)

export default Pages