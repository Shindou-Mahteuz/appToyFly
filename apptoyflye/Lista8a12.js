import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image, SafeAreaView, ScrollView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import styleprodutos from './style/styleprodutos';

function Lista1a3({ navigation, route }) {
    return (
        <View style={styles.container}>
            <View style={styleprodutos.descpage}>
                <Text>8 a 12 anos</Text>
            </View><SafeAreaView style={styleprodutos.produtos}>
                <ScrollView style={styleprodutos.scrollview}>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/8a12/legoahsoka.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Lego Ahsoka Tano</Text>
                            <Text style={styleprodutos.descproduto}>Lady Tano e sua padawan Sabine em uma grande batalha com seu interceptador Jedi!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 240,90</Text>
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
                            <Image source={require('./assets/8a12/legoup.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Lego UP Altas aventuras</Text>
                            <Text style={styleprodutos.descproduto}>A casa voadora mais famosa da Disney, Agora em peças de lego para uma complexa diversão!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 270,00</Text>
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
                            <Image source={require('./assets/8a12/omnitrix.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Omnitrix Força Alienígena</Text>
                            <Text style={styleprodutos.descproduto}>O mais poderoso artefato da galáxia, agora em seu pulso!</Text>
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
                            <Image source={require('./assets/8a12/sonicrc.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Sonic Sega All-Stars RC</Text>
                            <Text style={styleprodutos.descproduto}>Automodelo de Sonic the Hedgehog em seu hyper carro de Sega All-stars!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 90,50</Text>
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
        </View>
    );
}

export default Lista1a3;