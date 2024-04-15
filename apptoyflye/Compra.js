import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import stylelogin from './style/stylelogin';
import stylehome from './style/stylehome';
import Menu from './Menu';
import Nav from './Nav';

function Compra({ navigation }) {

  const handlePress = () => {
    Alert.alert(
      'Obrigado pela compra!',
      'Sua compra foi registrada e você já pode retirar em nossa loja!',
      [
        { text: 'Início', onPress: () => navigation.navigate("Home") },
      ]
    );
  }
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
        <Image source={require('./assets/hotwheels.jpg')} style={stylelogin.imgmlk}></Image>
      </View>
      <View style={stylelogin.form}>
        <Text>Hotwheels Ataque do tubarão</Text>


        <Text style={stylehome.textdesc}>Diversão garantida com a Pista de Percurso e Veículo - Hot Wheels - City - Robô Tubarão - Mattel! A Hot Wheels City está sendo atacada por um enorme tubarão robótico!
        </Text>

        <Text></Text>
        <Text>Método de pagamento:</Text>
        <TextInput
          style={stylelogin.input}
          placeholder="Pix, Cartão ou Dinheiro"
        />

      </View>
      <View style={stylelogin.viewbutton}>
        <TouchableOpacity style={stylelogin.touchbutton} onPress={handlePress}>
          <Text style={stylelogin.textbutton}>Comprar</Text>
        </TouchableOpacity>
      </View>

      <Menu></Menu>
    </View>
  );
}

export default Compra;
