import React from 'react'

// import { Users } from './pages/Users'
import { SongsLanding } from './pages/SongsLanding'
import git from './images/GitHub-Mark.png'
import linkedin from './images/linkedin.png'
import { SongsList } from './pages/SongsList'
import { Route, Routes } from 'react-router'
import { Navbar } from './components/Navbar'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'

export function App() {
  return (
    <>
      <header>
        <h1>Coastal Collective</h1>
      </header>
      <Navbar />

      <Routes>
        <Route path="/" element={<SongsLanding />} />
        <Route path="/SongsList" element={<SongsList />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <footer>
        <div className="footer">
          <span className="link">
            <a href="https://www.linkedin.com/in/chad-lada-a01036105/">
              <img
                src={linkedin}
                className="linkimage"
                alt="linkedin"
                width="50"
                height="50"
              />
            </a>
          </span>
          <h2>Created by Chad Lada</h2>
          <span className="git">
            <a href="https://github.com/chadlada">
              <img
                src={git}
                className="gitimage"
                alt="github"
                width="50"
                height="50"
              />
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}
