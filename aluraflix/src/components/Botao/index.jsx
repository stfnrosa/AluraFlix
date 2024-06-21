import styled from "styled-components";

const BotaoEstilizado = styled.button`
    height: 54px;
    width: 180px;
    border-radius: 10px;
    border: 4px solid #ffffff;
    font-weight: 900;
    background: transparent;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
`

const Botao = ({children}) => {
    return (
    <BotaoEstilizado>
        {children}
    </BotaoEstilizado>
    )
}

export default Botao