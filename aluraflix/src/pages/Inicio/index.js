import React from 'react';
import Cabecalho from '../../components/Cabecalho'
import dadosIniciais from '../../json/db.json';
import Banner from '../../components/Banner';
import Carrosel from '../../components/Carrosel';
import Rodape from '../../components/Rodape';

function Inicio() {
  return (
    <div style={{ background: "#141414" }}>
      <Cabecalho />

      <Banner
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma Pokedex! "}
      />

      <Carrosel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carrosel
        category={dadosIniciais.categorias[1]}
      />

      <Carrosel
        category={dadosIniciais.categorias[2]}
      />      

      <Carrosel
        category={dadosIniciais.categorias[3]}
      />      

      <Carrosel
        category={dadosIniciais.categorias[4]}
      />      
   

      <Rodape />
    </div>
  );
}

export default Inicio;