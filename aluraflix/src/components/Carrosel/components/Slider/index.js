import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
      color: var(--branco); // Ajuste para visualizar melhor os botões
    }
  }
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SliderItem = styled.div`
  width: 33,33%; 
  padding: 16px; 
  box-sizing: border-box;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider
      dots={false}
      infinite={true}
      speed={300}
      slidesToShow={3} 
      slidesToScroll={1}
      variableWidth={true}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;

