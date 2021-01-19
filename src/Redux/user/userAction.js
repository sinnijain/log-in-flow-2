import { createAction } from "../../common/utility"

const UserActions = {
    REQUEST_REGISTER_USER: 'user/REQUEST_REGISTER_USER',
    REQUEST_REGISTER_USER_FINISHED: 'user/REQUEST_REGISTER_USER_FINISHED',

    registerUser(data) {
        return createAction(this.REQUEST_REGISTER_USER, data)
    }
}

export default UserActions