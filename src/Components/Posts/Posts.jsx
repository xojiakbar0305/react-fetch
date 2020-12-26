import { useEffect, useState } from 'react'
 
import './posts.css'

import Loader from '../Loader/Loader'

function Posts ({ count }) {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const [error, setError] = useState(null)

  const [href, setHref] = useState('')

  useEffect(() => {

    async function getPosts () {

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await response.json()

        setData(json.slice(0, count))

        setLoading(false)
      }
      catch(error) {
        setError(error)
      }

    }

    getPosts()

  }, [
    count,
  ])

  return (
    <>
      <h2>Posts</h2>
      {
        loading && !error && <Loader />
      }

      {
        error && <>{error.message}</>
      }

      {
        data.length > 0 && <ul className='site-posts-item'>
          {
            data.map(post => <li key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              <a id={post.id} href={href} onClick={e => {
                setHref(`/posts/${e.currentTarget.id}/comments`)
              }}>Comments</a>
            </li>)
          }
        </ul>
      }
    </>
  )
}

export default Posts