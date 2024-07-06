import React from 'react';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';
import styled from 'styled-components';

const VideoCardGroupContainer = styled.section`
  width: 1440px;
  margin: 0 auto;
  color: white;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
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
          <Title style={{ backgroundColor: categoria.cor || 'red' }}>
            {categoria.titulo}
          </Title>
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
