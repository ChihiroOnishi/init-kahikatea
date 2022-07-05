import styled from 'styled-components';

export const AboutContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AboutWrap = styled.div`
    margin: 20% auto 0;
`

export const AboutImg = styled.img`
    width: 100%;
    object-fit: cover;
    opacity: 0.8;
    margin-top: 10%;
`

export const AboutH1 = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const AboutH2 = styled.h2`
    color: #98A57E;
    font-size: 1rem;
    letter-spacing: 4rem;
    text-align: center;
    margin: 80px -4rem 80px 0;
`

export const AboutP = styled.p`
    max-width: 600px;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.3rem;
    text-align: center;
    padding: 0 15px;
`