import styles from "./Cabecalho.module.css"
import logo from "./logo.png"
import Botao from "../Botao"


const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <div>
                <img src={logo} alt="logo Aluraflix" />
                <nav>
                    <Botao>HOME</Botao>
                    <Botao>NOVO VÍDEO</Botao>
                </nav>
            </div>
        </header>
    )
}

export default Cabecalho