import user from './user/userSaga'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        user(),
    ])
}