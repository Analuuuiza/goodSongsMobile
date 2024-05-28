import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";


import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Footer from "../components/Footer";


interface Musica {

    id: number;
    titulo:string;
    duracao:number;
    artista:string;
    genero:string;
    nacionalidade:string;
    ano_lancamento:string;
    album:string;
}

const renderItem = ({ item }: { item:Musica}) => (
   
    
        
        <View style={styles.container}>

            <Text style={styles.headerText}>{item.artista}</Text>
         {item.titulo}
         
         {item.genero}
        
        </View>
   
);

function VizualizarMusica(): React.JSX.Element {
    const [musicas, setMusicas] = useState<Musica[]>([]);

    //const navigation = useNavigation();
    //const route = useRoute();

    useEffect(() => {
        listarMusicas();
    }, []); 

    const listarMusicas = async () => {
        try {
            const response = await axios.get('http://10.137.11.222:8000/api/musica/retornarTodasMusicas');
            if (response.status === 200) {
                setMusicas(response.data); 
                 console.log(response.data);
            }
            
        } catch (error) {
            
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
             <FlatList
                showsVerticalScrollIndicator={false}
                data={musicas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
               
            />
            <Footer/>
        </View> 
              
);
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#292838'
    },
    header: {
        backgroundColor: '#292838',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold',

    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10,
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    menuList: {
        flexGrow: 1
    }

})

export default VizualizarMusica;