import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image, SafeAreaView, ScrollView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import styleprodutos from './style/styleprodutos';
import { useNavigation } from '@react-navigation/native';


function ListaPromocao({ route }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styleprodutos.descpage}>
                <Text>1 a 3 anos</Text>
            </View><SafeAreaView style={styleprodutos.produtos}>
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
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra', { nome: 'Andador Fischer Price', valor: 'R$ 85,90', desc: 'Um andador divertido cheio de cor e ferramentas para estimular a criatividade e coordenação motora de seu pequeno!', img: 1 })}>
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
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra', { nome: 'Chocalho amigãozinho', valor: 'R$ 60,00', desc: 'Animaizinhos divertidos e com sons diversos em um chocalho suspenso, que irão divertir o seu pequeno!', img: 2 })}>
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
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra', { nome: 'Pelúcia Cute Duck', valor: 'R$ 79,90', desc: 'Cute Duck será o novo amiguinho de seu filho, com frases divertidas e fofas que interagem com a criança!', img: 3 })}>
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
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra', { nome: 'Phone-car', valor: 'R$ 58,50', desc: 'Um telefonezinho engraçado e divertido com funções que irão aguçar a criatividade e curiosidade da criança!', img: 4 })}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>




                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/3a5/batmanejoker.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Batman and Joker DC Toy</Text>
                            <Text style={styleprodutos.descproduto}>Batman se encontra com coringa em um grande desafio! Bonecos articulados e coloridos!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 46,90</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra', { nome: 'Batman and Joker DC Toy', valor: 'R$ 46,90', desc: 'Batman se encontra com coringa em um grande desafio! Bonecos articulados e coloridos!', img: 5 })}>
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
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() =>
                                    navigation.navigate('Compra', {
                                        nome: 'Mini Dynos',
                                        valor: 'R$ 40,00',
                                        desc: 'As criaturas mais divertidas do mundo pré-histórico estão de volta! Brinquedos de borracha!',
                                        img: 6
                                    })}>
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
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra',
                                    {
                                        nome: 'Chase Paw Patrol',
                                        valor: 'R$ 39,90',
                                        desc: 'Chase está te esperando para uma nova e grande auauventura!',
                                        img: 7
                                    })}>
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
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra',
                                    {
                                        nome: 'Spiderman Race Adventure',
                                        valor: 'R$ 78,90',
                                        desc: 'venha se divertir com Homem aranha em uma aventura super veloz!',
                                        img: 8
                                    }
                                )}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/5a8/aviaoimaginext.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Avião Imaginext</Text>
                            <Text style={styleprodutos.descproduto}>Um potente bimotor anfíbio com dardos e uma garra super forte!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 68,90</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra',
                                    {
                                        nome: 'Avião Imaginext',
                                        valor: 'R$ 68,90',
                                        desc: 'Um potente bimotor anfíbio com dardos e uma garra super forte!',
                                        img: 9
                                    }
                                )}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styleprodutos.linha}></View>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/5a8/dinossauroimaginext.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Braquiossauro Imaginext</Text>
                            <Text style={styleprodutos.descproduto}>Controle a grande fúria do período cretaceo com seus equipamentos tecnológicos!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 90,50</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra',
                                    {
                                        nome: 'Braquiossauro Imaginext',
                                        valor: 'R$ 90,50',
                                        desc: 'Controle a grande fúria do período cretaceo com seus equipamentos tecnológicos!',
                                        img: 10
                                    }
                                )}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styleprodutos.linha}></View>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/5a8/franchescorc.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Francesco Virgolini RC</Text>
                            <Text style={styleprodutos.descproduto}>Tripa velocitatte agora no controle na palma de sua mão!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 115,00</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra',
                                    {
                                        nome: 'Francesco Virgolini RC',
                                        valor: 'R$ 115,00',
                                        desc: 'Tripa velocitatte agora no controle na palma de sua mão!',
                                        img: 11
                                    }

                                )}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styleprodutos.linha}></View>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/5a8/pistahotwheels.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Super loop Hotwheels</Text>
                            <Text style={styleprodutos.descproduto}>Grandes loop's alucinantes em alta velocidade! Vai encarar?</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 190,80</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra',
                                    {
                                        nome: 'Super loop Hotwheels',
                                        valor: 'R$ 190,80',
                                        desc: 'Grandes loops alucinantes em alta velocidade! Vai encarar?',
                                        img: 12
                                    }

                                )}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/8a12/legoahsoka.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Lego Ahsoka Tano</Text>
                            <Text style={styleprodutos.descproduto}>Lady Tano e sua padawan Sabine em uma grande batalha com seu interceptador Jedi!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 240,90</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra',
                                {
                                    nome: 'Lego Ahsoka Tano',
                                    valor: 'R$ 240,90',
                                    desc: 'Lady Tano e sua padawan Sabine em uma grande batalha com seu interceptador Jedi!',
                                    img: 13
                                }
                                
                                )}>
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
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra',
                                 {
                                    nome: 'Lego UP Altas aventuras',
                                    valor: 'R$ 270,00',
                                    desc: 'A casa voadora mais famosa da Disney, Agora em peças de lego para uma complexa diversão!',
                                    img: 14
                                }
                                
                                )}>
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
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra',
                                 {
                                    nome: 'Omnitrix Força Alienígena',
                                    valor: 'R$ 79,90',
                                    desc: 'O mais poderoso artefato da galáxia, agora em seu pulso!',
                                    img: 15
                                }
                                
                                )}>
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
                                <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra',
                                {
                                    nome: 'Sonic Sega All-Stars RC',
                                    valor: 'R$ 90,50',
                                    desc: 'Automodelo de Sonic the Hedgehog em seu hyper carro de Sega All-stars!',
                                    img: 16
                                }
                                
                                )}>
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

export default ListaPromocao;