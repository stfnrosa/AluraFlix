import styles from "./Rodape.module.css"
import logo from "./logoRodape.png"



const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <img src={logo} alt="Logo Aluraflix" />
        </footer>
    )
}

export default Rodape