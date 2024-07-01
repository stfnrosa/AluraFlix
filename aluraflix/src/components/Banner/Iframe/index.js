import styled from "styled-components"


const ContainerIframe = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
    @media (max-width: 800px) {
        display: none;
    }

`

const IframeEstilizado = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
`

function Iframe({ youtubeID }) {
    return (
        <ContainerIframe>

            <IframeEstilizado
                title="Titulo do Iframe"
                src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </ContainerIframe>
    )
}

export default Iframe