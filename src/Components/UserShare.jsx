import React from 'react'
import userİmg from '../assets/photo_2022-10-22_09-33-42.jpg'
import { UserIcon } from '../assets/İcons'

const UserShare = () => {
  return (
    <div className="h-screen flex flex-col justify-between px-2 content-center">
      <div className="px-10 pl-40 mt-10 flex content-center ">
        <img
          src={userİmg}
          alt="Twitter Logo"
          className="w-10 h-10 rounded-full"
        ></img>
      <div className="pl-5 profileContent flex-1">
          <h4>Zuhr Start</h4>
          <h5>@zuhrstar</h5>
      </div>
      </div>
      <div className="profileShareBtn">
        <UserIcon className="bg-gray-600 w-4 h-4" />
      </div>
    </div>
  )
}

export default UserShare