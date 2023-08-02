import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import counter, { GET_GEOMETRY, getGeometrySaga } from './slices/counterSlice'
import data, { GET_DATA, getDataSaga } from './slices/dataSlice'
import { takeEvery } from "redux-saga/effects";


const sagaMiddleware = createSagaMiddleware()

function* sagas() {
    yield takeEvery(GET_GEOMETRY, getGeometrySaga)
    yield takeEvery(GET_DATA, getDataSaga)
}

export const store = configureStore({
    devTools: true,
    reducer: {
        counter,
        data
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(sagas)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch