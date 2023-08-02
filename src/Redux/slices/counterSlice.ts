import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { getGeometryApi } from '../../api/getGeometryApi'
import { call, put } from 'redux-saga/effects'

interface CounterState {
    geometry: string
}

export function* getGeometrySaga(action: PayloadAction<number[][]>): any {
    const points = action.payload;
    try {
        const response = yield call(getGeometryApi, points);
        const payload = yield response.json();
        yield put(getPointsSuccess(payload.routes[0].geometry));
    }
    catch (error) {
        console.error('Ошибка при получении маршрута:', error);
    }
}

const initialState: CounterState = {
    geometry: '',
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        getPointsSuccess: (state, action) => {
            state.geometry = action.payload
        }
    },
})


export const GET_GEOMETRY = 'counter/getGeometry'
export const getGeometry = createAction(GET_GEOMETRY)


export const { getPointsSuccess } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter

export default counterSlice.reducer