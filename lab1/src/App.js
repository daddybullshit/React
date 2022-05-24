import { useState } from 'react'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import './App.css'

const App = () => {
  const [books] = useState([
    {
      id: 1,
      title: "The Bitcoin Standard",
      author: "Saifedean Ammous",
    },
    {
      id: 2,
      title: "Layered Money",
      author: "Nik Bhatia",
    },
    {
      id: 3,
      title: "The Bullish Case for Bitcoin",
      author: "Vijay Boyapati",
    },
    {
      id: 4,
      title: "Everything divided by 21 million",
      author: "Knut Svanholm",
    },
  ]);

  return (
    <div>
      <div className="bg-dark">
        <div className="container">
          <Navbar />
        </div>
      </div>

      <div className="container">
        <BookList books={books} />
      </div>
    </div>
  )
}

export default App