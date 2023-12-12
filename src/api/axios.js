import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "883dca46da94a50d91361fd65b7bb094",
    language: "ko-KR"
  }
})

export default instance;