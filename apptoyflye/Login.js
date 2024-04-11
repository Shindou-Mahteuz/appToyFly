import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import stylelogin from './style/stylelogin';
import Menu from './Menu';
import Nav from './Nav';

function Login({ navigation }) {

    /*const [result, setResult] = useState('');
   
    const saveValue = async () => {
      try {
        await AsyncStorage.setItem('resultA', JSON.stringify(result));
      } catch (e) {
        console.error('Erro ao salvar valor:', e);
      }
    }; 
   
    const loadValue = async () => {
      try {
        const value = await AsyncStorage.getItem('result');
        if (value !== null) {
          a = JSON.parse(value);
        }
      } catch (e) {
        console.error('Erro ao carregar valor:', e);
      }
    };
   
  saveValue();*/

    return (
        <View style={styles.container}>
            <Nav></Nav>
            <View style={stylelogin.viewtextmain}>
                <Text style={stylelogin.textmain}>Toy Fly - Seu aplicativo para comprar brinquedos!</Text>
            </View>
            <View style={stylelogin.viewimgmlk}>
                <Image source={require('./assets/iconursologin.jpg')} style={stylelogin.imgmlk}></Image>
            </View>
            <View style={stylelogin.form}>
                <Text>Nome de Usuário:</Text>
                <TextInput
                    style={stylelogin.input}
                    placeholder="Usuário"
                />
                <Text></Text>
                <Text>Senha:</Text>
                <TextInput
                    style={stylelogin.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                />
            </View>
            <View style={stylelogin.viewbutton}>
                <TouchableOpacity style={stylelogin.touchbutton}>
                    <Text style={stylelogin.textbutton}>Logar</Text>
                </TouchableOpacity>
            </View>
            <View style={stylelogin.viewtextdesc}>
                <Text style={stylelogin.textdesc}>
                    Não tem uma conta?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={stylelogin.textdesc2}>Clique aqui.</Text>
                </TouchableOpacity>

            </View>
            <Menu></Menu>
        </View>
    );
}

export default Login;
