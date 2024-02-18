import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from 'react-native'; 
import { api } from '../../../services/api';

//import { carregaCorpo } from './../../../services/carregaDados';

import useBody from "../../../hooks/useBody";

export default function Body( { topo : Topo}) { 

    const [titulo, lista] = useBody();

    // const[titulo, setTitulo] = useState('');
    // const[lista, setLista] = useState([]);

    // useEffect(() => {
    //     const retorno = carregaCorpo(); 
    //     setTitulo(retorno.titulo);
    //     setLista(retorno.lista);
    //     console.log(retorno)
    // }, []); 

    const TopoLista = () => {
        return <> 
            <Topo /> 
            <Text style={estilos.nome}>{ titulo }</Text>
        </> 
    }

    return <FlatList 
            data={lista} 
            renderItem={({item: {nome}}) => <Text style={estilos.lista}>{ nome }</Text>}            
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={TopoLista} />

}

const estilos = StyleSheet.create({

    nome: {
        backgroundColor: '#F6F6F6',
        padding: 16,
        alignItems:'center',
        fontWeight:'bold'

    },
    lista: {
        marginTop: 24,
        fontWeight: 'bold',
        textAlign:'center'
    }    
})