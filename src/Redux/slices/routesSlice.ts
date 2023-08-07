import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { dataRoutes } from '../../assets/data';

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
    routes: dataRoutes,
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
        setActiveRoute: (state, action) => {
            state.activeRoute = action.payload
        }
    },
})



export const { setActiveRoute } = routesSlice.actions

export const selectCount = (state: RootState) => state.routes

export default routesSlice.reducer