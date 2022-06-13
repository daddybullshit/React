import { useState, useEffect, useCallback } from 'react'
import ArticleList from '../components/ArticleList'
import axios from 'axios'

const Articles = () => {
  const [articles, setArticles] = useState([])

  const getArticles = useCallback(async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setArticles(res.data)
  }, [])

  useEffect(() => {
    getArticles()
  }, [getArticles])

  return (
    <div>
      <h1>Articles</h1>
      <ArticleList articles={articles} />
    </div>
  )
}

export default Articles