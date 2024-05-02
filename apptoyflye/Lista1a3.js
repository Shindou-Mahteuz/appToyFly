import { React, useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image, SafeAreaView, ScrollView, Button, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import styleprodutos from './style/styleprodutos';
import { useNavigation } from '@react-navigation/native';

function Lista1a3({ route }) {
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        fetch('http://172.16.42.89/apiToyFly/select')
            //fetch('https://api.semlimite.app.br/select/')
            .then(response => response.json())
            .then(data => setProdutos(data))
            .catch(error => alert('Sem Registro'));
    }, []);
    const navigation = useNavigation();
    const aviso = (a, b, c, d, e) => {
        alert(a, b, c, d, e);
    }
    return (
        <View style={styles.container}>
            <View style={styleprodutos.descpage}>
                <Text>1 a 3 anos</Text>
            </View><SafeAreaView style={styleprodutos.produtos}>
                    <FlatList
                        data={produtos}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => aviso(item.id, item.nome, item.descricao, item.preco, item.idade)}>
                                
                                <View style={styleprodutos.card}>
                                    <View style={styleprodutos.viewimgmidade}>
                                        <Image source={require('./assets/1a3/andadorzinho.jpg')} style={styleprodutos.imgidade}></Image>
                                    </View>
                                    <View style={styleprodutos.viewtextoproduto}>
                                        <Text style={styleprodutos.titleproduto}>{item.nome}</Text>
                                        <Text>{item.imagem}</Text>
                                        <Text style={styleprodutos.descproduto}>{item.descricao}</Text>
                                        <Text style={styleprodutos.precoproduto}>{item.preco}</Text>
                                        <View style={styleprodutos.viewbutton2}>
                                            <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra', { nome: 'Andador Fischer Price', valor: 'R$ 85,90', desc: 'Um andador divertido cheio de cor e ferramentas para estimular a criatividade e coordenação motora de seu pequeno!', img: 1 })}>
                                                <Text style={styleprodutos.textbutton}>Comprar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={styleprodutos.linha}></View>
                            </TouchableOpacity>
                        )} />
            </SafeAreaView>
        </View>
    );
}

export default Lista1a3;