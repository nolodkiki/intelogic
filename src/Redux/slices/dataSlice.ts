import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { call, put } from 'redux-saga/effects'
import { getDataApi } from '../../api/getDataApi';

interface Route {
    key: number;
    name: string;
    point1: [number, number];
    point2: [number, number];
    point3: [number, number];
}

interface RoutesData {
    data: Route[];
}

export function* getDataSaga(): any {
    try {
        const response = yield call(getDataApi)
        const payload = yield response.json()
        console.log(payload.data)
        yield put(getDataSuccess(payload.data))
    }
    catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}



const initialState: RoutesData = {
    data: []
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        getDataSuccess: (state, action) => {
            state.data = action.payload
        }
    },
})

export const GET_DATA = 'counter/getData'
export const getData = createAction(GET_DATA)


export const { getDataSuccess } = dataSlice.actions

export const selectCount = (state: RootState) => state.data

export default dataSlice.reducer