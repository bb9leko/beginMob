import { Button, Text, TouchableOpacity, View } from "react-native"
import api from "../services/api"



export default function SegundaTela() { 

    function Busca() {
        api.get('/users').then(
            response => { 
                console.log(response.data)
           }
        ).catch(error => {
            console.log(error)
        })
    }


       return <View>
       <Text>Teste API</Text>
       <Button title="Teste" onPress={Busca}>Teste</Button>
    </View>
}