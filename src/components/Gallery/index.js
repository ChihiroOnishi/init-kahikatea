import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GalleryWrap, ImgHoverZoom, GalleryImg, ImgHoverBody, ImgHoverMask, VideoWrap } from './GalleryElements';
import Video from './video';
import { pictures } from './Data';

export default function Gallery(props) {
    const images = props.data;
    const columns = Array.from(Array(4).keys());
    const numberOfRow = Math.ceil(images.length / columns.length);
    const rows = Array.from({length: numberOfRow}, (_, i) => i + 1);
    let nextNumber = 0;

    return (
        <div id="gallery">
            <VideoWrap>
                <Container>
                    <Video />
                </Container>
            </VideoWrap>
            <Container>
                <GalleryWrap>
                    <Row>
                    {columns.map((_, i) => {
                        return (
                            <Col key={i} sm={6} md={6} lg={3}>
                            {rows.map((_, x) => {
                                nextNumber = (i * numberOfRow);
                                if (pictures[nextNumber + x]) {
                                    return (
                                    <ImgHoverBody key={x}>
                                        <ImgHoverZoom>
                                            <GalleryImg src={pictures[nextNumber + x].src} alt="img" />
                                            <ImgHoverMask>{pictures[nextNumber + x].text}</ImgHoverMask>
                                        </ImgHoverZoom>
                                    </ImgHoverBody>
                                    )
                                }
                            })}
                            </Col>
                        )
                    })}
                    </Row>
                </GalleryWrap>
            </Container>
        </div>
    )
}
