import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image, SafeAreaView, ScrollView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import styleprodutos from './style/styleprodutos';
import { useNavigation } from '@react-navigation/native';

function Lista3a5({ route }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styleprodutos.descpage}>
                <Text>3 a 5 anos</Text>
            </View><SafeAreaView style={styleprodutos.produtos}>
                <ScrollView style={styleprodutos.scrollview}>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/3a5/batmanejoker.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Batman and Joker DC Toy</Text>
                            <Text style={styleprodutos.descproduto}>Batman se encontra com coringa em um grande desafio! Bonecos articulados e coloridos!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 46,90</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra')}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styleprodutos.linha}></View>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/3a5/minidinos.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Mini Dynos</Text>
                            <Text style={styleprodutos.descproduto}>As criaturas mais divertidas do mundo pré-histórico estão de volta! Brinquedos de borracha!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 40,00</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra')}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styleprodutos.linha}></View>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/3a5/pawpatrol.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Chase Paw Patrol</Text>
                            <Text style={styleprodutos.descproduto}>Chase está te esperando para uma nova e grande auauventura!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 39,90</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra')}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styleprodutos.linha}></View>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/3a5/spidercar.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Spiderman Race Adventure</Text>
                            <Text style={styleprodutos.descproduto}>venha se divertir com Homem aranha em uma aventura super veloz!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 78,90</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra')}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styleprodutos.linha}></View>

                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default Lista3a5;