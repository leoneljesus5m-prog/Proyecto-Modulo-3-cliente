import './App.css'
import Home from './views/Home/Home'
import NavBar from './Components/Navbar/NavBar'
import MisTurnos from './views/MisTurnos/MisTurnos'
import Register from './views/Register/Register'
import Login from './views/Login/Login'

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <MisTurnos /> */}
      {/* <Home /> */}
      {/* <Register /> */}
      <Login />
    </div>
  )
}

export default App

