import { useEffect, useState, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Article = () => {

  const { id } = useParams()
  const [article, setArticle] = useState()

  const getArticle = useCallback(async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    setArticle(res.data)
  }, [id])

  useEffect(() => {
    getArticle()
  }, [getArticle])

  return (
    <div className='article'>
      { article &&
        <div>
          <h1>{article.title}</h1>
          <div className="card">
            <p>{article.body}</p>
            <Link to="/articles">Back</Link>
          </div>
        </div>
      }
    </div>
  )
}

export default Article
