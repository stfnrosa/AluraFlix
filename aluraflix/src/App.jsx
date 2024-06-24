import styled from "styled-components"
import Cabecalho from "./components/Cabecalho"
import EstilosGlobais from "./components/EstilosGlobais"
import Rodape from "./components/Rodape"

const AppContainer = styled.div`
  width:1440px;
  max-width: 100%;
  margin: 0 auto;
`

function App() {

  return (
    <>
      <EstilosGlobais />
        <Cabecalho/>

        <Rodape/>



    </>
  )
}

export default App
