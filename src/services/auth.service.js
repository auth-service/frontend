import axios from "axios";

const instance = axios.create({
  baseURL: 'https://airasia-auth-service-backend.herokuapp.com/api/auth',
  // baseURL: "http://localhost:1026/api/auth",
  headers: {
    "content-type": "application/json",
    crossDomain: true,
  },
});

// eslint-disable-next-line
export default {
  signup: (req) =>
    instance({
      method: "POST",
      url: "/signup",
      data: JSON.stringify(req),
      transformResponse: function (data) {
        const item = JSON.parse(data);
        return item;
      },
    }),
  login: (req) =>
    instance({
      method: "POST",
      withCredentials: true,
      url: "/login",
      data: JSON.stringify(req),
      transformResponse: function (data) {
        const item = JSON.parse(data);
        return item;
      },
    }),
};
