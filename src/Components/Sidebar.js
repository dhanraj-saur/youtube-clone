import React from 'react'
import { Arrow, Cup, Downloads, Fashion, Films, Flag, Games, Help, History, Home, Info, Learning, Like, Live, Music, News, Setting, Shopping, Shorts, Subscription, Trending, User, Videos, Watch } from '../utils/Constants'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  //early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className=' w-60  overflow-scroll shadow-xl fixed my-16 bg-white' style={{height:"92vh"}}>
      <div className='my-3'>
        <div className='flex justify-start gap-3 text-center p-1.5 mx-4   hover:bg-slate-500 rounded cursor-pointer'>
          <img src={Home} alt='home' className='h-6 w-6' />
          <Link to={"/"}>
            <h3 className='font-bold '>Home</h3>
          </Link>
        </div>
        <div className='flex justify-start gap-3 text-center p-1.5  mx-4  hover:bg-slate-500 rounded cursor-pointer'>
          <img src={Shorts} alt='Shorts' className='h-6 w-6' />
          <h3 className='font-bold '>Shorts</h3>
        </div>
        <div className='flex justify-start gap-3 text-center p-1.5  mx-4  hover:bg-slate-500 rounded cursor-pointer'>
          <img src={Subscription} alt='Subscription' className='h-6 ' />
          <h3 className='font-bold '>Subscription</h3>
        </div>
      </div>
      <hr className='text-gray-800' />

      <div className='my-2'>
        <div className='flex justify-start gap-2 text-center p-1.5  mx-4 '>
          <h2 className='font-bold text-2xl'>You</h2>
          <img src={Arrow} alt='Arrow' className='h-6 w-6 my-2' />
        </div>
        <ul className='mx-5 my-1'>
          <li className='flex justify-start text-center gap-3 font-bold  hover:bg-slate-500 rounded cursor-pointer  p-2'>
            <img src={User} alt='Arrow' className='h-6 w-6 ' />
            Your Channels
          </li>
          <li className='flex justify-start text-center gap-3 font-bold    hover:bg-slate-500 rounded cursor-pointer p-2'>
            <img src={History} alt='Arrow' className='h-6 w-6 ' />
            History
          </li>
          <li className='flex justify-start text-center gap-3 font-bold   hover:bg-slate-500 rounded cursor-pointer p-2'>
            <img src={Videos} alt='Videos' className='h-6 w-6 ' />
            Your Videos
          </li>
          <li className='flex justify-start text-center gap-3 font-bold   hover:bg-slate-500 rounded cursor-pointer p-2'>
            <img src={Downloads} alt='Downloads' className='h-6 w-6 ' />
            Downloads
          </li>
          <li className='flex justify-start text-center gap-3 font-bold   hover:bg-slate-500 rounded cursor-pointer p-2'>
            <img src={Watch} alt='Watch' className='h-6 w-6 ' />
            Watch Later
          </li>

          <li className='flex justify-start text-center gap-3 font-bold  hover:bg-slate-500 rounded cursor-pointer p-2'>
            <img src={Like} alt='Like' className='h-6 w-6 ' />
            Liked Videos
          </li>
        </ul>
        <hr />

        <div>
          <div className='my-2'>
            <h1 className='font-bold text-xl p-1.5  mx-4'>Explore</h1>
          </div>

          <ul className='mx-5 my-1'>
            <li className='flex justify-start text-center gap-3 font-bold   hover:bg-slate-500 rounded cursor-pointer p-2'>
              <img src={Trending} alt='Trending' className='h-6 w-6 ' />
              Trending
            </li>
            <li className='flex justify-start text-center gap-3 font-bold   hover:bg-slate-500 rounded cursor-pointer p-2'>
              <img src={Shopping} alt='Shopping' className='h-6 w-6 ' />
              Shopping
            </li>
            <li className='flex justify-start text-center gap-3 font-bold    hover:bg-slate-500 rounded cursor-pointer p-2'>
              <img src={Music} alt='Videos' className='h-6 w-6 ' />
              Music
            </li>
            <li className='flex justify-start text-center gap-3 font-bold  hover:bg-slate-500 rounded cursor-pointer p-2 '>
              <img src={Films} alt='Films' className='h-6 w-6 ' />
              Films
            </li>
            <li className='flex justify-start text-center gap-3 font-bold  hover:bg-slate-500 rounded cursor-pointer p-2'>
              <img src={Live} alt='Live' className='h-6 w-6 ' />
              Live
            </li>

            <li className='flex justify-start text-center gap-3 font-bold  hover:bg-slate-500 rounded cursor-pointer p-2'>
              <img src={Games} alt='Games' className='h-6 w-6 ' />
              Gaming
            </li>

            <li className='flex justify-start text-center gap-3 font-bold   hover:bg-slate-500 rounded cursor-pointer p-2'>
              <img src={News} alt='News' className='h-6 w-6 ' />
              News
            </li>
            <li className='flex justify-start text-center gap-3 font-bold   hover:bg-slate-500 rounded cursor-pointer p-2'>
              <img src={Cup} alt='Cup' className='h-6 w-6 ' />
              Sport
            </li>
            <li className='flex justify-start text-center gap-3 font-bold    hover:bg-slate-500 rounded cursor-pointer p-2'>
              <img src={Learning} alt='Videos' className='h-6 w-6 ' />
              Learning
            </li>
            <li className='flex justify-start text-center gap-1 font-bold  hover:bg-slate-500 rounded cursor-pointer p-2'>
              <img src={Fashion} alt='Films' className='h-6 w-4 ' />
              Fashion & beauty
            </li>
            <li className='flex justify-start text-center gap-3 font-bold   hover:bg-slate-500 rounded cursor-pointer p-2'>
              <img src={Live} alt='Live' className='h-6 w-6 ' />
              Podcasts
            </li>
          </ul>
        </div>
        <hr />


        <div className='my-4'>
          <ul className='mx-5 my-1'>
            <li className='flex justify-start text-center gap-3 font-bold p-2 hover:bg-slate-500 rounded cursor-pointer'>
              <img src={Setting} alt='Trending' className='h-6 w-6 ' />
              Setting
            </li>
            <li className='flex justify-start text-center gap-3 font-bold  p-2  hover:bg-slate-500 rounded cursor-pointer'>
              <img src={Flag} alt='Shopping' className='h-6 w-6 ' />
              Report History
            </li>
            <li className='flex justify-start text-center gap-3 font-bold  p-2  hover:bg-slate-500 rounded cursor-pointer'>
              <img src={Help} alt='Videos' className='h-6 w-6 ' />
              Help
            </li>
            <li className='flex justify-start text-center gap-3 font-bold  p-2  hover:bg-slate-500 rounded cursor-pointer'>
              <img src={Info} alt='Films' className='h-6 w-6 ' />
              Send feedback
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <div>
        <p className='font-medium text-sm p-2 '>About Press Copyright <br />Contact us Creator Advertise <br />Developers</p>
        <p className='font-medium text-sm p-2 '>Terms Privacy Policy & Safety <br />How YouTube works <br />Test new features</p>

        <span className='text-gray-700 p-2 font-thin'>© 2023 Google LLC</span>
        
      
      </div>
      <hr/>
    </div>
  )
}

export default Sidebar