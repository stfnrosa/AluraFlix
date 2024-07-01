import styled from "styled-components";

const LabelEstilizada = styled.button`
  border: none;
  color: var(--branco);
  font-weight: 700;
  line-height: 1;
  display: inline-block;
  padding: 18px;
  margin:0;
  background-color: ${props => props.cor};
  
  &[data-tamanho="pequeno"] {
        font-size: 32px;
        border-radius: 4px;
    }   
    
    &[data-tamanho="grande"] {
        font-size: 48px;
        border-radius: 8px; 
  }

`;


function Label({ children, tamanho, cor }) {
    return (
        <div>

            <LabelEstilizada
                data-tamanho={tamanho}
                cor={cor}
            >
                {children}
            </LabelEstilizada>
        </div>
    );
}

export default Label;