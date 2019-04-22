import axios from 'axios'

const api = axios.create({ //cria uma  instância do axios
  baseURL: 'https://backend-app-omnistack.herokuapp.com'
})

export default api