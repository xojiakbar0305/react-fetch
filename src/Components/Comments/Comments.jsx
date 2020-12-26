import { useEffect, useState } from 'react'
import { Route, useLocation} from 'react-router-dom'
import Loader from '../Loader/Loader'

function Comments () {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [comments, setComments] = useState([])
  const location = useLocation()

  useEffect(() =>{

    async function getCommets() {

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com${location.pathname}`)

        const json = await response.json()

        setLoading(false)
        setComments(json)
      }
      catch (error) {
        setError(error)
      }

    }

    getCommets()

  }, [
    location.pathname,
  ])

  return (
    <>
      <h2>Comments</h2>
      {
        loading && !error && <Loader/>
      }
      {
        error && <>{error.message}</>
      }
      
      <Route path={location.pathname} exact>
        {
          comments.length > 0 && <ul>
            {
              comments.map(comment => <li key={comment.id}>
                <h4>{comment.name}</h4>
                
                <p>{comment.body}</p>
                <p>E-mail: {comment.email}</p>
              </li>)
            }
          </ul>
        }
      </Route>
    </>
  )
}

export default Comments