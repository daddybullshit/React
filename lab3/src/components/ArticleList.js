import React from 'react'
import { Link } from 'react-router-dom'
import ArticleListItem from './ArticleListItem'

const ArticleList = ({articles}) => {
  return (
    <div>
      {
        articles.map(article => (
          <ArticleListItem key={article.id} article={article} />
        ))
      }
    </div>
  )
}

export default ArticleList