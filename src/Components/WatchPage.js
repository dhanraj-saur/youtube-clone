import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import Comments from './Comments'
import LiveChat from './LiveChat'
import { Forward } from '../utils/Constants'
import { addMassage } from '../utils/ChartSlice'

const WatchPage = () => {

    const [liveChatMessage, setLiveChatMessage] = useState("")

    const [searchParams] = useSearchParams()
    console.log(searchParams.get("v"));

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (
        <div className='w-full'>
            <div className='flex w-full'>
                <div className='p-2 m-2 my-20 '>
                    <iframe width="1000"
                        height="500"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className='border border-gray-400  h-[31rem] my-[90px] rounded-lg'>
                    <div className=' w-full  h-[28rem] overflow-y-scroll'>
                        <LiveChat />
                    </div>
                    <hr />
                    <form className='w-full my-1 flex text-center'
                        onSubmit={(e) => {
                            e.preventDefault()
                            console.log("liveChart", liveChatMessage);
                            dispatch(addMassage({
                                name: "honey",
                                message: liveChatMessage,
                            }))
                        }}
                    >
                        <input className="w-[75%] mx-1   outline-none h-[38px] p-2" type='text' placeholder='sending message....'
                            value={liveChatMessage}
                            onChange={(e) => setLiveChatMessage(e.target.value)}
                        />
                        <button className='mx-4 w-16'>
                            <img src={Forward} alt='forward' width={30} height={30} style={{ marginLeft: "20px" }} />
                        </button>
                    </form>
                </div>
            </div>
            
            <Comments />
        </div>
    )
}

export default WatchPage