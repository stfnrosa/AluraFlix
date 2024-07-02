import Label from "components/Label";
import Slider from "./Slider";
import Card from "components/Card";
import styled from "styled-components";

const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }  
`

const VideoCardGroupContainer = styled.section`
    color: white;
    min-height: 197px;
    margin-left: 5%;
    margin-bottom: 16px;
`

const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`

const Carrosel = ({ videoCategoria, ignoreFirstVideo }) => {
    const categoryTitle = videoCategoria.titulo;
    const categoryColor = videoCategoria.cor;
    const categoryExtraLink = videoCategoria.link_extra;
    const videos = videoCategoria.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Label style={{ backgroundColor: categoryColor }}>
            {categoryTitle}
          </Label>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <Card
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carrosel