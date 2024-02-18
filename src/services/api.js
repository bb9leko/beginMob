import axios from "axios";

const api = axios.create ({
    //substituir pelo endereco IP da maquina 
    baseURL: "http://192.168.0.44:3000"
        
})

export default api;



