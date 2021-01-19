import axios from 'axios'


export function createAction(type, payload = undefined, error = false, meta = null) {
    return { type, payload, error, meta }
}

export async function postData(data , endPoint) {
    return await axios.post(endPoint , data)
        .then(
            function(response) {
                return response
            }
        )
        .catch(
            function (error) {
                return error
            }
        );
}