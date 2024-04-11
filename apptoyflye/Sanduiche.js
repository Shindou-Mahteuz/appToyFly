import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Home from './Home';

const Drawer = createDrawerNavigator();

function Sanduiche() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: 'white',
                    width: 250,
                },
            }}>
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default Sanduiche;
