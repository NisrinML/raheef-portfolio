import React from 'react'

const CourseCard = ({content}) => {
  return (
    <div className="w-full py-2 flex flex-col gap-2.5 ">
        <li className='text-designColor ml-4'>
        <p className="text-base text-[#999] font-medium pr-10">{content}</p>
        </li>
    </div>
  )
}

export default CourseCard