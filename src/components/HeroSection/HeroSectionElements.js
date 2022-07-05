import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #93ac70;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 140px;
    padding: 0 30px;
    height: 880px;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 80px;
    right: 5%;
    width: 60%;
    height: 100%;
    overflow: hidden;

    @media screen and (max-width: 940px) {
        width: 90%;
    }

    @media screen and (max-width: 600px) {
        right: 0;
        width: 100%;
    }
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const HeroContent = styled.div`
    z-index: 3;
    position: absolute;
    left: 20%;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    font-weight: 400;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
