import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image, SafeAreaView, ScrollView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import styleprodutos from './style/styleprodutos';
import Menu from './Menu';
import Nav from './Nav';
import Lista1a3 from './Lista1a3';

function Produtos({ navigation, route }) {
    const { valor } = route.params;
    console.log(route.params);

    /*const tipoImagem = (value) => {
        switch (valor) {
            case 1:
                return require('./assets/3a5/main.jpg');
                break;
            case 2:
                return require('./assets/3a5/main.jpg');
                break;
            case 3:
                return require('./assets/3a5/main.jpg');
                break;
        }
    }*/

    /*const produtos = (value) => {
        switch (valor) {
            case 1:
                return require("./Lista1a3");
                break;
            case 2:
                return require("./Lista1a3");
                break;
            case 3:
                return require("./Lista1a3");
                break;
            default:
                return require("./Lista1a3");
                break;
        }
    }*/
    return (
        <View style={styles.container}>
            {valor == 1 ?
                <>
                    <Lista1a3></Lista1a3>
                </>
                :
                <>
                    <Text>Erro :(</Text>
                    <Text>Tente novamente mais tarde.</Text>
                </>
            }
            <Nav></Nav>
            <Menu></Menu>
        </View>
    );
}

export default Produtos;

/*<View style={styleprodutos.descpage}>
                <Text>{titulo}</Text>
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
            </SafeAreaView>*/