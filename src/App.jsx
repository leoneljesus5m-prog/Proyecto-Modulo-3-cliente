import './App.css'
import Home from './views/Home/Home'
import NavBar from './Components/Navbar/NavBar'
import MisTurnos from './views/MisTurnos/MisTurnos'
import Register from './views/Register/Register'

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <MisTurnos /> */}
      {/* <Home /> */}
      <Register />
    </div>
  )
}

export default App

