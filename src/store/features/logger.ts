import { Middleware } from '@reduxjs/toolkit'

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log('Dispatching action:', action)
  console.log('State before action:', store.getState())

  const result = next(action)

  console.log('State after action:', store.getState())

  return result
}

export default loggerMiddleware
