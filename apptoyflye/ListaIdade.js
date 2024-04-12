import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, Image, FlatList, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import stylelistaidade from './style/stylelistaidade';
import Menu from './Menu';
import Nav from './Nav';
import { ScrollView } from 'react-native-gesture-handler';

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

      <SafeAreaView style={stylelistaidade.idades}>
        <View style={stylelistaidade.viewimgmidade}>
          <Image source={require('./assets/1a3/main.jpg')} style={stylelistaidade.imgidade}></Image>
        </View>
        <View style={stylelistaidade.viewbutton}>
          <TouchableOpacity style={stylelistaidade.touchbutton} onPress={() => navigation.navigate('Produtos')}>
            <Text style={stylelistaidade.textbutton}>1 a 3 anos</Text>
          </TouchableOpacity>
        </View>
        <View style={stylelistaidade.viewimgmidade}>
          <Image source={require('./assets/5a8/main.jpg')} style={stylelistaidade.imgidade}></Image>
        </View>
        <View style={stylelistaidade.viewbutton2}>
          <TouchableOpacity style={stylelistaidade.touchbutton}>
            <Text style={stylelistaidade.textbutton}>5 a 8 anos</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <SafeAreaView style={stylelistaidade.idades2}>
        <View style={stylelistaidade.viewimgmidade}>
          <Image source={require('./assets/3a5/main.jpg')} style={stylelistaidade.imgidade}></Image>
        </View>
        <View style={stylelistaidade.viewbutton}>
          <TouchableOpacity style={stylelistaidade.touchbutton}>
            <Text style={stylelistaidade.textbutton}>3 a 5 anos</Text>
          </TouchableOpacity>
        </View>
        <View style={stylelistaidade.viewimgmidade}>
          <Image source={require('./assets/8a12/main.jpg')} style={stylelistaidade.imgidade}></Image>
        </View>
        <View style={stylelistaidade.viewbutton2}>
          <TouchableOpacity style={stylelistaidade.touchbutton}>
            <Text style={stylelistaidade.textbutton}>8 a 12 anos</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <Menu></Menu>
    </View>
  );
}

export default ListaIdade;
