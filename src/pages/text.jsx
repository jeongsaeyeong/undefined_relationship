const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideo ] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchId}`)
            .then((data) => setVideo(data.items));
    }, [searchId]);

    return (
        <section id='searchPage'>
            <h2>제목</h2>
            <div className='video__inner search'>
                {videos.map((video, key) => (
                    <div className='video' key={key}>
                        <div className='video__thumb'>
                            <Link 
                                to='/video/videoId'
                                style={{ backgroundImage : `url(${video.snippet.thumbnails.high.url})` }}
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
                                <span className='author'>{video.snippet.channelTitle}</span>
                                <span className='date'>{formatDate(video.snippet.publishedAt)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}