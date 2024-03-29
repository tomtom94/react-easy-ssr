/* global fetch */

import 'isomorphic-fetch'

// const BASE_URL = process.env.BACKEND_BASE_URL ? `${process.env.BACKEND_BASE_URL}` : 'http://localhost:3002'

const BASE_URL = 'https://api.themoviedb.org' // It should be here your backend server url !

export default (endpoint, params) => {
  const url = new URL(`${BASE_URL}${endpoint}`)
  return fetch(url.href, params)
    .then(response => {
      return response.json().then(json => ({ json, response }))
    })
    .then(({ json, response }) => {
      if (!response.ok) {
        const error = { message: json.message || 'Internal Server Error', status: response.status }
        return Promise.reject(error)
      }
      return json
    })
    .then(
      response => ({ response }),
      error => ({ error: { status: error.status, message: error.message || 'Something bad happened' } })
    )
}
