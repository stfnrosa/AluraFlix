import React from 'react';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';
import styled from 'styled-components';
import Categoria from 'components/Categoria';

const VideoCardGroupContainer = styled.section`
  width: 1440px;
  margin: 0 auto;
  color: white;
  margin-bottom: 16px;
`;



function Carousel({ ignoreFirstVideo, categoria, isLoading }) {
  if (isLoading) {
    return <p>Loading videos...</p>;
  }

  if (!categoria || !categoria.videos) {
    return null;
  }

  const videos = categoria.videos;

  return (
    <VideoCardGroupContainer>
      {categoria.titulo && (
        <>
          <Categoria categoriaCor={categoria.cor} tamanho="pequeno">
            {categoria.titulo}
          </Categoria>
        </>
      )}

      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoria.cor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
