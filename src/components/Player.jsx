'use client';

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

export default function VideoPlayer() {
    const [videoUrl, setVideoUrl] = useState('/heroVideo1280x720.mp4');

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia('(min-width: 1280px)').matches) {
                setVideoUrl('/heroVideo1280x720.mp4');
            } else if (window.matchMedia('(min-width: 720px)').matches) {
                setVideoUrl('/heroVideo1280x1280.mp4');
            } else {
                setVideoUrl('/heroVideo720x1280.mp4');
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="">
            <ReactPlayer
                url={videoUrl}
                controls
                playing
                className='Player'
                videoplayer="true"
                width="100%"
                height="100%"
                style={{ borderRadius: '8px' }}
            />
        </div>
    );
}
