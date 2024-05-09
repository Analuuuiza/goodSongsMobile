import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from "axios";

const CadastroMusica: React.FC = () => {
    const [musicas, setMusicas] = useState<Musica[]>([]);
    const [titulo, setTitulo] = useState<string>('');
    const [duracao, setDuracao] = useState<string>('');
    const [artista, setArtista] = useState<string>('');
    const [genero, setGenero] = useState<string>('');
    const [nacionalidade, setNacionalidade] = useState<string>('');
    const [ano_lancamento, setAno_lancamento] = useState<string>('');
    const [album, setAlbum] = useState<string>('');

        try{
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('duracao', duracao);
        formData.append('artista', artista);
        formData.append('genero', genero);
        formData.append('nacionalidade', nacionalidade);
        formData.append('ano_lancamento', ano_lancamento);
        formData.append('album', album);
        

        
        const response = await axios.post('http://10.137.11.229:8000/api/cadastros', formData ,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

    }catch(error) {
            console.log(error);
        }

    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFE337" barStyle="light-content" />
            <View style={styles.header}>
            </View>
           <ScrollView>
            <View style={styles.form}>
                <Text style={styles.title}>Cadastrar Músicas</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Título"
                    value={titulo}
                    onChangeText={setTitulo} 
                    />
                <TextInput
                    style={styles.input}
                    placeholder="Duração"
                    value={duracao}
                    onChangeText={setDuracao} 
                    />
                <TextInput 
                    style={styles.input}
                    placeholder="Artista"
                    value={artista}
                    onChangeText={setArtista} 
                    multiline 
                    />
                <TextInput
                    style={styles.input}
                    placeholder="Gênero"
                    value={genero}
                    onChangeText={setGenero} 
                    multiline 
                    />
                <TextInput
                    style={styles.input}
                    placeholder="Nacionalidade"
                    value={nacionalidade}
                    onChangeText={setNacionalidade} 
                    multiline 
                    />
                <TextInput
                    style={styles.input}
                    placeholder="Ano de Lançamento"
                    value={ano_lancamento}
                    onChangeText={setAno_lancamento} 
                    multiline 
                    />
                <TextInput
                    style={styles.input}
                    placeholder="Álbum"
                    value={album}
                    onChangeText={setAlbum} 
                    multiline 
                    />

                <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{ uri: imagem }} style={styles.imagemSelecionada} /> : null}
                </View>
                <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                    <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imageButtonText}>Tirar Foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={cadastrarCliente}>
                    <Text style={styles.buttonText}>Cadastrar Cliente</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            <View style={styles.footer}>
            <TouchableOpacity>
                <Image 
                source={require('../assets/image/home.png')}
                style={styles.footerIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('../assets/image/pedido.png')}
                style={styles.footerIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('../assets/image/perfil.png')}
                style={styles.footerIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('../assets/image/menu.png')}
                style={styles.footerIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('../assets/image/iconC.png')}
                style={styles.footerIcon}
                />
            </TouchableOpacity>
        </View>
        </View>
    );
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE337'
    },
    perfil: {
        width: 50,
        height: 50,
        left: 165,
    },
    errorText: {
        color: '#84349c',
        marginBottom: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 3,
        color: '#84349c',
        left: 95,
        marginBottom: 10
    },
    header: {
        backgroundColor: '#f3bc04',
        alignItems: 'center'
    },
    image: {
        width: 500,
        height: 110,
        borderRadius: 70
    },
    imagemF: {
        flex: 1,
    },
    footerIcon: {
        width: 30,
        height: 30
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    form: {
        padding: 10,
        backgroundColor: '#FFE337',
        marginBottom: 10,
        marginTop: 70,
        borderRadius: 20
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#F7E855',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 20
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#b47cc4'
    },
    imageButton: {
        backgroundColor: '#84349c',
        padding: 10,
        borderRadius:20,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    imageButtonText: {
        color: 'black',
        fontWeight: 'bold'
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#84349c',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold'
    },
});

export default CadastroMusica;