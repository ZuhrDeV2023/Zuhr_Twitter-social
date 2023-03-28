import React from 'react'
import UserShare from '../Components/UserShare'
import twitterLogo from '../assets/twitter-3.svg'

import {
  BookmarksIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  ProfileIcon,
  UserIcon,
} from '../assets/İcons'
import SideLink from '../components/SideLink'

const sideLinks = [
  {
    name: 'Home',
    icon: HomeIcon,
  },
  {
    name: 'Explore',
    icon: ExploreIcon,
  },
  {
    name: 'Notifications',
    icon: NotificationsIcon,
  },
  {
    name: 'Messages',
    icon: MessagesIcon,
  },
  {
    name: 'Bookmarks',
    icon: BookmarksIcon,
  },
  {
    name: 'Lists',
    icon: ListsIcon,
  },
  {
    name: 'Profile',
    icon: ProfileIcon,
  },
  {
    name: 'More',
    icon: MoreIcon,
  },
]

function Sidebar () {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between px-2">
      <div className='px-10 pl-40 pt-5'>
        <img src={twitterLogo} alt="Twitter Logo" className="w-[40px] h-[33px]"></img>
        <nav className="mb-5">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink key={name} name={name} İcon={icon} />
            ))}
          </ul>
        </nav>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-[90px] py-[15px] rounded-full shadow-lg transform focus:outline-none focus:shadow-outline duration-200 mx-auto font-bold	">
          Tweet
        </button>
      </div>
      <div>
        <UserShare />
      </div>
    </div>
 )
}

export default Sidebar;