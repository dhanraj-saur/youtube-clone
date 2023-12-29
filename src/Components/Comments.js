import React, { useEffect, useState } from 'react'
import { COMMENTS, COMMENTS_API, Like, UnLike } from '../utils/Constants'
// import { useSearchParams } from 'react-router-dom';

const Comments = () => {

    const [comment, SetComments] = useState([])

    // const [searchParams] = useSearchParams()
    // console.log(searchParams.get("v"));

    useEffect(() => {
        comments()
    }, [comment])

    const comments = async () => {

        const data = await fetch(COMMENTS_API)
        const json = await data.json()
        console.log(json.items);
        SetComments(json.items)
    }

    return (
        <div>
            <p>dasdfasdfasdf</p>
            {
                comment?.map((item) => {
                    return (
                        <div>
                            <div className='flex gap-2 p-2 my-4 items-center'>
                                <img className='rounded-3xl w-10 h-10' src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} />
                                <p className='font-serif font-bold'>{item?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
                                <p className='text-gray-600 font-serif'>{item?.snippet?.topLevelComment?.snippet?.publishedAt}</p>
                            </div>
                            <div className='p-2 m-2 mx-14' style={{ marginTop: "-30px" }}>
                                <p>{item?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
                                <div className='flex gap-5 items-center my-2'>
                                    <img src={Like} alt='like' className='w-8 h-8  hover:bg-gray-400 rounded-3xl cursor-pointer' />
                                    <img src={UnLike} alt='like' className='w-8 h-8 hover:bg-gray-400 rounded-3xl cursor-pointer'/>
                                    <p className='hover:bg-gray-500 hover:text-white text-center rounded-3xl cursor-pointer p-1 m-1 w-16 font-bold'>Reply</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Comments;