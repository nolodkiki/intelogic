import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import geometry, { FETCH_GEOMETRY } from './slices/geometrySlice'
import routes, { FETCH_ROUTES, } from './slices/routesSlice'
import { takeEvery } from "redux-saga/effects";
import { fetchGeometrySaga, fetchRouteSaga } from './sagas';


const sagaMiddleware = createSagaMiddleware()

function* sagas() {
    yield takeEvery(FETCH_GEOMETRY, fetchGeometrySaga)
    yield takeEvery(FETCH_ROUTES, fetchRouteSaga)
}

export const store = configureStore({
    devTools: true,
    reducer: {
        geometry,
        routes
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(sagas)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch