import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { toFormData } from 'axios';
import styles from './style/global';
import stylecadastro from './style/stylecadastro';
import Menu from './Menu';
import Nav from './Nav';

function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [imagem, setImagem] = useState('');

  const cadastrar = () => {
    if (nome.trim() !== '' && senha.trim() !== '' && email.trim() !== '') {
      alert('\n Cadastrado com sucesso! Você já pode comprar!');
      let token = 'Q!W@ee344%%R';
      axios.post('http://172.16.42.89/apicadastro/cadastro/', { token, nome, email, imagem, senha })
        .then(response => {
          const data = response.data;
          aviso = 0;
          console.log(data);
          navigation.navigate('Lista por Idade');
        })
        .catch(error => {
          console.log('Erro ao enviar dados:', error);
          navigation.navigate('Lista por Idade');
        });
      //navigation.navigate('Home');
    } else {
      alert('Preencha os campos! (obrigatório)');
    }
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
      <View style={stylecadastro.viewtextmain}>
        <Text style={stylecadastro.textmain}>Toy Fly - Seu aplicativo para comprar brinquedos!</Text>
      </View>
      <View style={stylecadastro.form}>
        <Text>Email:</Text>
        <TextInput
          style={stylecadastro.input}
          placeholder="Seu melhor email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text>Nome de Usuário:</Text>
        <TextInput
          style={stylecadastro.input}
          placeholder="Usuário"
          onChangeText={(text) => setNome(text)}
          value={nome}
        />
        <Text>Foto:</Text>
        <TextInput
          style={stylecadastro.input}
          placeholder="Imagem"
          onChangeText={(text) => setImagem(text)}
          value={imagem}
        />
        <Text>Senha:</Text>
        <TextInput
          style={stylecadastro.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setSenha(text)}
          value={senha}
        />
      </View>
      <View style={stylecadastro.viewbutton}>
        <TouchableOpacity style={stylecadastro.touchbutton} onPress={cadastrar}>
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
