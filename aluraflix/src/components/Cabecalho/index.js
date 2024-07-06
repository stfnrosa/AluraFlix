import { Link } from "react-router-dom"
import logo from './logo.png'
import Botao from "components/Botao"
import styled from "styled-components"

const HeaderEstilizado = styled.header`
    background: #262626;
    height: 125px;
    display: flex;
    box-shadow: 0px 5px 10px 0px rgba(34, 113, 209, 0.70);
    div {
        align-items: center;
        width:1440px;
        display: flex;
        justify-content: space-between;
        max-width: 100%;
        margin: 0 auto;
    }
    img {
        max-width: 180px;
    }
    nav{
        display:flex;
        gap:25px;
    }
`

function Cabecalho (){
    return(
        <HeaderEstilizado>
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
        </HeaderEstilizado>
    )
}

export default Cabecalho