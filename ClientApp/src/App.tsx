import React from 'react'
import { SongsLanding } from './pages/SongsLanding'
// import { SongsList } from './pages/SongsList'
// import { Users } from './pages/Users'
import git from './images/GitHub-Mark.png'
import linkedin from './images/linkedin.png'
import { SongsList } from './pages/SongsList'

export function App() {
  return (
    <>
      <header>
        <h1 className="header">Coastal Collective Song List</h1>
      </header>
      <SongsList />
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
