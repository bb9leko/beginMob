//Criando  um hook 
import { useState, useEffect } from "react";

import { carregaCorpo } from './../services/carregaDados';

export default function useBody() { 

    const[titulo, setTitulo] = useState('');
    const[lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaCorpo(); 
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
        console.log(retorno)
    }, []);

    return [titulo, lista];
    
} 