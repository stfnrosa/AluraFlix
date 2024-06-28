import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BotaoEstilizado = styled.button`
   height: 54px;
   font-family: var(--fonte-botao);
    width: 180px;
    border-radius: 10px;
    border: 4px solid #ffffff;
    font-weight: 900;
    background: transparent;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
`

function Botao({ url, children }) {
    return (
        <Link to={url}>
            <BotaoEstilizado>
                {children}
            </BotaoEstilizado>
        </Link>
    )
}

export default Botao