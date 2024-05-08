import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    imgmlk: {
        borderRadius: 10,
        width: '80%',
        height: '80%',
    },
    viewimgmlk: {
        position: 'absolute',
        top: 160,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#7CE88C',
        width: 150,
        height: 150,
    },
    textmain: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    viewtextmain: {
        position: 'absolute',
        top: 120,
    },
    textdesc: {
        fontSize: 13,
    },
    textdesc2: {
        color: '#26a1f4',
    },
    viewtextdesc: {
        width: '80%',
        position: 'absolute',
        bottom: 145,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 5,
    },
    viewbutton: {
        borderWidth: 3,
        borderColor: 'lightgray',
        borderRadius: 20,
        position: 'absolute',
        bottom: 170,
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26a1f4',
    },
    touchbutton: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbutton: {
        fontSize: 15,
        color: 'white',
    },
    form:{
        width: '60%',
        height: '30%',
        top: 80,
        gap: 5,
    },
    input:{
        backgroundColor: 'white',
        borderRadius: 6,
        height: '19%',
        width: '100%',
        borderWidth: 2,
        borderColor: '#26a1f4',
        padding: 10,
      },
})