import React, { useEffect, useState } from 'react'
import { YOUR_VIDEO_API } from '../utils/Constants'
import VideoCards from './VideoCards'


const VideoContainer = () => {

  const [videos, setVideos] = useState()

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {

    const data = await fetch(YOUR_VIDEO_API)
    const json = await data.json()
    // console.log(json.items);
    setVideos(json.items)
  }



  return (
    <div className='mx-4 my-4' style={{width:"160%"}}>
      <VideoCards videos={videos} />
    </div>
  )
}

export default VideoContainer