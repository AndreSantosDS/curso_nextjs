import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from './pages/Home/index'
import Sobre from './pages/Sobre/index'
import Contato from './pages/Contato/index'
import Erro from './pages/Erro/index'
import Produto from './pages/Produto/index'
import Header from './components/Header/index'


const Rotas = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/sobre" Component={Sobre}/>
            <Route exact path="/contato" Component={Contato}/>
            <Route path="/produto/:id" Component={Produto}/>
            <Route path="*" Component={Erro}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas