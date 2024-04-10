import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    menu: {
        position: 'absolute',
        borderWidth: 3,
        borderColor: 'lightgray',
        width: '102%',
        height: 70,
        bottom: -10,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#26a1f4',
        justifyContent: 'center',
        gap: 60,
    },
    iconmenu: {
        width: 30,
        height: 30,
        top: 10
    },
})