import React from 'react'

import {
  Imgİcon,
  Gifİcon,
  Anketİcon,
  Emojiİcon,
  Calendarİcon,
} from '../assets/İcons'

const TweetBox = () => {
  return (
    <div className="flex flex-col flex-1 mt-2 p-2">
      <textarea
        name=""
        className=" text-xl font-light placeholder-gray-dark  overflow-hidden resize-none bg-transparent outline-none"
        id=""
        placeholder="What's Happyning"
      ></textarea>
      <div className="flex item-center justify-between">
        <div className="flex m-3">
          <div className="flex hover:bg-blue-400 items-center justify-center w-11 h-11 rounded-full ">
            <a href="#" >
              <Imgİcon/>
            </a>
          </div>
          <div className="flex items-center hover:bg-blue-400 justify-center w-11 h-11 rounded-full ">
            <a href="#">
              <Gifİcon />
            </a>
          </div>
          <div className="flex items-center justify-center hover:bg-blue-400 w-11 h-11 rounded-full ">
            <a href="#">
              <Anketİcon />
            </a>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-blue-400">
            <a href="#">
              <Emojiİcon />
            </a>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-blue-400">
            <a href="#" className='hover: text-[#bfdbfe]'>
              <Calendarİcon />
            </a>
          </div>
        </div>

        <button disabled className="bg-blue-300 text-white py-2 px-8 rounded-full font-bold opacity-40	">
          Tweet
        </button>
      </div>
    </div>
  )
}

export default TweetBox
