import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { carregaTopo } from '../../../services/carregaDados';

import foto from './../../../assets/IMG_1268.png'

class Topo extends React.Component {

    

    state = {
        topo: {
            nome: '',
            descricao: '',
        }
    }

    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({ topo: retorno });
    }

    componentDidMount() {
        this.atualizaTopo();
    }

    render() {
        return <View style={estilos.topo}>
        <Image source={foto} style={estilos.foto} />
        <Text style={estilos.nome}>{ this.state.topo.nome }</Text>
        <Text style={estilos.descricao}>{ this.state.topo.descricao }</Text>
      </View>
   }
}

const estilos = StyleSheet.create({

    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16,
        alignItems:'center'

    },
    nome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        textAlign:'center'
    },
    descricao: {
        fontSize: 16,
        lineHeight: 26,
        textAlign:'center',
        paddingTop:10
    },
    foto: {
        width: 150,
        height: 200, 
        marginTop: 50,
        borderRadius:90
               
    }
}); 


export default Topo;