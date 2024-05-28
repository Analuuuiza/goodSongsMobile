import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element {

    const navigation = useNavigation();

    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={()=>navigation.navigate('home')}>
                <Image source={require('../assets/image/home.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('PesquisarMusica')}>
                <Image source={require('../assets/image/lupa.png')} 
                style={styles.footerIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('lista')}>
                <Image source={require('../assets/image/list.png')} 
                style={styles.footerIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('perfil')}>
                <Image source={require('../assets/image/perfil.png')} 
                style={styles.footerIcon}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menuList: {
        flexGrow: 1
    },

    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#002f6c',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingVertical: 10
    },

    footerIcon: {
        width: 30,
        height: 30
    }
});

export default Footer;