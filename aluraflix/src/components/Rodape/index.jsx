import styled from "styled-components"
import logo from "./logoRodape.png"

const RodapeEstilizado = styled.footer`
    background: rgba(0,0,0,90%);
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 4px solid var(--destaque);
    box-shadow: 0px -5px 29px 0px rgba(34, 113, 209, 0.70);
`

const Rodape = () => {
    return (
        <RodapeEstilizado>
            <img src={logo} alt="Logo Aluraflix" />
        </RodapeEstilizado>
    )
}

export default Rodape