import Image from 'next/image'
import React from 'react'
import minealLogo from '../images/minealLogo.jpg'
const Header = () => {
  return (
    <div className='w-full flex-col p-5'>
        <Image alt='Mine.al' className='cursor-pointer' width={50} height={50} src={minealLogo}/>
    </div>
  )
}

export default Header