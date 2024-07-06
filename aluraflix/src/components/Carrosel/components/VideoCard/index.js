import React from 'react';
import styled from 'styled-components';
import Remover from "./remover.png"
import Editar from "./editar.png"

export const VideoCardContainer = styled.figcaption`
  border: 4px solid;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  width: 432px;
  height: 260px;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  border-radius: 10px 10px 0 0;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 0;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
`;

const FooterVideo = styled.footer`
    width: auto;
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-left: 4px solid;
    border-right: 4px solid;
    border-bottom: 4px solid;
    border-radius: 0 0 10px 10px;
    padding: 12px;
    transition: opacity .3s;
    &:hover,
    &:focus {
    opacity: .5;
  }
`

const Container = styled.div`
  display:flex;
  gap: 12px;
  align-items: center;
  span{
    font-size: 16px;
    font-weight: 700;
  }
`



function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <>
      <VideoCardContainer
        url={image}
        href={videoURL}
        target="_blank"
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
      />
      <FooterVideo style={{ borderColor: categoryColor || 'red' }}>
        <Container >
          <img src={Remover} alt='icone para deletar vídeo'/>
          <span>DELETAR</span>
        </Container>
        <Container>
          <img src={Editar} alt='icone para editar vídeo' />
          <span>EDITAR</span>
        </Container>
      </FooterVideo>
    </>
  );
}

export default VideoCard;