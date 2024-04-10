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
        backgroundColor: 'white',
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
        top: 15,
    },
    logonav: {
        width: 100,
        height: 100,
    },
})