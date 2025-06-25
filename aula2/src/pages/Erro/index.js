import {Link} from "react-router-dom"
export default function Erro() {
  return (
    <div>
        <h1>Hum, parece que essa página não existe!</h1>

        <span>Você pode estar procurando:</span><br />
        <Link to="/">Home</Link><br />
        <Link to="/contato">Contatos</Link><br />
        <Link to="/sobre">Sobre</Link>
    </div>
  )
}
