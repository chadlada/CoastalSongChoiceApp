import React from 'react'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <>
      <div className="topnav">
        <Link to="/">Home</Link>
        <Link to="/SignIn">Sign-In</Link>
        <Link to="/SignUp">Sign-Up</Link>
        <Link to="/SongsList">MySongList</Link>
      </div>
    </>
  )
}
