import React from 'react'
import { SongType } from '../types'

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
