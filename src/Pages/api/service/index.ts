import axios from "axios";

// const apiURL = ' "http://cc-surgical-center-information-api.azr-hml02.dasaexp.io/v1/";'
const apiURL = 'http://localhost:3002/v1/'


const baseApi = axios.create({
  baseURL: apiURL
})

const fetchData = async path => {
  const response = await fetch(`${apiURL}/${path}`)
  return await response.json()
}

export default baseApi
