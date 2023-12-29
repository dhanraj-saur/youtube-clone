import React, { useEffect, useState } from 'react'
import { Logo, Menu, Notification, SEARCH_API, Search, Users } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { json } from 'react-router-dom'
import store from '../utils/store'
import { cachesResult } from '../utils/searchSlice'

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(true)


  const dispatch = useDispatch()

  const searchCache = useSelector((store) => store.search)

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }


  useEffect(() => {


    // make an api call after every key press
    //but if the difference between 2 api call is <200ms
    // decline the api call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      }
      else {
        getSearchSuggestions()
      }
    }, 200)

    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])


  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json()
    // console.log(json);
    setSuggestions(json[1])
    dispatch(cachesResult({
      [searchQuery]: json[1]
    }))
  }
  /*****
   * 
   * - key - i
   * - render the component
   * - useEffect()
   * - start Timer => make api call after 200ms
   * 
   * - key - ip
   * - destroy the component(useEffect return methode)
   * - re-render the component
   * - useEffect()
   * - start Timer => make api call after 200ms
   * 
   */

  return (
    <div>
      <div className='flex justify-between items-center shadow-black h-16 fixed w-full bg-white '>
        <div className='flex mx-2  justify-start items-center gap-2 p-3 w-50'>
          <img onClick={() => toggleMenuHandler()} src={Menu} alt='menu' className='h-8' />

          <img src={Logo} alt='youtube-log' className='h-14 ' />
          <p className='font-bold text-2xl'>YouTube</p>
        </div>

        <div className='text-center flex justify-center rounded-3xl w-full '>
          <input className=' w-5/12 rounded-l-full p-2 outline-blue-700  border border-gray-500  text-lg '
            type='text'
            placeholder='search...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=' rounded-r-full p-2 bg-gray-500 border border-gray-500  '><img src={Search} alt='search' className='h-6 mx-8' /></button>
        </div>

        <div className='mx-6 flex gap-2'>
          <img src={Notification} alt='Notification' className='h-10 w-10' />
          <img src={Users} alt='Users' className='h-10 w-12 rounded-3xl' />
        </div>
      </div>

      {showSuggestions && <div className='bg-white z-10 rounded  border border-gray-100 shadow-lg w-[35rem] my-14 absolute' style={{ marginLeft: "475px" }}>
        <ul>
          {
            suggestions.map((s) => <li key={s} className='p-2 shadow-sm hover:bg-slate-100 flex'>
              <img src={Search} alt='search' className='h-6 mx-1' />
              {s}
            </li>)
          }
        </ul>
      </div>}
    </div>

  )
}

export default Header