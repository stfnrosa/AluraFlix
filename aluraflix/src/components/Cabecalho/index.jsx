import styled from "styled-components"
import logo from "./logo.png"
import Botao from "../Botao"

const HeaderEstilizado = styled.header`
    background: #262626;
    height: 125px;
    display: flex;
    align-items: center;
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
                <img src={logo} alt="logo AluraFlix" />
                <nav>
                    <Botao>HOME</Botao>
                    <Botao>NOVO VÍDEO</Botao>
                </nav>
            </div>
        </HeaderEstilizado>
    )
}

export default Cabecalho