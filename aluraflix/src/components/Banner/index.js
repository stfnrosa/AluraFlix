import React from 'react';
import Iframe from './Iframe';
import styled from 'styled-components';
import Categoria from 'components/Categoria';

export const ContentAreaContainer = styled.section`
  width:1440px;
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  display: inline-block;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;


ContentAreaContainer.Description = styled.p`
 font-size: 18px;
 font-weight: 300;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 1;
  margin: 0;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`;

export const BannerEstilizado = styled.section`
  height: 80vh;
  position: relative;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;


function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function Banner({
  videoTitle,
  videoDescription,
  url,
  categoria
}) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerEstilizado backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
        <Categoria categoriaCor={categoria.cor} tamanho="grande">
            {categoria.titulo}
          </Categoria>
          <ContentAreaContainer.Title>
            {videoTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <Iframe
            youtubeID={youTubeID}
          />
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerEstilizado >
  );
}