import UserActions from './userAction'
import { all , call, put, takeEvery } from 'redux-saga/effects'
import { createAction } from '../../common/utility'
import { runEffect } from '../../common/effects'
import UserEffects from './userEffects'

export function* REGISTER_USER(action) {
    
    // const axiosResponse = yield call(UserEffects.registerUser , {formData: action.payload} )
    // console.log(axiosResponse)
    // if(axiosResponse.status >= 200 || axiosResponse.status < 300 )
    //     yield put(createAction(`${action.type}_FINISHED` , axiosResponse.data))

    yield call(runEffect , action , UserEffects.registerUser , { formData: action.payload })
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(UserActions.REQUEST_REGISTER_USER, REGISTER_USER)
    ])
}