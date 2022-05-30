import React from 'react'
import { useQuery } from 'react-query'
import { SingleSongFromListUser } from '../components/SingleSongUser'
import { SongListType, SongType } from '../types'

export function SongsList() {
  const { data: songs = [] } = useQuery<SongListType[]>(
    'songs',
    async function () {
      const response = await fetch('/api/songlist')
      // await not needed since using react query
      return response.json()
    }
  )
  return (
    <>
      <h2 className="songslistheader">Here is your song list</h2>

      <div className="pandcheckbox">
        <div className="checkboxsongslist">
          <span className="checkheader"> Songs </span>

          {songs.map(function (song) {
            return (
              <SingleSongFromListUser
                key={song.id}
                song={song}
              ></SingleSongFromListUser>
            )
          })}
        </div>
      </div>
      <p className="songslistp">
        Let us know of any extra songs that may not have been on our list that
        you would like to include and we will do our best to learn it! <br />
        <br />
        chadlada@gmail.com
        <br />
      </p>
    </>
  )
}
