import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import SobreMi from './pages/SobreMi'
import Trayectoria from './pages/Trayectoria'
import Superacion from './pages/Superacion'
import Form from './pages/Form'

// mirar como hacer un scroll en la que vamos a acceder a la pagina principal
function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route path="/SobreMi" element={<SobreMi/>} />
        <Route path="/Trayectoria" element={<Trayectoria />} />
        <Route path="/Superacion" element={<Superacion />} />
        <Route path='/Form' element={<Form/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

  )
}

export default App
