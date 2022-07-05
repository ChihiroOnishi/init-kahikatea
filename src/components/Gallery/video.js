import React, { useState } from 'react';
import { videos } from './Data';
import { VideoClip, VideoImg, VideoInput } from './GalleryElements';

const Video = () => {
    const [video, setVideo] = useState(videos[0]);
    const chooseVideo = (event) => {
        const index = event.target.value;
        setVideo(videos[index]);
    };

    return (
        <>
            <VideoClip controls src={video.src}/>

                {videos.map((v, i) => {
                    return(
                        <label key={i}>
                            <VideoInput value={i} checked={video === videos[i]} onChange={chooseVideo}/>
                            <VideoImg src={v.thumbnail} alt="thumbnail" />
                        </label>
                    );
                })}
        </>
    )
}

export default Video;