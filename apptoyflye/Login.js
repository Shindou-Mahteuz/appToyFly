import { React, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import axios, { toFormData } from 'axios';
import stylelogin from './style/stylelogin';
import Menu from './Menu';
import Nav from './Nav';

function Login({ navigation, route }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [id, setId] = useState('');
  const [imagem, setImagem] = useState('https://s.alicdn.com/@sc04/kf/Hcd25668e97944d65bdb39c7c67bb759fK.jpg_300x300.jpg');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const loadValue = async () => {
        try {
            const idV = await AsyncStorage.getItem('id');
            const imagemV = await AsyncStorage.getItem('imagem');
            const nomeV = await AsyncStorage.getItem('nome');
            const emailV = await AsyncStorage.getItem('email');
            if (idV !== null) {
                setId(idV);
            }
            if (imagemV !== null) {
                setImagem(imagemV.replace(/"/g, ''));
            }else{
                setImagem('https://s.alicdn.com/@sc04/kf/Hcd25668e97944d65bdb39c7c67bb759fK.jpg_300x300.jpg');
            }
            if (nomeV !== null) {
                setNome(nomeV);
            }
            if (emailV !== null) {
                setEmail(emailV);
            }
        } catch (error) {
            console.log('Erro ao carregar valor:', error);
        }
    };
    loadValue();
}, []);

  /* useEffect(() => {
     const limparTudo = () => {
       try {
         setId('');
         setImagem('');
         setNome('');
         setEmail('');
         console.log("cachaça")
       } catch (error) {
         console.log('Erro ao apagar dados', error);
       }
     };
     limparTudo();
   }, []);*/
  /*const loadValue = async () => {
    try {
      const idV = await AsyncStorage.getItem('id');
      const imagemV = await AsyncStorage.getItem('imagem');
      const nomeV = await AsyncStorage.getItem('nome');
      const emailV = await AsyncStorage.getItem('email');
      if (idV !== null && imagemV !== null && nomeV !== null && emailV !== null) {
        setId(idV);
        setImagem(imagemV);
        setNome(nomeV);
        setEmail(emailV);
      }
    } catch (e) {
      console.error('Erro ao carregar valor:', e);
    }
  };*/

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
            /*if (id !== " " && nome !== " " && imagem !== " " && email !== " ") {
              setId(null);
              setImagem(null);
              setNome(null);
              setEmail(null);
            } else {
              setId(data[0].id);
              setImagem(data[0].imagem);
              setNome(data[0].nome);
              setEmail(data[0].email);
            }*/
            /*setId(data[0].id);
            setImagem(data[0].imagem);
            setNome(data[0].nome);
            setEmail(data[0].email);*/
            var teste1 = data[0].id;
            var teste2 = data[0].imagem;
            var teste3 = data[0].nome;
            var teste4 = data[0].email;
            saveValue(teste1, teste2, teste3, teste4);
            alert('Bem vindo de volta, ' + nome + '\nFaça suas compras!');
            navigation.navigate('ListaIdade', { imagem, id, nome });
          };
        })
        .catch(error => {
          console.log('Erro ao enviar dados:', error);
        });
    } else {
      alert('Preencher Campos!!!');
    }

  }

  /*setId(data[0].id);
           setImagem(data[0].imagem);
           setNome(data[0].nome);
           setEmail(data[0].email);*/



  const saveValue = async (teste1, teste2, teste3, teste4) => {
    try {
      console.log(teste1);
      console.log(teste2);
      console.log(teste3);
      console.log(teste4);
      await AsyncStorage.setItem('id', JSON.stringify(teste1));
      await AsyncStorage.setItem('imagem', JSON.stringify(teste2));
      await AsyncStorage.setItem('nome', JSON.stringify(teste3));
      await AsyncStorage.setItem('email', JSON.stringify(teste4));
      /*console.log("não deu errado");
      console.log(id);
      console.log(imagem);
      console.log(nome);
      console.log(email);*/
    } catch (e) {
      console.error('Erro ao salvar valor:', e);
    }
  };
  //loadValue();
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
        <Image source={{ uri: `${imagem}` }} style={stylelogin.imgmlk}></Image>
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
