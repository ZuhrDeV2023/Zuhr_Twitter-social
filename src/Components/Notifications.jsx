import React from 'react'
import { FaBell } from 'react-icons/fa';

function Notifications() {
  return (
    <div>
      <header className=" sticky top-0 mb-5 flex justify-between items-center p-4 border-b border-gray-300 bg-white">
        <span className="font-bold text-xl text-gray-900">Notifications</span> 
      </header>
        <FaBell className='mx-auto text-red-500'/>
    </div>
  )
}

export default Notifications