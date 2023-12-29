import React from 'react'
import { Link } from 'react-router-dom'


const VideoCards = ({ videos }) => {
    console.log(videos);

    // const { snippet, statistics } = videos
    // const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className='flex flex-wrap my-16' >
            {
                videos?.map((item) => {
                    return (

                        <div key={item.id} className='p-2  w-1/4 shadow-lg m-1 rounded-lg'  >
                            <Link to={"/watch?v=" + item.id} >
                                <img className=" rounded-lg " src={item?.snippet?.thumbnails?.high?.url} />
                                <ul>
                                    <li>{item?.snippet?.title.split(10, 20)}</li>
                                    <li>{item?.snippet?.publishedAt}</li>
                                    <li>{item?.statistics?.viewCount} views</li>

                                </ul>
                            </Link>

                        </div>

                    )
                })
            }
            
        </div>
    )
}

export default VideoCards