import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

interface Produto {
    id: number;
    titulo:string;
    duracao:string;
    artista:string;
    genero:string;
    nacionalidade:string;
    ano_lancamento:string;
    album:string;
}


function PesquisarMusica(): React.JSX.Element {

    const navigation = useNavigation();

    const produtos: Produto[] = [
        {
            id: 1,
            titulo: 'Creu',
            duracao: '3',
            artista: 'ana',
            genero: 'funk',
            nacionalidade: 'brasileira',
            ano_lancamento: '2024-05-28',
            album: 'danca do creu',
        },
        {
            id: 2,
            titulo: 'Palavras do corpo',
            duracao: '2',
            artista: 'Gal Costa',
            genero: 'MPB',
            nacionalidade: 'brasileira',
            ano_lancamento: '2001-02-18',
            album: 'Palavras',
        },
    ]

    const selecionarMusica = (musica: Musica) => {
        navigation.navigate('EditarMusica', {musica});
    }

    const renderItem = ({item}: {item: Musica}) => {
        return (
            <TouchableOpacity style={styles.menuItem}
               onPress={() => selecionarMusica(item)}
            >

                <View style={styles.itemDetalis}>
                    <Text style={styles.name}>{item.titulo}</Text>
                    <Text style={styles.description}>{item.ingredientes}</Text>
                    <Text style={styles.price}>{item.preco}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
       <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle="light-content"/>
            <Head />
                <FlatList
                data={produtos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
                contentContainerStyle={styles.menuList} 
                />
                <Footer /> 
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 10
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 5
    },
    itemDetalis: {
        marginLeft: 10,
        flex: 1
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
        color: '#666'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    menuList: {
        flexGrow: 1
    }

})

export default PesquisarMusica;