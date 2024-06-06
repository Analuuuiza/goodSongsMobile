

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element{

    const navigation = useNavigation();
    return(
        <View style={styles.footer}>
           <TouchableOpacity onPress={()=>navigation.navigate('welcome')}>
            <Image source={require('../assets/image/welcome.png') } style={styles.footerIcon}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate('list')}>
            <Image source={require('../assets/image/list.png') } style={styles.footerIcon} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate('cadastro')}>
            <Image source={require('../assets/image/cadasmu.png') } style={styles.footerIcon} />
           </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    menuList:{
        flexGrow:1
    },

    footer:{
        borderTopWidth:0.2,
        backgroundColor:'#292838',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
        paddingVertical:10,
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    footerIcon:{
        width:30,
        height:30   }

        
   
   
});

export default Footer;