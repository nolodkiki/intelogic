import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import { fetchGeometryError, fetchGeometrySuccess } from '../slices/geometrySlice';
import { fetchGeometryApi } from '../../api/fetchGeometryApi';

export function* fetchGeometrySaga(action: PayloadAction<{ lat: number, lng: number }[]>): any {
    try {
        const response = yield call(fetchGeometryApi, action.payload);
        const payload = yield response.json();
        if (Array.isArray(payload.routes) && payload.routes.length > 0) {
            yield put(fetchGeometrySuccess(payload.routes[0]?.geometry));
        } else {
            console.error('Массив маршрутов пуст или не существует.');
            yield put(fetchGeometryError('Массив маршрутов пуст или не существует.'));
        }
    }
    catch (error) {
        console.error('Ошибка при получении маршрута:', error);
        yield put(fetchGeometryError('Произошла ошибка при получении маршрута'));
    }
}

