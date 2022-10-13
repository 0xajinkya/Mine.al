import React from 'react'

const Create = () => {
  return (
    <div className='flex flex-[6] flex-col'>
      <div className='flex flex-row'>
         <div className='flex flex-col flex-[3] bg-white mx-2 rounded-md drop-shadow-md'>
            {/* <h2 className='font-JS text-[#720b8f] text-xl'>Create</h2> */}
            <span className='flex flex-row p-6 py-3'>
                <img className='w-10 h-10 cursor-pointer m-auto mr-6 ml-4 mt-[9.5px]' src="https://img.icons8.com/office/480/000000/user-female-circle.png"/>
                <input placeholder='Create...' type={'text'} className='w-full rounded-full m-auto mb-1 mr-4 mt-2 border-[#ead67f0] ring-[#ead6f0] focus:border-[#730b8f] focus:ring-[#720b8f] outline-[#720b8f] bg-transparent'/>
            </span>
            <div className='flex flex-row px-5'>
            <div className='flex flex-[1] justify-center text-[#d054e9] font-bold flex-row rounded-md hover:bg-gray-100 mb-3 mr-3 pr-3'>
            {/* <img className='w-6 h-6 m-3 cursor-pointer mr-6' src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/128/000000/external-event-fashion-week-flaticons-lineal-color-flat-icons.png'/> */}
            <img className='w-6 h-6 m-3 cursor-pointer mr-6'src="https://img.icons8.com/nolan/64/plus-key.png"/>
            <span className='mt-[15px]'>Post</span>
            </div>
            {/* Event Image */}
            <div className='flex flex-[1] justify-center text-[#e51a2f] font-bold flex-row rounded-md hover:bg-gray-100 mb-3 mr-3 pr-3'>
            <img className='w-6 h-6 m-3 cursor-pointer mr-6' src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/128/000000/external-event-fashion-week-flaticons-lineal-color-flat-icons.png'/>
            <span className='mt-[15px]'>Event</span>
            </div>
            {/* Memories Image */}
            <div className='flex flex-[1] justify-center text-[#1a95e5] font-bold flex-row rounded-md hover:bg-gray-100 mb-3 mr-3 pr-3'>
            <img className='w-6 h-6 m-3 cursor-pointer mr-6' src="https://img.icons8.com/external-sbts2018-flat-sbts2018/144/000000/external-memories-social-media-sbts2018-flat-sbts2018.png"/>
            <span className='mt-[15px]'>Memory</span>
            </div>
            <div className='flex flex-[1] justify-center text-[#e5a71a] font-bold flex-row rounded-md hover:bg-gray-100 mb-3 mr-3 pr-3'>
            <img className='w-7 h-7 m-3 cursor-pointer mr-6' src="https://img.icons8.com/external-flaticons-flat-flat-icons/128/000000/external-group-100-most-used-icons-flaticons-flat-flat-icons.png"/>
            <span className='mt-[15px]'>Group</span>
            </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Create