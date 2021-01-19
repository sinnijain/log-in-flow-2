import UserActions from './userAction'

const initialState = {
    user: {},
    userAdded: false,
}
  
export default function userReducer(state = initialState, action) {
    switch (action.type) {

        case UserActions.REQUEST_REGISTER_USER_FINISHED :
            return {
                ...state,
                user: action.payload,
                userAdded: !!action.payload
            }
        
            default:
                return state

    }
}