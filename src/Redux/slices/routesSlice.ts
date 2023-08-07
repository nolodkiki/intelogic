import { createAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'

export interface Route {
    id: number;
    name: string;
    points: Array<{ lat: number; lng: number }>
}

interface RoutesData {
    routes: Route[];
    activeRoute: Route;
}

const initialState: RoutesData = {
    routes: [],
    activeRoute: {
        id: 0,
        name: '',
        points: []
    }
}

export const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        fetchRoutesSuccess: (state, action) => {
            state.routes = action.payload
        },
        setActiveRoute: (state, action) => {
            state.activeRoute = action.payload
        }
    },
})

export const FETCH_ROUTES = 'counter/fetchRoutes'
export const fetchRoutes = createAction(FETCH_ROUTES)


export const { fetchRoutesSuccess, setActiveRoute } = routesSlice.actions

export const selectCount = (state: RootState) => state.routes

export default routesSlice.reducer