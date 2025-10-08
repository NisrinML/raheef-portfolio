import React from 'react'

const CourseCard = ({content}) => {
  return (
        <li className='text-designColor py-2 '>
        <p className="text-base text-[#999] font-medium pr-10">{content}</p>
        </li>
  
  )
}

export default CourseCard