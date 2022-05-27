import React from 'react'
import { SongType } from '../types'

// **This is for my SongList.. Should return a filtered list of the checked songs that the user chose**

export function SingleSongFromListUser(props: SingleSongFromListUserProps) {
  return (
    <label>
      {props.song.title} <br />
      &nbsp;&nbsp;&nbsp;&nbsp; <span>-{props.song.artist}</span>
    </label>
  )
}
type SingleSongFromListUserProps = {
  song: SongType
}
