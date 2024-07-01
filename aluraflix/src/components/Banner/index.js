import styled from "styled-components"
import Iframe from "./Iframe";
import Label from "components/Label";

const BannerContainer = styled.div`
   background-image:rgba(0, 0, 0, 0.9);
`

const ContainerImagem = styled.section` 
    height: 80vh;
    margin-bottom: 20px;
    position: relative;
    color: var(--branco);
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: center;
    &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%; 
    background-color: rgba(0, 18, 51, 0.53); 
  }
    @media (max-width: 800px) {
        height: auto;
        min-height: 50vh;
}`

const ContainerDoBanner = styled.div`
  width:1440px;
  margin: auto;
  height: 100%;
  display: flex;
  gap:50px;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`

const ContainerConteudo = styled.div`
  width:50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 800px) {
    width: 100%;
  }
`

const Titulo = styled.h1`
  font-size: 46px;
  font-weight: 400;
  margin:0;

`

const Paragrafo = styled.p`
  font-size: 18px;
  font-weight:300;
  margin:0;
`


function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function Banner({
  videoCategoria,
  videoTitle,
  videoDescription,
  url,  
}) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerContainer>
      <ContainerImagem style={{ backgroundImage: `url(${bgUrl})` }}>
        <ContainerDoBanner>
          <ContainerConteudo>
            <Label tamanho="grande" cor={videoCategoria.cor}>
              {videoCategoria.titulo}
            </Label>
            <Titulo>
              {videoTitle}
            </Titulo>
            <Paragrafo>
              {videoDescription}
            </Paragrafo>
          </ContainerConteudo>
          <ContainerConteudo>
            <Iframe
              youtubeID={youTubeID}
            />
          </ContainerConteudo>
        </ContainerDoBanner>
      </ContainerImagem>
    </BannerContainer>

  );
}

export default Banner