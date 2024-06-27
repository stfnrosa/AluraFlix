import styles from "./Card.module.css"
import { Link } from "react-router-dom";

function Card({ id, titulo, capa }) {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img
                    src={capa}
                    alt={titulo}
                    className={styles.capa}
                />
                <h2>{titulo}</h2>
            </Link>
            
        </div>
    )
}

export default Card