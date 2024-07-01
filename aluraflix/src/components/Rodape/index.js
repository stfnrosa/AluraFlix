import styled from "styled-components"
import logo from "./logoRodape.png"

const FooterEstilizado = styled.footer`
    background: rgba(0,0,0,90%);
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 4px solid var(--destaque);
    box-shadow: 0px -5px 10px 0px rgba(34, 113, 209, 0.70);
`


const Rodape = () => {
    return (
        <FooterEstilizado>
            <img src={logo} alt="Logo Aluraflix" />
        </FooterEstilizado>
    )
}

export default Rodape