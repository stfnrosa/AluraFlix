import styled from "styled-components"
import logo from "./logo.png"
import Botao from "../Botao"

const HeaderEstilizado = styled.header`
    background: #262626;
    height: 125px;
    display: flex;
    align-items: center;
    border-bottom: 4px solid var(--destaque);
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.70);
    div{
        display: flex;
        justify-content: space-between;
        width:1440px;
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

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <div>
                <img src={logo} alt="logo Aluraflix" />
                <nav>
                    <Botao>HOME</Botao>
                    <Botao>NOVO VÍDEO</Botao>
                </nav>
            </div>
        </HeaderEstilizado>
    )
}

export default Cabecalho