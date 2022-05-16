import React from 'react'
import { useQuery } from 'react-query'
import { SongType } from '../types'
import { SingleSongFromList } from '../components/SingleSongFromList'

export function SongsLanding() {
  const { data: songs = [] } = useQuery<SongType[]>('songs', async function () {
    const response = await fetch('/api/songs')
    // await not needed since using react query
    return response.json()
  })

  return (
    <>
      <div className="submit-par">
        <button>Submit</button>

        <p>Check off the songs you would like to request then click submit!</p>
      </div>

      <br />
      <br />
      <div className="checkbox">
        <span className="checkheader"> Songs </span>

        {songs.map(function (song) {
          return (
            <SingleSongFromList key={song.id} song={song}></SingleSongFromList>
          )
        })}
      </div>
    </>
  )
}
