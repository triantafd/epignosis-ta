import *  as React from 'react'

const useFetchUsers = () => {
  const [users, setUsers] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/ThrasyvoulosKafasis/epignosis-users/db');
        if (!response.ok) {
          throw new Error('Response was not ok');
        }
        const data = await response.json();
        setUsers(data.users)
      } catch (error) {
        setError(error)
      }
      finally {
        setIsLoading(false)
      }
    }

    fetchData();
  }, [])

  return { users, isLoading, error, setUsers };
}
export default useFetchUsers