import "./App.css";
import Home from "./views/Home/Home";
import NavBar from "./Components/Navbar/NavBar";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import { Routes, Route } from "react-router-dom";
import Schedule from "./views/Schedule/Schedule";

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path='/appointment' element={<MisTurnos />}/>
          <Route path='/appointment/schedule' element={<Schedule />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
