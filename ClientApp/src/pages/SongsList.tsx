import React from 'react'

export function SongsList() {
  return (
    <>
      <h2 className="songslistheader">Here is your song list</h2>
      <div className="songslistform">
        <p className="songslistp">
          Let us know of any extra songs that may not have been on our list that
          you would like to include and we will do our best to learn it! <br />
          <br />
          Include the song title and artist <br />
        </p>
        <br />
        <textarea
          className="textarea"
          placeholder="e.g. Freebird by Lynrd Sknyrd"
        ></textarea>
        <br />
        <br />
        <input type="submit" value="Submit" />
        <p className="newsongslist">List of songs will go here</p>
      </div>
    </>
  )
}
