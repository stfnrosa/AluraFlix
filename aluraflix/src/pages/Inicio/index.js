import Banner from "components/Banner"
import db from "../../json/db.json"
import Cabecalho from "components/Cabecalho"
import Rodape from "components/Rodape"
import Carrosel from "components/Carrosel"



function Inicio() {
    return (
        <main style={{ background: "#141414" }}>
            <Cabecalho/>
            <Banner
            videoCategoria={db.categorias[0]}
            videoTitle={db.categorias[0].videos[0].titulo}
            url={db.categorias[0].videos[0].url}
            videoDescription={"Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma Pokedex! "}
          />

          <Carrosel/>

          <Rodape/>
        </main>
    
    )

}
export default Inicio