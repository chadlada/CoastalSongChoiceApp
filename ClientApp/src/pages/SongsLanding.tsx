import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { SongType } from '../types'
import { SingleSongFromList } from '../components/SingleSongFromList'
import { Link } from 'react-router-dom'

export function SongsLanding() {
  const [filterText, setFilterText] = useState('')

  const { data: songs = [] } = useQuery<SongType[]>(
    ['songs', filterText],
    async function () {
      const url =
        filterText.length === 0
          ? `/api/songs`
          : `/api/songs?filter=${filterText}`
      const response = await fetch(url)
      // await not needed since using react query
      console.log(response.json)
      return response.json()
    }
  )

  // function demo() {
  //   document.querySelectorAll('input:checked').forEach(element => {
  //     console.log(element.value);
  //   });
  // }

  async function _clickSubmit(event) {
    event.preventDefault()
    console.log(event)
    //  Code to POST new user songlist to API
  }

  return (
    <>
      <br />
      <br />

      <p className="instructions-p">
        Check the songs you would like to request then click submit!
      </p>

      <button className="submitsongs">Submit</button>

      <div className="checkbox">
        <span className="checkheader"> Songs </span>
        {/* <div className="leftside"> */}
        {/* <Link to="/SongsList">
        </Link> */}

        <form className="search" onSubmit={_clickSubmit}>
          <input
            className="searchbar"
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={function (event) {
              setFilterText(event.target.value)
            }}
          />
          <br />
          <br />
          {songs.map(function (song) {
            return (
              <SingleSongFromList
                key={song.id}
                song={song}
              ></SingleSongFromList>
            )
          })}
        </form>
      </div>
      {/* </div> */}
    </>
  )
}
