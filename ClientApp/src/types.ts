export type SongType = {
  id: number
  title: string
  artist: string
}

export type SongListType = {
  id: number
  userId: number
  songId: number
  title: string
  artist: string
}

export type NewUserType = {
  fullName: string
  email: string
  password: string
}
export type APIError = {
  errors: Record<string, string[]>
  status: number
  title: string
  traceId: string
  type: string
}
