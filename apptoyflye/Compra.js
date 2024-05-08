import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import stylecompra from './style/stylecompra';
import stylehome from './style/stylehome';
import styleprodutos from './style/styleprodutos';
import Menu from './Menu';
import Nav from './Nav';

function Compra({ navigation, route }) {
  const {imagem, nome, descricao, preco} = route.params;
  console.log(route.params);
  const [pagamento, setPagamento] = useState('');

  const saveValue = async () => {
    try {
      await AsyncStorage.setItem('pagamento', JSON.stringify(pagamento));
    } catch (e) {
      console.error('Erro ao salvar valor:', e);
    }
  };

  console.log(pagamento);
  const handlePress = () => {
    Alert.alert(
      'Obrigado pela compra!',
      'Sua compra foi registrada e você já pode retirar em nossa loja!',
      [
        { text: 'Início', onPress: () => navigation.navigate("Home") },
      ]
    );

  }
  return (
    <View style={styles.container}>
      <Nav></Nav>
      <View style={stylecompra.viewtextmain}>
        <Text style={stylecompra.textmain}>Toy Fly - Seu aplicativo para comprar brinquedos!</Text>
      </View>
      <View style={stylecompra.viewimgmlk}>
        <Image source={{ uri: `${imagem}` }} style={stylecompra.imgmlk}></Image>
      </View>
      <View style={stylecompra.form}>
        <Text style={stylecompra.titleproduto}>{nome}</Text>
        <Text style={stylecompra.textdesc}>{descricao}
        </Text>
        <Text style={stylecompra.precoproduto} >{preco}</Text>
        <Text>Método de pagamento:</Text>
        <TextInput
          style={stylecompra.input}
          placeholder="Pix, Cartão ou Dinheiro"
          onChangeText={setPagamento}
          value={pagamento}
        />
      </View>
      <View style={stylecompra.viewbutton}>
        <TouchableOpacity style={stylecompra.touchbutton} onPress={handlePress}>
          <Text style={stylecompra.textbutton}>Comprar</Text>
        </TouchableOpacity>
      </View>

      <Menu></Menu>
    </View>
  );
}

export default Compra;
