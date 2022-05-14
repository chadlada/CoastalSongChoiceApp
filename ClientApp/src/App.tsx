import React from 'react'
import { SongsLanding } from './pages/SongsLanding'
import git from './images/GitHub-Mark.png'
import linkedin from './images/linkedin.png'

export function App() {
  return (
    <>
      <header>
        <h1>Coastal Collective Song List</h1>
      </header>
      <SongsLanding></SongsLanding>
      <footer>
        <div className="footer">
          <span className="link">
            <a href="https://www.linkedin.com/in/chad-lada-a01036105/">
              <img src={linkedin} alt="linkedin" width="50" height="50" />
            </a>
          </span>
          <h2>Created by Chad Lada</h2>
          <span className="git">
            <a href="https://github.com/chadlada">
              <img src={git} alt="github" width="50" height="50" />
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}
