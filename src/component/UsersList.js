import *  as React from 'react'
import UserProfile from './UserProfile';
import { CustomLoadingSpinner } from './CustomLoadingSpinner';

const UsersList = ({ users, setSelectedUser, isLoading }) => {
  const [selectedIdx, setSelectedIdx] = React.useState(null);
  /*   const MemoizedUserProfile = React.memo(UserProfile); */
  console.log(isLoading)
  return (
    <div className="overflow-y-auto scrollbar-hidden md:flex-1 flex-none relative">
      {isLoading && <div data-testid="custom-loading-spinner"><CustomLoadingSpinner /></div>}
      {!isLoading && users && users.length === 0 && (
        <div className='absolute bottom-[50%] left-[50%]'>
          <p>No users</p>
        </div>
      )}
      {users?.length > 0 &&
        users.map((user, index) => (
          <div
            key={user.id}
            className={`flex ${selectedIdx === index ? 'selected' : ''}`}
            onClick={() => {
              setSelectedUser(user)
              setSelectedIdx(index)
            }}
          >
            <UserProfile user={user} />
          </div>
        )
        )}
    </div>
  );
}

export default UsersList;
