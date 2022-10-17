import 'isomorphic-fetch'

const BASE_URL = process.env.BACKEND_BASE_URL

export type ErrorCallApiResponse = { status: number; message: string }
export type SuccessCallApiResponse = { results: unknown }

export type CallApiResponse = { response?: SuccessCallApiResponse; error?: ErrorCallApiResponse }

export default (endpoint: string, params: RequestInit): Promise<CallApiResponse> => {
  const url = new URL(`${BASE_URL}${endpoint}`)
  return fetch(url.href, params)
    .then((response) => {
      return response
        .json()
        .then((json) => ({ json, response }))
        .catch((error) => {
          Object.assign(error, { message: 'Unexpected reponse from the server', status: 404 })
          return Promise.reject(error)
        })
    })
    .then(({ json, response }) => {
      if (!response.ok) {
        const error = { message: json.message || 'Internal Server Error', status: response.status }
        return Promise.reject(error)
      }
      return json
    })
    .then(
      (response) => ({ response }),
      (error) => ({ error: { status: error.status, message: error.message || 'Something bad happened' } })
    )
}
