import styled from "styled-components"
import Iframe from "./Iframe";
import Label from "components/Label";

const BannerContainer = styled.section` 
    height: 80vh;
    position: relative;
    color: #fff;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-color: rgba(0, 18, 51, 0.53);
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
const ContainerBanner = styled.div`
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
  display: inline-block;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    width: 100%;
  }
`

const Titulo = styled.h1`
  font-size: 46px;

`

const Paragrafo = styled.p`
  font-size: 18px;
  font-weight:300;
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
    <BannerContainer backgroundImage={bgUrl}>
      <ContainerBanner>
        <ContainerConteudo>
          <Label tamanho="grande" cor={videoCategoria.cor}>
            {[videoCategoria.titulo]}
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
      </ContainerBanner>
    </BannerContainer>

  );
}

export default Banner