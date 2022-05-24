import { useState } from 'react'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => {
    setIsLoggedIn(state => true)
  }

  return (
    <div className="navbar">
      <h1 className="logo">Awesome Books</h1>
      <div className="user">
        { isLoggedIn ? 'David' : <button onClick={login}>Login</button> }
      </div>
    </div>
  )
}

export default Navbar