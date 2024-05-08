import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image, SafeAreaView, ScrollView, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import stylecarrinho from './style/stylecarrinho';
import Menu from './Menu';
import Nav from './Nav';

function Carrinho({ navigation, route }) {
    const [id2, setId2] = useState('');
    console.log(route.params);
    const {descricao, id, idade, nome, preco, imagem} = route.params;
    const comprar = async () => {
        try {
            const idV = await AsyncStorage.getItem('id');
            if (idV !== null) {
                setId2(idV);
                navigation.navigate('Compra', {imagem, nome, descricao, preco});
            } else {
                Alert.alert("Você ainda não está logado!");
                navigation.navigate('Login');
            }
        } catch (error) {
            console.log('Erro ao carregar valor:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={stylecarrinho.descpage}>
                <Text>1 a 3 anos</Text>
            </View><SafeAreaView style={stylecarrinho.produtos}>
                <ScrollView style={stylecarrinho.scrollview}>

                    <View style={stylecarrinho.card}>
                        <View style={stylecarrinho.viewimgmidade}>
                            <Image source={{ uri: `${imagem}` }} style={stylecarrinho.imgidade}></Image>
                        </View>
                        <View style={stylecarrinho.viewtextoproduto}>
                            <Text style={stylecarrinho.titleproduto}>{nome}</Text>
                            <Text style={stylecarrinho.descproduto}>{descricao}</Text>
                            <Text style={stylecarrinho.precoproduto}>{preco}</Text>
                        </View>
                    </View>

                    <View style={stylecarrinho.linha}></View>

                    <View style={stylecarrinho.card2}>
                        <View style={stylecarrinho.viewbutton2}>
                            <TouchableOpacity style={stylecarrinho.touchbutton} onPress={comprar}>
                                <Text style={stylecarrinho.textbutton}>Finalizar Compras</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    
                </ScrollView>

            </SafeAreaView>
            <Nav></Nav>
            <Menu></Menu>
        </View>
    );
}

export default Carrinho;