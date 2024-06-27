import Banner from "components/Banner"
import db from "../../json/db.json"
import Cabecalho from "components/Cabecalho"
import Rodape from "components/Rodape"



function Inicio() {
    console.log(db)
    return (
        <main style={{ background: "#141414" }}>
            <Cabecalho/>
            <Banner
            videoTitle={db.categorias[0].videos[0].titulo}
            url={db.categorias[0].videos[0].url}
            videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
          />
          <Rodape/>
        </main>
    
    )

}
export default Inicio