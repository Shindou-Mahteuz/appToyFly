import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image, SafeAreaView, ScrollView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import stylecarrinho from './style/stylecarrinho';
import Menu from './Menu';
import Nav from './Nav';

function HistoricoCompra({ navigation, route }) {
    const loadValue = async () => {
        try {
          const value = await AsyncStorage.getItem('pagamento');
          if (value !== null) {
            console.log('oi');
           // a = JSON.parse(value);
          }
        } catch (e) {
          console.error('Erro ao carregar valor:', e);
        }
      };
      loadValue();
    return (
        <View style={styles.container}>
            <View style={stylecarrinho.descpage}>
                <Text>1 a 3 anos</Text>
            </View><SafeAreaView style={stylecarrinho.produtos}>
                <ScrollView style={stylecarrinho.scrollview}>

                    <View style={stylecarrinho.card}>
                        <View style={stylecarrinho.viewimgmidade}>
                            <Image source={require('./assets/1a3/telefoninho.jpg')} style={stylecarrinho.imgidade}></Image>
                        </View>
                        <View style={stylecarrinho.viewtextoproduto}>
                            <Text style={stylecarrinho.titleproduto}>Phone-car</Text>
                            <Text style={stylecarrinho.descproduto}>Um telefonezinho engraçado e divertido com funções que irão aguçar a criatividade e curiosidade da criança!</Text>
                            <Text style={stylecarrinho.precoproduto}>R$ 58,50</Text>
                            <Text style={stylecarrinho.titleproduto}>Você comprou em: 24/12</Text>
                            <Text style={stylecarrinho.titleproduto}>Pagamento no: </Text>
                        </View>
                    </View>
                    <Text></Text>
                    <View style={stylecarrinho.linha}></View>

                    <View style={stylecarrinho.card2}>
                        <View style={stylecarrinho.viewbutton2}>
                            <TouchableOpacity style={stylecarrinho.touchbutton} onPress={() => navigation.navigate('Home')}>
                                <Text style={stylecarrinho.textbutton}>Voltar a comprar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={stylecarrinho.linha}></View>
                </ScrollView>

            </SafeAreaView>
            <Nav></Nav>
            <Menu></Menu>
        </View>
    );
}

export default HistoricoCompra;