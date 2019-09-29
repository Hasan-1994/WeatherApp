var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#679a9e',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    tempContainer: {
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 35,
        fontFamily: 'bnjinx',
        color: 'black'
    },
    tempText: {
        fontSize: 22,
        fontFamily: 'distant',
        color: 'black'
    },
    cityText: {
        fontSize: 20,
        fontFamily: 'distant',
        color: 'black'
    },
    icon: {
        width: 200,
        height: 200
    },
    btnContainer:{
        width: 100,
        height: 10
    }
});
