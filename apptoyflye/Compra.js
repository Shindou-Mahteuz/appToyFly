import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import stylelogin from './style/stylelogin';
import stylehome from './style/stylehome';
import styleprodutos from './style/styleprodutos';
import Menu from './Menu';
import Nav from './Nav';
import RNPickerSelect from 'react-native-picker-select';

const TaskForm = () => {
  const [priority, setPriority] = useState('');

  const priorityOptions = [
    { label: 'Pix', value: 'pix' },
    { label: 'Cartão', value: 'cartao' },
    { label: 'Dinheiro', value: 'dinheiro' },
  ];

  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={{ label: 'Selecione uma forma de ', value: null }}
        items={priorityOptions}
        onValueChange={(value) => setPriority(value)}
        value={priority}
      />
    </View>
  );
};





function Compra({ navigation, route }) {
  const { nome, valor, desc, img } = route.params;
  const tipoImagem = (value) => {
    switch (img) {
      case 1:
        return require('./assets/1a3/andadorzinho.jpg');
        break;
      case 2:
        return require('./assets/1a3/chocalhozinho.jpg');
        break;
      case 3:
        return require('./assets/1a3/peluciapatinho.jpg');
        break;
      case 4:
        return require('./assets/1a3/telefoninho.jpg');
        break;
      case 5:
        return require('./assets/3a5/batmanejoker.jpg');
        break;
      case 6:
        return require('./assets/3a5/minidinos.jpg');
        break;
      case 7:
        return require('./assets/3a5/pawpatrol.jpg');
        break;
      case 8:
        return require('./assets/3a5/spidercar.jpg');
        break;
      case 9:
        return require('./assets/5a8/aviaoimaginext.jpg');
        break;
      case 10:
        return require('./assets/5a8/dinossauroimaginext.jpg');
        break;
      case 11:
        return require('./assets/5a8/franchescorc.jpg');
        break;
      case 12:
        return require('./assets/5a8/pistahotwheels.jpg');
        break;
      case 13:
        return require('./assets/8a12/legoahsoka.jpg');
        break;
      case 14:
        return require('./assets/8a12/legoup.jpg');
        break;
      case 15:
        return require('./assets/8a12/omnitrix.jpg');
        break;
      case 16:
        return require('./assets/8a12/sonicrc.jpg');
        break;
      default:
        return require('./assets/1a3/main.jpg');
        break;
    }
  }

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
      <View style={stylelogin.viewtextmain}>
        <Text style={stylelogin.textmain}>Toy Fly - Seu aplicativo para comprar brinquedos!</Text>
      </View>
      <View style={stylelogin.viewimgmlk}>
        <Image source={tipoImagem()} style={stylelogin.imgmlk}></Image>
      </View>
      <View style={styleprodutos.form}>
        <Text style={styleprodutos.titleproduto}>{nome}</Text>
        <Text style={stylehome.textdesc}>{desc}
        </Text>
        <Text style={styleprodutos.precoproduto} >{valor}</Text>
        <Text>Método de pagamento:</Text>
        
        <TextInput
          style={stylelogin.input}
          placeholder="Pix, Cartão ou Dinheiro"
          onChangeText={setPagamento}
          value={pagamento}
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
