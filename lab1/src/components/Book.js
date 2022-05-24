import { useState } from 'react'

const Book = ({ title, author }) => {
  const [isFinished, setIsFinished] = useState(false)

  const toggleFinished = () => {
    setIsFinished(state => !state)
  }

  return (
    <div className={isFinished ? 'book finished' : 'book'} onClick={toggleFinished}>
      <em style={{ float: 'right' }}>{isFinished ? 'Finished' : 'Unread'}</em>
      <h2 className="title">{title}</h2>
      <p className="author">{author}</p>
    </div>
  )
}

export default Book