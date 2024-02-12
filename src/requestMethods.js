import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

//const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2E0YzJlOTg2YjJmYjYwY2UwZGEwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzc1NjY1OCwiZXhwIjoxNzA4MDE1ODU4fQ.oT1XT1CnY_LGYmfWw-XGSh_XqkMblOUuyJLvknKkpaw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});