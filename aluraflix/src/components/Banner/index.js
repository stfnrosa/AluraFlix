import styled from "styled-components"

const BannerContainer=styled.section` 
    height: 80vh;
    position: relative;
    color: #fff;
    background-image: ${({backgroundImage})=>`url(${backgroundImage})`};
    background-size: cover;
    background-position: center;
    @media (max-width: 800px) {
        height: auto;
        min-height: 50vh;
}`

function getYouTubeId(youtubeURL) {
    return youtubeURL
      .replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
      );
  }
  
function Banner({
    videoTitle,
    videoDescription,
    url,
  }) {
    const youTubeID = getYouTubeId(url);
    const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
  
    return (
      <BannerContainer backgroundImage={bgUrl}>
        <section>
            {videoTitle}
        </section>
        <section>
            {videoDescription}
        </section>
      </BannerContainer>
        
    );
  }

export default Banner