import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import estilomenu from './style/stylemenu';
import { useNavigation } from '@react-navigation/native';

function Menu() {
    const navigation = useNavigation();
    return (
        <View style={estilomenu.menu}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('./assets/iconhome.png')} style={estilomenu.iconmenu}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Lista por Idade')}>
                <Image source={require('./assets/icontoy.png')} style={estilomenu.iconmenu}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Carrinho')}>
                <Image source={require('./assets/iconcar.png')} style={estilomenu.iconmenu}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Image source={require('./assets/iconuser.png')} style={estilomenu.iconmenu}></Image>
            </TouchableOpacity>
        </View>
    );
}
export default Menu;  