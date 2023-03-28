import React from 'react'
// import Sidebar from '../Layout/SideBar'
// import Widgets from '../Layout/Widgets'
import { PopulerIcon } from '../assets/İcons' 
function Explore() {
  return (
    <div className='flex-1 border flex-col border-r border-l border-gray-200'>
        <header className=" sticky top-0 mb-5 flex justify-between items-center p-4 border-b border-gray-300 bg-white">
          <span className="font-bold text-xl text-gray-900">Explore</span>
          <PopulerIcon />
        </header>
        <div className="w-1/2 mx-auto flex justify-center my-2">
          <input
            type="text"
            placeholder="Search Twitter"
            className="w-full rounded-full py-2 px-4 bg-gray-200"
          />
        </div>    
      {/* </div> */}
    </div>
  )
}

export default Explore