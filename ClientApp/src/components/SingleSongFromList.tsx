import React from 'react'
import { SongType } from '../types'

export function SingleSongFromList(props: SingleSongFromListType) {
  return (
    <label>
      <input type="checkbox" />
      {props.song.title} <br />
      &nbsp;&nbsp;&nbsp;&nbsp; <span>-{props.song.artist}</span>
    </label>
  )
}
type SingleSongFromListType = {
  song: SongType
}
