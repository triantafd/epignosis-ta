import *  as React from 'react'
import { fetchUserProfiles } from '../services/userProfiles'

const useFetchUsers = () => {
  const [users, setUsers] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUserProfiles()
        setUsers(response)
      } catch (error) {
        /*  setError(error) */
        console.log(error)
        setUsers([])
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