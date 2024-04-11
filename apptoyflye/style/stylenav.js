import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    nav: {
        position: 'absolute',
        borderWidth: 2,
        borderColor: 'lightgray',
        width: '102%',
        height: 110,
        top: -5,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#26a1f4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewiconnav: {
        position: 'absolute',
        top: 55,
        left: 30,
    },
    iconnav: {
        width: 38,
        height: 38,
    },
    viewlogonav: {
        top: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logonav: {
        left: 2,
        bottom: 2,
        width: 70,
        height: 70,
    },
})