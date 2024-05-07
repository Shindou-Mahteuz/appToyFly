import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import stylehome from './style/stylehome';
import Menu from './Menu';
import Nav from './Nav';

function Home({ navigation }) {

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
      <View style={stylehome.viewimgmlk}>
        <Image source={require('./assets/kidplay.gif')} style={stylehome.imgmlk}></Image>
      </View>
      <View style={stylehome.viewtextmain}>
        <Text style={stylehome.textmain}>Toy Fly - Seu aplicativo para comprar brinquedos!</Text>
      </View>
      <View style={stylehome.viewtextdesc}>
        <Text style={stylehome.textdesc}>Aqui você encontra as principais promoções de brinquedos
          com base na idade de seu pequeno! Aproveite as ofertas e começe a comprar clicando no botâo abaixo.
        </Text>
      </View>
      <View style={stylehome.viewbutton}>
        <TouchableOpacity style={stylehome.touchbutton} onPress={() => navigation.navigate('Lista por Idade')}>
          <Text style={stylehome.textbutton}>Começar a comprar!</Text>
        </TouchableOpacity>
      </View>
      <Menu></Menu>
    </View>
  );
}

export default Home;
