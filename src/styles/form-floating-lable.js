import EStyleSheet from 'react-native-extended-stylesheet';


const cssFormFloatingLabel = EStyleSheet.create({
    flText: {
        color: '#fff',
        fontFamily: 'Exo-Regular',
    },
    flInput: {
        color: '#000',
        fontSize: 20,
        marginTop: 0,
        fontFamily: 'Exo-Regular',
        width: '100%',
        height: 50,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        paddingRight: 0,
    },
    inlineInput: {
        color: '#fff',
        fontSize: 20,
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5,
        fontFamily: 'Exo-Regular',
        width: '100%',
        paddingLeft: 28,
        height: 50,
    },
    inlineLabel: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.6,
        textAlign: 'left',
        width: '100%',
        fontFamily: 'Exo-Regular',
    },
    inlineIcon: {
        position: 'absolute',
        left: 0,
        zIndex: 1,
        paddingLeft: 7,
        paddingTop: 5,
    },
    stackedTextarea: {
        color: '#fff',
        fontSize: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        fontFamily: 'Exo-Regular',
        width: '100%',
    },
    flItem: {
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 30,
        fontFamily: 'Exo-Regular',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(171, 180, 189, 0.3)',
    },
    itemDisabled: {
        borderBottomWidth: 0,
    },
    itemDisabledText: {
        color: '#ABB4BD',
    },
    stackedLabel: {
        fontSize: 16,
        color: '#fff',
        opacity: 0.6,
        textAlign: 'left',
        width: '100%',
        fontFamily: 'Exo-Regular',
    },
    sectionTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'Exo-Regular',
        textAlign: 'left'
    },
    formLabel: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 14,
        fontFamily: 'Exo-Regular',
        textAlign: 'left'
    },
    pickerWrap: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'rgba(171, 180, 189, 0.3)',
        width: '100%',
        borderRadius: 4,
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
        backgroundColor: '#255546',
        fontWeight: '700',
        paddingLeft: 15,
        paddingRight: 15,
    }
});
  
EStyleSheet.build();


export { cssFormFloatingLabel }