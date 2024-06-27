import { Link } from 'react-router-dom'
import styles from './Botao.module.css'

function Botao({ url, children }) {
    return (
        <Link to={url}>
            <button className={styles.botao}>
                {children}
            </button>
        </Link>
    )
}

export default Botao