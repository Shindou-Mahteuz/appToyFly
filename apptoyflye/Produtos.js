import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import styleprodutos from './style/styleprodutos';
import Menu from './Menu';
import Nav from './Nav';

function Produtos({ navigation }) {

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
            <View style={styleprodutos.descpage}>
                <Text>1 a 3 anos</Text>
            </View>
            <SafeAreaView style={styleprodutos.produtos}>
                <ScrollView style={styleprodutos.scrollview}>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/1a3/andadorzinho.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Andador Fischer Price</Text>
                            <Text style={styleprodutos.descproduto}>Um andador divertido cheio de cor e ferramentas para estimular a criatividade e coordenação motora de seu pequeno!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 85,90</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styleprodutos.linha}></View>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/1a3/chocalhozinho.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Chocalho amigãozinho</Text>
                            <Text style={styleprodutos.descproduto}>Animaizinhos divertidos e com sons diversos em um chocalho suspenso, que irão divertir o seu pequeno!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 60,00</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styleprodutos.linha}></View>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/1a3/peluciapatinho.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Pelúcia Cute Duck</Text>
                            <Text style={styleprodutos.descproduto}>Cute Duck será o novo amiguinho de seu filho, com frases divertidas e fofas que interagem com a criança!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 79,90</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styleprodutos.linha}></View>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/1a3/telefoninho.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Phone-car</Text>
                            <Text style={styleprodutos.descproduto}>Um telefonezinho engraçado e divertido com funções que irão aguçar a criatividade e curiosidade da criança!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 58,50</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styleprodutos.linha}></View>

                </ScrollView>
            </SafeAreaView>
            <Menu></Menu>
        </View>
    );
}

export default Produtos;
/*<View style={styleprodutos.viewimgmidade}>
          <Image source={require('./assets/1a3/main.jpg')} style={styleprodutos.imgidade}></Image>
        </View>
        <View style={styleprodutos.viewbutton}>
          <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Produtos')}>
            <Text style={styleprodutos.textbutton}>1 a 3 anos</Text>
          </TouchableOpacity>
        </View>
        <View style={styleprodutos.viewimgmidade}>
          <Image source={require('./assets/5a8/main.jpg')} style={styleprodutos.imgidade}></Image>
        </View>
        <View style={styleprodutos.viewbutton2}>
          <TouchableOpacity style={styleprodutos.touchbutton}>
            <Text style={styleprodutos.textbutton}>5 a 8 anos</Text>
          </TouchableOpacity>
        </View>*/