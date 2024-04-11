import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import stylecadastro from './style/stylecadastro';
import Menu from './Menu';
import Nav from './Nav';

function Cadastro({ navigation }) {

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
            <View style={stylecadastro.viewtextmain}>
                <Text style={stylecadastro.textmain}>Toy Fly - Seu aplicativo para comprar brinquedos!</Text>
            </View>
            <View style={stylecadastro.viewimgmlk}>
                <Image source={require('./assets/ursinhocadastro.jpg')} style={stylecadastro.imgmlk}></Image>
            </View>
            <View style={stylecadastro.form}>
            <Text>Email:</Text>
                <TextInput
                    style={stylecadastro.input}
                    placeholder="Seu melhor email"
                />
                <Text>Nome de Usuário:</Text>
                <TextInput
                    style={stylecadastro.input}
                    placeholder="Usuário"
                />
                <Text>Senha:</Text>
                <TextInput
                    style={stylecadastro.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                />
            </View>
            <View style={stylecadastro.viewbutton}>
                <TouchableOpacity style={stylecadastro.touchbutton} onPress={() => navigation.navigate('Home')}>
                    <Text style={stylecadastro.textbutton}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            <View style={stylecadastro.viewtextdesc}>
                <Text style={stylecadastro.textdesc}>
                    Já tem uma conta?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={stylecadastro.textdesc2}>Faça login.</Text>
                </TouchableOpacity>
            </View>
            <Menu></Menu>
        </View>
    );
}

export default Cadastro;
