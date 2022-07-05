import styled from'styled-components';

export const GalleryWrap = styled.div`
    margin: 100px 0;
`

export const GalleryImg = styled.img`
    width: 100%;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    border: 0;
    transition: transform .5s ease;
`

export const ImgHoverZoom = styled.div`
    height: auto;
    overflow: hidden;
    border: 5px solid #ffff;

    &:hover ${GalleryImg} {
        transform: scale(1.1);
    }
`

export const ImgHoverBody = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 1rem;
`

export const ImgHoverMask = styled.div`
    width: 100% - 5px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 5px;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: all 0.6s ease;
    color: #fff;
    display: flex;
    align-items: center;
    text-align: start;
    padding-left: 20px;

    &:hover {
        opacity: 1;
    }
`

export const VideoWrap = styled.div`
    padding: 100px 20%;
    background: rgba(147, 172, 112, 0.6);

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const VideoClip = styled.video`
    width: 100%;
`

export const VideoImg = styled.img`
    width: 180px;
    margin: 3px;
    cursor: pointer;
`

export const VideoInput = styled.input.attrs({ type: 'radio' })`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;

    & + ${VideoImg} {
        cursor: pointer
    }

    &:checked + ${VideoImg} {
        outline: 3px solid #444;
    }
`
