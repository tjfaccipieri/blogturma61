import './App.css'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import ListaTemas from './components/temas/listaTemas/ListaTemas'
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{minHeight: '85vh'}}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cadastrarUsuario' element={<CadastroUsuario />} />
          <Route path='/temas' element={<ListaTemas />} />
          <Route path='/postagens' element={<ListaPostagens />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
