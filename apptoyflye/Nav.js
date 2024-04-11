import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import estilonav from './style/stylenav';
import { useNavigation } from '@react-navigation/native';

function Nav() {
    const navigation = useNavigation();
    return (
        <View style={estilonav.nav}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={estilonav.viewiconnav}>
                <Image source={require('./assets/iconnav.png')} style={estilonav.iconnav}></Image>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estilonav.viewlogonav}>
                <Image source={require('./assets/logo.png')} style={estilonav.logonav}></Image>
            </TouchableOpacity>

        </View>
    );
}
export default Nav;  