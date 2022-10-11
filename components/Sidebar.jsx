import React, { useState } from 'react'
import home from '../img/icons/home.png'
const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('z');
  return (
    <div className='flex flex-[1] flex-col h-screen transition-all'>
        <h1 className='m-auto font-JS text-7xl text-[#780b8f] pl-5'>M</h1>
        <div className='flex flex-row border-2 border-[#720b8f] ml-1 rounded-full'>
            <img className='w-10 h-10' src='https://img.icons8.com/plasticine/400/000000/search-more.png'/>
            <input placeholder='Search...' type='text' className='focus:ring-transparent outline-none border-none text-[#720b8f] m-auto mr-0 bg-transparent'/>
        </div>
        <div className='overflow-y-scroll scrollbar-hide scroll-y'>
        <div
        onClick={() => setActiveTab('Home')}
        className={`flex flex-row mt-10 ${activeTab==='Home' ? 'bg-[#720b8f] text-white' : 'text-black'} ml-1 hover:bg-[#ead6f0] hover:text-black  rounded-full transition-all`}>
            <img className='w-10 h-10' src='https://img.icons8.com/bubbles/500/000000/home-page.png'/>
            <span className='my-auto ml-5'>Home</span>
        </div>
        <div 
        onClick={() => setActiveTab('Groups')}
        className={`flex flex-row mt-10 ${activeTab==='Groups' ? 'bg-[#720b8f] text-white' : 'text-black'} ml-1 hover:bg-[#ead6f0] hover:text-black  rounded-full transition-all`}>
            <img className='w-10 h-10' src='https://img.icons8.com/bubbles/500/000000/user-group-woman-woman.png'/>
            <span className='my-auto ml-5'>Groups</span>
        </div>
        <div 
        onClick={() => setActiveTab('Events')}
        className={`flex flex-row mt-10  hover:bg-[#ead6f0] ml-1 rounded-full ${activeTab==='Events' ? 'bg-[#720b8f] text-white' : 'text-black'} hover:text-black transition-all`}>
            <img className='w-10 h-10' src='https://img.icons8.com/bubbles/500/000000/icalendar.png'/>
            <span className='my-auto ml-5'>Events</span>
        </div>
        <div 
        onClick={() => setActiveTab('Memories')}
        className={`flex flex-row mt-10 hover:bg-[#ead6f0] ml-1 rounded-full ${activeTab==='Memories' ? 'bg-[#720b8f] text-white' : 'text-black'} hover:text-black transition-all`}>
            <img className='w-10 h-10' src='https://img.icons8.com/bubbles/500/000000/stack-of-photos.png'/>
            <span className='my-auto ml-5'>Memories</span>
        </div>
        <div 
        onClick={() => setActiveTab('Messages')}
        className={`flex flex-row mt-10 hover:bg-[#ead6f0] ml-1 rounded-full ${activeTab==='Messages' ? 'bg-[#720b8f] text-white' : 'text-black'} hover:text-black transition-all`}>
            <img className='w-10 h-10' src='https://img.icons8.com/bubbles/500/000000/remind-app.png'/>
            <span className='my-auto ml-5'>Messages</span>
        </div>
        <div 
        onClick={() => setActiveTab('Notifications')}
        className={`flex flex-row mt-10 hover:bg-[#ead6f0] ml-1 rounded-full ${activeTab==='Notifications' ? 'bg-[#720b8f] text-white' : 'text-black'} hover:text-black transition-all`}>
            <img className='w-10 h-10' src='https://img.icons8.com/bubbles/500/000000/alarm.png'/>
            <span className='my-auto ml-5'>Notifications</span>
        </div>
        <div 
        onClick={() => setActiveTab('History')}
        className={`flex flex-row mt-10 hover:bg-[#ead6f0] ml-1 rounded-full ${activeTab==='History' ? 'bg-[#720b8f] text-white' : 'text-black'} hover:text-black transition-all`}>
            <img className='w-10 h-10' src='https://img.icons8.com/bubbles/500/000000/time-machine.png'/>
            <span className='my-auto ml-5'>History</span>
        </div>
        <div 
        onClick={() => setActiveTab('Goals')}
        className={`flex flex-row mt-10 hover:bg-[#ead6f0] ml-1 rounded-full ${activeTab==='Goals' ? 'bg-[#720b8f] text-white' : 'text-black'} hover:text-black transition-all`}>
            <img className='w-10 h-10' src='https://img.icons8.com/bubbles/500/000000/goal.png'/>
            <span className='my-auto ml-5'>Goals</span>
        </div>
        </div>
    </div>
  )
}

export default Sidebar