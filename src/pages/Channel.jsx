import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import VideoSearch from '../components/video/VideoSearch';

const Channel = () => {
    const { channelId } = useParams();
    const [ channelDetail, setChannerDetail] = useState();
    const [ channelVideo, setchannelVideo ] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const channeldata = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannerDetail(channeldata.items[0])

                const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`);
                console.log(videosData);
                setchannelVideo(videosData.items);

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
                    <div className="channel__video video__inner">
                        <VideoSearch videos={channelVideo}/>
                    </div>
                    <div className="channel__more"></div>
                </div>
            )}
        </section>
    )
}

export default Channel