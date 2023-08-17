import *  as React from 'react'

const UserProfile = ({ user }) => {
  return (
    /*   Photos  */
    <div className={`flex align-center text-center pt-2 pb-2 px-4`}>
      <img src={user.photo} className="w-[50px] h-[50px] borderRad50Prc" alt="Profile pic" />
      {/*    profile info  */}
      <div className="hidden md:block">
        <div className='flex flex-col ml-4 md:none justify-center '>
          <p className="font-medium text-md text-start">{user.name}</p>
          <p className="text-gray-500 text-sm text-start">{user.email}</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;
