import {BrowserRouter} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <SignUp/>
    </BrowserRouter>
  );
}

export default App;
