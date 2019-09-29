import React, { Component } from 'react';
import { Text, View, Platform, Alert, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { ApiKey } from './source/components/apiKey/ApiKey'
var styles = require('./source/components/style/style')

export default class App extends Component {
  state = {
     lat: 52.517,
     lon: 13.3883,
     isLoading: true,
     temperature: 0,
     name: ''
  }
  //Für überschreiben der Latetude und Logitude wird eine Standortgenämigung gebraucht. 
  //Hierzu kommt die Methode navigator.geolocation.getCurrentPosition ins Spiel.
  componentDidMount() {
     navigator.geolocation.getCurrentPosition(
        position => {
           this.fetchWeather(this.state.lat, this.state.lon);
        },
     );
  }
  //Daten werden aus der API gezogen.  Latetude und Longitude werden über die State runtergzogen,
  //mein ApiKey wird ebenfalls eingefügt.
  fetchWeather(lat = this.state.lat, lon = this.state.lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${ApiKey}&units=metric`
   ).then(res => res.json())
   .then(json => {
      this.setState({
         temperature: json.main.temp,
         name: json.name,
         isLoading: false,
      });
   });
  
  }   
  render() {
    const { isLoading } = this.state
    function timer()
    {while(isLoading === true){
      setTimeout(function(){Alert.alert('Error', 'Please check your Location Values')},5000)
    }
  }
    // function timer(){
    //   if(isLoading === true){
    //     setTimeout(function(){Alert.alert('Error', 'Please check your Location Values')},5000)
    //   }else{
    //     isLoading = {isLoading}
    //   }
    // }
    return (
      <View style={styles.mainContainer}>
        
        <Text style={styles.header}>
          Wetter App
        </Text>
        
        <Image source={require('./source/components/assets/images/weather.png')} style={styles.icon}/>
        

        <View>
        <Text style={styles.cityText}>
        {this.state.name}
        </Text>
        </View>


        <View style={styles.mainContainer}>
          {isLoading ? (
            timer(),
            <ActivityIndicator size="large" color="#0000ff"/>
          ) 
          : 
          (
              <Text style={styles.tempText}>
                Die Tempertur beträgt {this.state.temperature} °C
                </Text>
          )}
        </View>

      </View>
    )
  }
}