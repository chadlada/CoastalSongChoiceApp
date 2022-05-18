import React from 'react'
import { useQuery } from 'react-query'
import { SingleSongFromList } from '../components/SingleSongFromList'
import { SongType } from '../types'

export function SongsList() {
  const { data: songs = [] } = useQuery<SongType[]>('songs', async function () {
    const response = await fetch('/api/songs')
    // await not needed since using react query
    return response.json()
  })
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
          placeholder="e.g. Freebird by Lynrd Sknyrd, Photograph by NickelBack"
        ></textarea>
        <br />
        <br />
        <input className="submitsongslist" type="submit" value="Submit" />

        <div className="pandcheckbox">
          <p className="deletesongsp">
            Any songs you would like to remove from your list just checkmark
            those songs then click delete button to update your list <br />
            <input className="deletesongslist" type="submit" value="Delete" />
          </p>
          <div className="checkboxsongslist">
            <span className="checkheader"> Songs </span>

            {songs.map(function (song) {
              return (
                <SingleSongFromList
                  key={song.id}
                  song={song}
                ></SingleSongFromList>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
