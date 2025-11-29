import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createApi } from 'store/createApi'

export type Movie = {
  page: number
  results: {
    id: number
    title: string
    poster_path: string
    overview: string
    release_date: string
  }[]
  total_pages: number
  total_results: number
}

export const moviesApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_BASE_URL
  }),
  reducerPath: 'moviesApi',
  endpoints: (builder) => ({
    getMovies: builder.query<Movie, undefined>({
      query: () =>
        `/3/discover/movie?${new URLSearchParams({
          api_key: 'd86a3eb18c343cc36e646ef97315445e',
          sort_by: 'popularity.desc',
          language: 'en-US'
        })}`
    })
  })
})

export const { useGetMoviesQuery } = moviesApiSlice
