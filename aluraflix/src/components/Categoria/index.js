import styled from "styled-components";

const Title = styled.h3`
  font-style: normal;
  font-weight: 900;
  font-size: ${({ tamanho }) => (tamanho === 'grande' ? '48px' : '32px')};
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: ${({ tamanho }) => (tamanho === 'grande' ? '16px' : '10px')};
  text-align:center;
  width: ${({ tamanho }) => (tamanho === 'grande' ? 'auto' : '432px')};
  border-radius: 15px;
  line-height: 1;
  border-radius: 15px;
  background-color: ${({ bgColor }) => bgColor};

`;

function Categoria ({children, categoriaCor, tamanho}){
    return(
        <Title bgColor={categoriaCor} tamanho={tamanho}>
            {children}
        </Title>
    )
}

export default Categoria