import axios from 'axios';
//não usar localhost 
//usar endereço ip da máquina
const api = axios.create({
  baseURL: 'http://192.168.0.10:3333',
})

export default api;
