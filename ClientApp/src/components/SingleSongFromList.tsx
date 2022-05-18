import React from 'react'
import { SongType } from '../types'

export function SingleSongFromList(props: SingleSongFromListProps) {
  return (
    <label>
      <input type="checkbox" />
      {props.song.title} <br />
      &nbsp;&nbsp;&nbsp;&nbsp; <span>-{props.song.artist}</span>
    </label>
  )
}
type SingleSongFromListProps = {
  song: SongType
}
