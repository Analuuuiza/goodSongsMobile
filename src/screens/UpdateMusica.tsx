import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import axios from 'axios';

function UpdateMusica(): React.JSX.Element {

    const [titulo, setTitulo] = useState<string>('');
    const [duracao, setDuracao] = useState<string>('');
    const [artista, setArtista] = useState<string>('');
    const [genero, setGenero] = useState<string>('');
    const [nacionalidade, setNacionalidade] = useState<string>('');
    const [ano_lancamento, setAno_lancamento] = useState<string>('');
    const [album, setAlbum] = useState<string>('');
    const colorInput = '#acacb7';

    useEffect(() => {
        // Aqui você pode implementar a lógica para carregar os dados da música que será atualizada
        // Você pode obter esses dados da navegação ou por meio de uma chamada de API
        // Suponha que você tenha um parâmetro de ID de música passado pela navegação
        // Você pode usar esse ID para buscar os dados da música e preencher os campos do formulário
        // Exemplo:
        const fetchMusica = async () => {
            try {
                const response = await axios.get('http://10.137.11.222:8000/api/musica/retornarTodasMusicas');
                const musica = response.data;
                setTitulo(musica.titulo);
                setDuracao(musica.duracao);
                setArtista(musica.artista);
                setGenero(musica.genero);
                setNacionalidade(musica.nacionalidade);
                setAno_lancamento(musica.ano_lancamento);
                setAlbum(musica.album);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMusica();
    }, []);

    const handleUpdate = async () => {
        try {
            // Aqui você pode implementar a lógica para enviar os dados atualizados da música para a API
            // Exemplo:
            const formData = new FormData();
            formData.append('titulo', titulo);
            formData.append('duracao', duracao);
            formData.append('artista', artista);
            formData.append('genero', genero);
            formData.append('nacionalidade', nacionalidade);
            formData.append('ano_lancamento', ano_lancamento);
            formData.append('album', album);

            const response = await axios.put('http://10.137.11.222:8000/api/musica/atualizarMusica', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);
            
        } catch (error) {
            console.log(error);
          
        }
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete('http://10.137.11.222:8000/api/musica/excluirMusica/{id}');
            console.log(response.data);
            
        } catch (error) {
            console.log(error);
           
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atualizar Música</Text>
            <TextInput
                placeholder="Título"
                style={styles.input}
                value={titulo}
                placeholderTextColor={colorInput}
                onChangeText={setTitulo}
            />
            <TextInput
                placeholder="Duração"
                style={styles.input}
                value={duracao}
                placeholderTextColor={colorInput}
                onChangeText={setDuracao}
            />
            <TextInput
                placeholder="Artista"
                style={styles.input}
                value={artista}
                placeholderTextColor={colorInput}
                onChangeText={setArtista}
            />
            <TextInput
                placeholder="Gênero"
                style={styles.input}
                placeholderTextColor={colorInput}
                value={genero}
                onChangeText={setGenero}
            />
            <TextInput
                placeholder="Nacionalidade"
                style={styles.input}
                placeholderTextColor={colorInput}
                value={nacionalidade}
                onChangeText={setNacionalidade}
            />
           <View style={styles.row}>
            <TextInput
                placeholder="Album"
                placeholderTextColor={colorInput}
                style={styles.inputAlbum}
                value={album}
                onChangeText={setAlbum}
            />
            <TextInput
                placeholder="Ano de Lançamento"
                placeholderTextColor={colorInput}
                style={styles.inputDate}
                value={ano_lancamento}
                onChangeText={setAno_lancamento}
            />
                      

                    </View >

            <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                <Text style={styles.buttonText}>Atualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleDelete}>
                <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#292838'
    },
    row: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#D9D9D9'
    },
    input: {
        borderWidth: 1,
        backgroundColor: '#4a4956',
        borderColor: '#4a4956',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        width: '80%',
        fontSize: 16
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    inputDate: {
        backgroundColor: '#4a4956', // Cor de fundo
        height: 50,
        marginBottom: 12,
        fontSize: 13,
        paddingHorizontal: 10,
        borderRadius: 10,
        paddingLeft: 'auto',
        width: "40%",
        marginLeft: 10
       
        // Adiciona um preenchimento horizontal,

    }, inputAlbum: {
        backgroundColor: '#4a4956', // Cor de fundo
        height: 50,
        marginBottom: 12,
        fontSize: 16,
        paddingHorizontal: 10,
        borderRadius: 10,
        paddingLeft: 'auto',
        width: '37%'

        // Adiciona um preenchimento horizontal,

    },
});

export default UpdateMusica;