import API from "../../common/API";
import { postData } from "../../common/utility";


export default class UserEffects {
    static registerUser( {formData} ) {
        return postData( formData , API.userApi )
    }
}