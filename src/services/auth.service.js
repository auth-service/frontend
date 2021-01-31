import axios from "axios";

const instance = axios.create({
    baseURL: 'https://airasia-auth-service-backend.herokuapp.com/api/auth',
    headers: {
        'content-type':'application/json'
    },
});

// eslint-disable-next-line
export default {
    signup: (req) =>
        instance({
            'method': 'POST',
            'url': '/signup',
            'data': JSON.stringify(req),
            transformResponse: function (data) {
                const item = JSON.parse(data)
                return item;
            }
        })
}