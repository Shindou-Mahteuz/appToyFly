import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    imgmlk: {
        borderRadius: 10,
        width: '95%',
        height: '95%',
    },
    viewimgmlk: {
        position: 'absolute',
        top: 130,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#83F894',
        width: 300,
        height: 300,
    },
    textmain: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    viewtextmain: {
        position: 'absolute',
        bottom: 270,
    },
    textdesc: {
        fontSize: 13,
    },
    viewtextdesc: {
        width: '80%',
        position: 'absolute',
        bottom: 195,
    },
    viewbutton: {
        borderWidth: 3,
        borderColor: 'lightgray',
        borderRadius: 20,
        position: 'absolute',
        bottom: 130,
        width: '60%',
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
    textbutton:{
        fontSize: 15,
        color: 'white',
    },
})