import React from 'react'
import { SearchIcon } from '../assets/İcons'
import { Timeline } from 'react-twitter-widgets'
import icontool from '../assets/setting-line-icon.webp'
import IconVector from '../assets/Vector.svg'
const Widgets = () => {
  return (
    <aside className="h-screen justify-between mx-10 py-1 mr-40">
      <div className="flex items-center space-x-2 p-2 m-1 mt-2 bg-gray-200 rounded-full text-gray-dark  focus-within:bg-white focus-within:ring-1  focus-within:ring-primary-base focus-within:text-primary-base ">
        <SearchIcon className="w-[373px] h-[55px] sticky  " />
        <input
          type="text"
          placeholder="Search Twitter"
          className="placeholder-gray-dark bg-transparent outline-none w-full text-sm"
        />
      </div>
      <div className="w-[373] bg-[#F7F9F9] mt-5 p-1 rounded-xl	">
        <div className="tCopy p-2">
          <h3 className='font-bold text-2xl	flex justify-between content-center align-center'>Trends for you <img src={icontool} alt="" className='w-4 h-4 mt-3 mr-4' /></h3>
          <p className='text-base opacity-60 text-[#393B41] font-normal pt-4'>Trending in Germany</p>
          <p className='text-xl	font-semibold pt-2'>Revolution</p>
            <img src={IconVector} alt="" className="flex justify-center justify-items-end ml-auto mt-1 mb-1 mr-4 w-[17px] h-[4px]"  />
          <p className='mt-1 text-base opacity-60 pt-1 text-[#393B41] font-normal'>50.4K Tweets</p>
        </div>
        <div className="tCopy pt-1 px-2">
          <p className='text-base opacity-60 text-[#393B41] font-normal pt-4'>Trending in Germany</p>
          <p className='text-xl	font-semibold pt-2'>Revolution</p>
            <img src={IconVector} alt="" className="flex justify-center justify-items-end ml-auto mt-1 mb-1 mr-4 w-[17px] h-[4px]"  />
          <p className='mt-1 text-base opacity-60 pt-1 text-[#393B41] font-normal'>50.4K Tweets</p>
        </div>
        <div className="tCopy pt-1 px-2">
          <p className='text-base opacity-60 text-[#393B41] font-normal pt-4'>Trending in Germany</p>
          <p className='text-xl	font-semibold pt-2'>Revolution</p>
            <img src={IconVector} alt="" className="flex justify-center justify-items-end ml-auto mt-1 mb-1 mr-4 w-[17px] h-[4px]"  />
          <p className='mt-1 text-base opacity-60 pt-1 text-[#393B41] font-normal'>50.4K Tweets</p>
        </div>
      </div>
      <div className="mt-5 sticky top-20 ">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'Zuhriddinbek',
          }}
            options={{
            width: '373px',
            height: '300vh',
          }}
        />
      </div>
    </aside>
  )
}

export default Widgets