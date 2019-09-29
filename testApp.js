import React,{Component} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';

export default class testApp extends Component{

    render(){
        function func() {
            setTimeout(function(){Alert.alert("Hallo", "Wie gehts")},2000)
        }
        return(
            <View>
                <Text>
                    Hallo
                </Text>
                <TouchableOpacity onPress={func}><Text>Press</Text></TouchableOpacity>
            </View>
        )
    }
}