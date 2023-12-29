import React, { useEffect } from 'react'
import ChatMassages from './ChatMassages'
import { useDispatch, useSelector } from 'react-redux'
import { addMassage } from '../utils/ChartSlice'

const LiveChat = () => {

    const dispatch = useDispatch()

    const chatMassage = useSelector((store) => store.chat.massages)

    useEffect(() => {

        const i = setInterval(() => {

            //api polling
            console.log("api polling");
            dispatch(addMassage({
                name: "Dhanraj kumar",
                mess: "lorem epison I love"
            }))

        }, 2000)

        return () => clearInterval(i)
    }, [])




    return (
        <div>
            <div className=' flex'>
                <div>
                    {
                        chatMassage?.map((c, i) => (
                            <ChatMassages key={i} name={c.name} massage={c.mess} />
                        ))
                    }
                </div>
            </div>
            
            
        </div>
    )
}

export default LiveChat