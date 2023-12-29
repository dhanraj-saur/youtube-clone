import React from 'react'
import Button from './Button'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// const list = [
//   "All", "Grammer", "IBPS PO", "Staff Selection Commission", "Mixes",
//   "Civil Services Exams","Live", "Geometry","Music","News" ,"Cricket","Movie",
//   "Chemistry","Maths" 
// ]

const ButtonList = () => {
  return (
    <div className='flex mx-5 fixed bg-white'>

      {/* {
        list.map((item)=>{
          return(
            <div className=' px-6  m-1 my-4 rounded h-10 font-normal  bg-gray-300'>{item}</div>
          )
        })
      } */}
      <Button name="All" />
      <Button name="Grammer" />
      <Button name="IBPSPO" />
     
      <Button name="Mixes" />
      {/* <Button name="Civil Services Exams" /> */}
      <Button name="Live" />
      <Button name="Geometry" />
      <Button name="Music" />
      <Button name="News" />
      <Button name="Cricket" />
      <Button name="Movie" />
      <Button name="Chemistry" />
      <Button name="Maths" />

    </div>
  )
}

export default ButtonList