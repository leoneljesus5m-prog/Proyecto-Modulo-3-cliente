import './App.css'
import Home from './views/Home/Home'
import NavBar from './Components/Navbar/NavBar'
import MisTurnos from './views/MisTurnos/MisTurnos'

const App = () => {
  return (
    <div>
      <NavBar />
      <MisTurnos />
      {/* <Home /> */}
    </div>
  )
}

export default App

