import { Link } from "react-router-dom"
import logo from './logo.png'
import styles from './Cabecalho.module.css'
import Botao from "components/Botao"


function Cabecalho (){
    return(
        <header className={styles.cabecalho}>
            <div>
                <Link to="./">
                    <img src={logo} alt="Logo do CineTag"></img>
                </Link>
                <nav>
                    <Botao url="./">
                        HOME
                    </Botao>
                    <Botao url="./novo-video">
                        NOVO VÍDEO
                    </Botao>
                </nav>

            </div>
        </header>
    )
}

export default Cabecalho