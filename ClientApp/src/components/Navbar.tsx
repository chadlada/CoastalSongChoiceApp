import React from 'react'
import { Link } from 'react-router-dom'
import { getUser, isLoggedIn, logout } from '../auth'

export function Navbar() {
  const user = getUser()
  function handleLogout() {
    logout()

    window.location.assign('/')
  }
  return (
    <>
      <div className="topnav">
        <Link to="/">Home</Link>

        {isLoggedIn() ? null : <Link to="/SignIn">Sign-In</Link>}
        {isLoggedIn() ? null : <Link to="/SignUp">Sign-Up</Link>}
        <Link to="/SongsList">MySongList</Link>

        {isLoggedIn() ? (
          <a
            href="/"
            className="link"
            onClick={function (event) {
              event.preventDefault()
              handleLogout()
            }}
          >
            Sign out
          </a>
        ) : null}
        <br />
        <br />
      </div>
    </>
  )
}
