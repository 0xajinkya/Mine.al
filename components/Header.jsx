import Image from 'next/image'
import React from 'react'
import minealLogo from '../images/minealLogo.jpg'
const Header = () => {
  const SearchBar = () => {
    return (
      <div className='flex flex-row relative -mt-2 ml-4'>
        <img className='w-10 h-10 absolute left-3 top-3' src="https://img.icons8.com/plasticine/100/000000/search-more.png"/>
        <input placeholder='Search' className='font-RW rounded-full m-auto ml-2 p-3 pl-12 pr-0 focus:ring-2 focus:ring-[#720b8f] focus:ring-offest-2 focus:ring-offset-[#720b8f] border-[#720b8f] mr-0' type='text'/>
      </div>
    )
  }

  const Icons = ({src}) => {
    return (
      <div className='bg-none hover:bg-[#720b8f] m-auto rounded-full transition-all'>
        <img className='w-16 h-16 rounded-full m-3 mt-0 mb-0 cursor-pointer' src={src} />
      </div>
    )
  }

  return (
    <div className='flex flex-row justify-between rounded-full'>
        {/* <div className='flex flex-[1] p-4 bg-[#ead6f0] rounded-b-xl'> */}
        <div className='flex flex-[1] p-4 rounded-b-xl bg-red'>
          <h1 className='text-5xl text-[#720b8f] font-JS cursor-pointer mt-2' title='Mineal'>M</h1>
          {/* <img src='./img/logo.png'/> */}
          <SearchBar />
        </div>
        <div className='flex flex-[4] px-4 justify-center'>
          <div className='bg-[#ead6f0] rounded-b-xl flex justify-between flex-row py-3 px-3'>
            <Icons src='https://img.icons8.com/bubbles/200/000000/home-page.png'/>
            <Icons src='https://img.icons8.com/bubbles/200/000000/user-group-woman-woman.png'/>
            <Icons src='https://img.icons8.com/bubbles/200/000000/remind-app.png'/>
            <Icons src='https://img.icons8.com/bubbles/200/000000/icalendar.png'/>
            <Icons src='https://img.icons8.com/bubbles/200/000000/time-machine.png'/>
            <Icons src='https://img.icons8.com/bubbles/200/000000/alarm.png'/>
          </div>
        </div>
        {/* <div className='flex flex-[1] px-4 bg-[#ead6f0] rounded-b-xl'> */}
        <div className='flex flex-[2] px-4 rounded-b-xl justify-center'>
          <div className='flex flex-row'>
          <Icons src='https://img.icons8.com/bubbles/200/000000/gear.png'/>
          <Icons src='https://img.icons8.com/bubbles/200/000000/administrator-male.png'/>
          </div>
        </div>
    </div>
  )
}

export default Header