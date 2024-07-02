import React from 'react';
import Cabecalho from '../Cabecalho';
import Rodape from '../Rodape';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%5%; 
`;

function PageDefault({ children }) {
    return ( 
        //ou <> </>
        <React.Fragment>        
            <Cabecalho />
                <Main>
                    {children}
                </Main>
            <Rodape />
        </React.Fragment>             
    );
}

export default PageDefault;