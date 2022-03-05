import React, { Component} from 'react';
import { Text, View, StyleSheet, Image,TextInput, TouchableOpacity, FlatList, } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

class App extends Component{
  render(){
    return(
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#ffe4c4', '#e9967a']}
        style={styles.background}
      />

      <View style={styles.content}>
        
        <Image 
        source={require('./src/img/DNS-3.png')}
        style={styles.logo}
        />

        <Text style={styles.texto}>
          Leonice Ruvienski
          Desenvolvedora de Software
        </Text>

        <TouchableOpacity style={styles.btn}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Mais Informações</Text>
          </View>
        </TouchableOpacity>

        
    

      </View>
         
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#e9967a',
    flex:1, 
    alignItems: 'center',    
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:550
  },
  content:{
    alignItems: 'center',
    justifyContent: 'center'
  
  },
  logo: {
    marginTop: 100,
    height: 150,
    width: 150, 
       
  },
  texto:{   
    padding: 10,
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
  },
  btn:{
    width: 120,
    height: 25,
    borderWidth: 0,    
    borderRadius: 25,
    backgroundColor: '#ff5555ff'
    
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff'

  }
 
});

export default App;

