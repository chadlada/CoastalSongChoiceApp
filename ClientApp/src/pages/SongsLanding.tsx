import React from 'react'
import { useQuery } from 'react-query'
import { SongType } from '../types'

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
            <label key={song.id}>
              <br />
              <br />
              <input type="checkbox" />
              {song.title} <br />
              &nbsp;&nbsp;&nbsp;&nbsp; <span>-{song.artist}</span>
            </label>
          )
        })}
        {/* <label>
          <span className="checkheader"> Songs </span>
          <br />
          <br />
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label>
          <input type="checkbox" />
          1,000 Years <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Christina Perri</span>
        </label>
        <label>
          <input type="checkbox" />
          Could you be loved <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Bob Marley</span>
        </label>
        <label>
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label>
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label>
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label>
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label>
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label>
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label>
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label>
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label className="l1">
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label>
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label>
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label>
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label>
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label>
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label>
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label>
        <label>
          <input type="checkbox" />
          Cant Help Falling In Love <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <span>-Elvis Presley</span>
        </label> */}
      </div>
    </>
  )
}
