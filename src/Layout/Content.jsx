import React from 'react'
import Divider from '../components/Divider'
import TweetBox from '../components/TweetBox'
import { PopulerIcon } from '../assets/İcons'
import userİmg from '../assets/photo_2022-10-22_09-33-42.jpg'

const Content = () => {
  return (
    <main className="flex-1 border flex-col border-r border-l border-gray-200 ">
      <header className=" sticky top-0 flex justify-between items-center p-4 border-b border-gray-300 bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <button>
          <PopulerIcon />
        </button>
      </header>
      <div className="flex justify-center w-100 bg-gray-200">
          <button className='w-full p-4 mx-auto hover:bg-blue-500 hover:text-white'>
            <span className='border-b-4 rounded-md pb-3 border-blue-500 hover:border-white'>
              For you
            </span>
          </button>
          <button className='w-full p-4 mx-auto hover:bg-blue-500 hover:text-white'>
            <span className='border-b-4 rounded-md pb-3 border-blue-500 hover:border-white'>
              Following
            </span>
          </button>          
        </div>
      <div className="flex px-3 py-2 space-x-4">
        <img
          src={userİmg}
          alt="Twitter Logo"
          className="w-10 h-10 rounded-full"
        ></img>
        <TweetBox />
      </div>
      <Divider />
    </main>
  )
}

export default Content