import { React, useEffect } from 'react';
import { View, Image } from 'react-native';
import css from './style/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

function TelaRetorno2({ navigation }) {

  /*
  useEffect(() => {

  removeValue = async () => {
    try {
      await AsyncStorage.setItem('id', JSON.stringify(''));
      await AsyncStorage.setItem('imagem', JSON.stringify(''));
      await AsyncStorage.setItem('nome', JSON.stringify(''));
      await AsyncStorage.setItem('email', JSON.stringify(''));
      await AsyncStorage.removeItem('id');
      await AsyncStorage.removeItem('nome');
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('imagem');
      console.log('limpa 222222');
    }
    catch (e) {
    }
    console.log('Done.')
  }


    removeValue();
    //navigation.navigate('Home');


   

  }, []); */


   setTimeout(() => {
    navigation.navigate('Login');
  }, 4000);

  

  return (
    <View style={css.container} >
      <Image style={{ width: 150, height: 150 }}
        source={require('./assets/carregamento.gif')} />
    </View>
  );
}
export default TelaRetorno2;
