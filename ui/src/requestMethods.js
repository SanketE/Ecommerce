import axios from "axios";


const BASE_URL = "http://localhost:5000/api/"

const TOKEN  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDdhM2VjOTExNmEzYjYxOWQ5NjkzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMjIwNTczMSwiZXhwIjoxNzEyNDY0OTMxfQ.tEHeuuKDpKvBxokMGplLL7tZBiUagR9vDcPCUKWlouE"


export const publicRequest = axios.create({
    baseURL : BASE_URL,
});


export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers: {token: `Bearer ${TOKEN}` }
});