import { React, useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import css from './style/global';
import axios, { toFormData } from 'axios';

function TelaRetorno({ navigation, route }) {
  const { id, nome } = route.params;
  const [users2, setUsers2] = useState([]);
  useEffect(() => {
    const cadastrar = () => {
      if (nome !== '' && id !== '') {
        alert('\n Cadastrado com sucesso! Você já pode comprar!');
        let token = 'Q!W@ee344%%R';
        axios.get(`http://172.16.42.89/apiMercadao/select_um/?token=${token}&id=${id}&nome=${nome}`)
          .then(response => {
            setUsers2(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        alert('Preencha os campos! (obrigatório)');
      }
    }
    cadastrar();
  }, []);

  /*const bomdia = () => {
    setTimeout(() => {
      navigation.navigate('Carrinho')
    }, 2000);
  }
  bomdia();*/
  return (
    <View style={css.container} >
      <Button title={"bomdia"} onPress={() => navigation.navigate('ListaIdade')}></Button>
    </View>
  );
}
export default TelaRetorno;

