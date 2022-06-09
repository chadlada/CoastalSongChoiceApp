import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { SongType } from '../types'
import { SingleSongFromList } from '../components/SingleSongFromList'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { getUser, isLoggedIn } from '../auth'

export function SongsLanding() {
  const user = getUser()
  const navigate = useNavigate()
  const [filterText, setFilterText] = useState('')
  const [songIds, setSongIds] = useState<Number[]>([])
  // state for songList???
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

  function inputChecked() {
    const newSongIds = Array.from(
      document.querySelectorAll<HTMLInputElement>('input:checked')
    ).map((element: HTMLInputElement) => {
      console.log(element)
      return Number(element.value)
    })
    setSongIds(newSongIds)
  }

  async function postSongIds() {
    const body = {
      id: 0,
      userId: 0,
      songId: 0,
      song: null,
      user: null,
      songs: null,
    }

    const response = await axios.post(
      'http://localhost:5000/api/SongList',
      body
    )
    if (response.status === 200) {
      setSongIds(response.data)
    }
  }

  async function _clickSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    inputChecked()
    //  Code (function) to POST new user songlist (songIds) to API
    postSongIds()
    navigate('/SongsList')
  }

  async function searchSubmit(event: { preventDefault: () => void }) {
    event?.preventDefault()
  }

  return (
    <>
      <br />
      <br />
      <p className="instructions-p">
        {isLoggedIn() ? <i>Welcome {user.fullName}!</i> : null}
        <br /> Check the songs you would like to request then click submit!
      </p>

      <button className="submitsongs" onClick={_clickSubmit}>
        Submit
      </button>

      <div className="checkbox">
        <span className="checkheader"> Songs </span>

        <form className="search" onSubmit={searchSubmit}>
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
    </>
  )
}
