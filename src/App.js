import *  as React from 'react'
import useFetchUsers from './hooks/useFetchUsers';
import './index.css';
import UsersList from './component/UsersList';
import UserForm from './component/UserForm';

function App() {
  //A custom hook similar to how reactQuery works
  const { users, isLoading, error, setUsers } = useFetchUsers()
  const [selectedUser, setSelectedUser] = React.useState({})
  /*   const MemoizedUserForm = React.memo(UserForm); */
  /*   const memoizedSelectedUser = React.useMemo(() => selectedUser, [selectedUser]); */

  if (error) {
    return <p>Error: {error.message}</p>;
  } else {
    return (
      /* Global Container */
      <div className='bg-[#F5F5F5]'> {/* whitesmoke */}
        <div className="flex items-center justify-center min-h-screen max-w-7xl  mx-auto">
          {/* Inner Container */}
          <div
            className="container flex h-[500px] bg-white shadow-2xl"
          >
            {/* Photos and Form */}
            <div
              className="flex flex-row w-full"
            >
              {/* Photos and profile info  */}
              <UsersList users={users} setSelectedUser={setSelectedUser} isLoading={isLoading} />
              {/* Form  */}
              <UserForm selectedUser={selectedUser} setUsers={setUsers} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
