import React from 'react'
import { SongType } from '../types'

// **For landing page. Contains the checkboxes**

export function SingleSongFromList(props: SingleSongFromListProps) {
  return (
    <label>
      <input type="checkbox" value={props.song.id} className="single-song" />
      {props.song.title} <br />
      &nbsp;&nbsp;&nbsp;&nbsp;{' '}
      <span>
        -{props.song.artist}
        <br></br>
      </span>
    </label>
  )
}
type SingleSongFromListProps = {
  song: SongType
}
