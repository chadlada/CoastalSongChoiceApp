import React from 'react'

export function Users() {
  return (
    <>
      <h1 className="users">USERS!</h1>
      <div className="forms">
        <form>
          <label>
            Enter your name:
            <input type="text" />
          </label>
          <label>
            Enter your email:
            <input type="text" />
          </label>
        </form>
      </div>
    </>
  )
}
