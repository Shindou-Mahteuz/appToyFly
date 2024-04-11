import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import stylelistaidade from './style/stylelistaidade';
import Menu from './Menu';
import Nav from './Nav';

function ListaIdade({ navigation }) {

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
      <View style={stylelistaidade.viewimgmlk}>
        <Image source={require('./assets/banner.png')} style={stylelistaidade.imgmlk}></Image>
      </View>
      <View style={stylelistaidade.idades}>
        <View style={stylelistaidade.viewimgmidade}>
          <Image source={require('./assets/1a3/main.jpg')} style={stylelistaidade.imgidade}></Image>
        </View>
      </View>
      <View style={stylelistaidade.viewbutton}>
        <TouchableOpacity style={stylelistaidade.touchbutton}>
          <Text style={stylelistaidade.textbutton}>Logar</Text>
        </TouchableOpacity>
      </View>
      <View style={stylelistaidade.viewtextdesc}>
        <Text style={stylelistaidade.textdesc}>
          Não tem uma conta?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={stylelistaidade.textdesc2}>Clique aqui.</Text>
        </TouchableOpacity>

      </View>
      <Menu></Menu>
    </View>
  );
}

export default ListaIdade;
