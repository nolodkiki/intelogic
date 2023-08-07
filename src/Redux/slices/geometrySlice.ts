import { createAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'

interface GeometryState {
    geometry: string
    err: string
}


const initialState: GeometryState = {
    geometry: '',
    err: ''
}

export const geometrySlice = createSlice({
    name: 'geometry',
    initialState,
    reducers: {
        fetchGeometrySuccess: (state, action) => {
            state.geometry = action.payload
        },
        fetchGeometryError: (state, action) => {
            state.err = action.payload;
        }
    },
})


export const FETCH_GEOMETRY = 'geometry/fetchGeometry'
export const fetchGeometry = createAction<Array<{ lat: number; lng: number }>>(FETCH_GEOMETRY);
export const fetchGeometryError = createAction<string>('geometry/fetchGeometryError');


export const { fetchGeometrySuccess } = geometrySlice.actions

export const selectCount = (state: RootState) => state.geometry

export default geometrySlice.reducer