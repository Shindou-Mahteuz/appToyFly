import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import axios, { toFormData } from 'axios';
import stylelogin from './style/stylelogin';
import Menu from './Menu';
import Nav from './Nav';

function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');


  const [id, setId] = useState('');
  const [imagem, setImagem] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  autenticar = () => {
    let token = 'Q!W@ee344%%R';
    if (usuario.trim() !== '' && senha.trim() !== '') {
      axios.post('http://172.16.42.89/apicadastro/login/', { token, usuario, senha })
        .then(response => {
          const data = response.data;
          //console.log(data);
          if (data == "Nenhum usuário encontrado.null") {
            alert('Nenhum usuário encontrado! \nFaça o cadastro primeiro')
          } else {

            setId(data[0].id);
            setImagem(data[0].imagem);
            setNome(data[0].nome);
            setEmail(data[0].email);
            saveValue();
            alert('Bem vindo de volta, ' + nome + '\nFaça suas compras!')
            navigation.navigate('Lista por Idade');
          };
        })
        .catch(error => {
          console.log('Erro ao enviar dados:', error);
        });
    } else {
      alert('Preencher Campos!!!');
    }

  }

  const saveValue = async () => {
    try {
      await AsyncStorage.setItem('id', JSON.stringify(id));
      await AsyncStorage.setItem('imagem', JSON.stringify(imagem));
      await AsyncStorage.setItem('nome', JSON.stringify(nome));
      await AsyncStorage.setItem('email', JSON.stringify(email));
    } catch (e) {
      console.error('Erro ao salvar valor:', e);
    }
  };
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
        <Text>Nome de usuário ou email:</Text>
        <TextInput
          style={stylelogin.input}
          placeholder="Nome de usuário ou email:"
          onChangeText={(text) => setUsuario(text)}
          value={usuario}
        />
        <Text></Text>
        <Text>Senha:</Text>
        <TextInput
          style={stylelogin.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setSenha(text)}
          value={senha}
        />


        
      </View>
      <View style={stylelogin.viewbutton}>
        <TouchableOpacity style={stylelogin.touchbutton} onPress={autenticar}>
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
