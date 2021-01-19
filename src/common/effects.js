import store from '../Redux/index'
import { createAction } from './utility'

export async function runEffect(action, effect, ...args) {
    const { type : actionType } = action

    const { dispatch } = store

    const axiosResponse = await effect(...args)

    console.log(axiosResponse)

    const isError = (axiosResponse.status >= 200 || axiosResponse.status < 300) ? false : true

    dispatch(
        createAction(`${actionType}_FINISHED`, axiosResponse.data, isError)
    )

    return axiosResponse
}