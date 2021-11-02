import callApi from './callApi'

export const movies = () => {
  return callApi(
    `/3/discover/movie?${new URLSearchParams({
      api_key: 'd86a3eb18c343cc36e646ef97315445e',
      sort_by: 'popularity.desc',
      language: 'en-US'
    })}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
  )
}
