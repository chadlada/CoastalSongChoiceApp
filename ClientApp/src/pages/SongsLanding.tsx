import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { SongType } from '../types'
import { SingleSongFromList } from '../components/SingleSongFromList'

export function SongsLanding() {
  const [filterText, setFilterText] = useState('')

  const { data: songs = [] } = useQuery<SongType[]>(
    ['songs', filterText],
    async function () {
      const url =
        filterText.length === 0
          ? '/api/songs'
          : '/api/songs?filter=${filterText}'
      const response = await fetch(url)
      // await not needed since using react query
      return response.json()
    }
  )

  return (
    <>
      <div className="submit-par">
        <button>Submit</button>

        <p>Check off the songs you would like to request then click submit!</p>
      </div>
      <form className="search">
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={function (event) {
            setFilterText(event.target.value)
          }}
        />
      </form>

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
