import { React, useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilonav from './style/stylenav';
import { useNavigation } from '@react-navigation/native';

function Nav() {
    const navigation = useNavigation();
    const [id, setId] = useState('');
    const [imagem, setImagem] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const loadValue = async () => {
        try {
            const idV = await AsyncStorage.getItem('id');
            const imagemV = await AsyncStorage.getItem('imagem');
            const nomeV = await AsyncStorage.getItem('nome');
            const emailV = await AsyncStorage.getItem('email');
            if (idV !== null && imagemV !== null && nomeV !== null && emailV !== null) {
                setId(idV);
                setImagem(imagemV);
                setNome(nomeV);
                setEmail(emailV);
            }
        } catch (e) {
            console.error('Erro ao carregar valor:', e);
        }
    };
    loadValue();
    //console.log(imagem);
    //let imagem = dados;
    return (
        <View style={estilonav.nav}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={estilonav.viewiconnav}>
                <Image source={require('./assets/iconnav.png')} style={estilonav.iconnav}></Image>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estilonav.viewlogonav}>
                <Image source={require('./assets/logo.png')} style={estilonav.logonav}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estilonav.viewlogoprofile}>
                <Image source={require('./assets/pedro-raccoon.gif')} style={estilonav.logoprofile}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estilonav.viewtextleave}>
                <Text style={estilonav.textleave}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Nav;  