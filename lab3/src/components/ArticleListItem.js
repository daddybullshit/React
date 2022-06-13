import React from 'react'
import { Link } from 'react-router-dom'

const ArticleListItem = ({ article }) => {
  return (
    <div className="article-list-item card">
      <Link to={`/articles/${article.id}`}>
        {article.title}
      </Link>
    </div>
  )
}

export default ArticleListItem