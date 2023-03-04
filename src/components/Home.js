import {Route, Routes} from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Main from "./Main";


const Home = () => (

    <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/main" element={<Main/>}/>
    </Routes>
)

export default Home