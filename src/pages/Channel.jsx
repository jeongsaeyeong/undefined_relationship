import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannerDetail] = useState();
    const [videos, setVideo] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                // 채널 데이터 
                const channeldata = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                console.log(channeldata.items)
                setChannerDetail(channeldata.items[0])

                // 비디오 데이터 
                const videodata = await fetchFromAPI(`search?type=video&part=snippet&q=${channelId}`);
                console.log(videodata)
                setVideo(videodata.items)
            } catch (error) {
                console.log("error fetching data", error);
            }
        }
        fetchResults();
    }, [channelId])

    return (
        <section id='channel'>
            {channelDetail && (
                <div className='channel__inner'>
                    <div className='channel__header' style={{ backgroundImage: channelDetail ? `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` : 'none' }}>
                        <div className="circle">
                            <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                        </div>
                    </div>
                    <div className="channel__info">
                        <h3 className='title'>{channelDetail.snippet.title}</h3>
                        <p className='desc'>{channelDetail.snippet.description}</p>
                        <div>
                            <span>구독자 {channelDetail.statistics.subscriberCount}</span>
                            <span>동영상 {channelDetail.statistics.videoCount}</span>
                            <span>조회수 {channelDetail.statistics.viewCount}</span>
                        </div>
                    </div>
                    <div className="channel__video video__inner"></div>
                    <div className="channel__more"></div>
                    <div className="video__item">
                        <div className='video__inner search'>
                            {videos.map((video, key) => (
                                <div className='video' key={key}>
                                    <div className='video__thumb play__icon'>
                                        <Link
                                            to={`/video/${video.id.videoId}`}
                                            style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}
                                        >
                                        </Link>
                                    </div>
                                    <div className='video__info'>
                                        <div className='title'>
                                            <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                                        </div>
                                        <div className="desc">
                                            {video.snippet.description}
                                        </div>
                                        <div className='info'>
                                            <Link to={`/channel/${video.snippet.channelId}`} className='author'>{video.snippet.channelTitle}</Link>
                                            <span className='date'>{formatDate(video.snippet.publishedAt)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Channel