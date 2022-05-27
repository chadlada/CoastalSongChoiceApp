import React, { useState } from 'react'

export function SignUp() {
  const [name, setName] = useState('')

  return (
    <>
      <p className="p-signup">Sign Up Page</p>

      <div className="signup-form">
        <form>
          <label>
            Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </form>
      </div>
    </>
  )
}
