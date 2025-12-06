import { combineSlices } from '@reduxjs/toolkit'
import { mainSlice } from './features/mainSlice'
import { moviesApiSlice } from './features/moviesApiSlice'

export const apiSlices = [moviesApiSlice]

const rootReducer = combineSlices(mainSlice, ...apiSlices)

export default rootReducer
