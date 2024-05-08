import { React, useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import css from './style/global';

function TelaRetorno({ navigation }) {

  const [id, setId] = useState('');
  const [imagem, setImagem] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const bomdia = () => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 2000);
  }

  const loadValue = async () => {
    try {
      const idV = await AsyncStorage.getItem('id');
      const imagemV = await AsyncStorage.getItem('imagem');
      const nomeV = await AsyncStorage.getItem('nome');
      const emailV = await AsyncStorage.getItem('email');
      console.log("aaaaaaaaaaa" + idV);
      console.log(imagemV);
      console.log(nomeV);
      console.log(emailV);
      setImagem(imagemV);
      setNome(nomeV);
      setEmail(emailV)
      setId(idV);
    } catch (e) {
      console.error('Erro ao carregar valor:', e);
    }
  };

  loadValue();

  const botao = () => {
    navigation.navigate('Home');
  }

  bomdia();
  return (
    <View style={css.container} >
      <Button title={"bomdia"} onPress={botao}></Button>
    </View>
  );
}
export default TelaRetorno;

