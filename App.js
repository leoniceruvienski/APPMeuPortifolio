import React, { Component} from 'react';
import { Text, View, StyleSheet, Image,TextInput, TouchableOpacity, Linking, Button, Modal, } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      modalVisible: false
    };

    this.maisinformacoes = this.maisinformacoes.bind(this);
    this.voltar = this.voltar.bind(this);
  }
  maisinformacoes(){
    this.setState({modalVisible: true});
  }
  voltar(visible){
    this.setState({modalVisible: visible});
  }
  
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

        <Button title="Mais Informações" onPress={this.maisinformacoes} color= '#ff7f50'/>

      </View>

      <Modal animationType="slide" visible={this.state.modalVisible}>
        <View style={{backgroundColor: '#e9967a', flex: 1, justifyContent: 'space-around', alignItems: 'center'}}> 

        {/* <LinearGradient
        colors={['#ffe4c4', '#e9967a']}
        style={styles.background} */}
      {/* /> */}
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'justify', margin: 20}}>Meu nome é Leonice sou formada em matemática pela Universidade Estadual do Centro-Oeste - Unicentro, atualmente trabalho como funcionária pública no município de Irati. Nas minhas horas vagas estou estudando programação, pois pretendo migrar para a área de tecnologia, especificamente para a área de desenvolvimento de software.</Text>

          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'justify', margin: 20}}>Estou estudando as tecnologias mais atuais para desenvolvimento  web e mobile (HTML, CSS3, JAVASCRIPT, TYPESCRIPT, SCSS e REACT-NATIVE).</Text>

          <TouchableOpacity style={styles.git} onPress= {() => {
            Linking.openURL('https://github.com/leoniceruvienski');
          }}>
         
          <Image
          source={require('./src/img/GitHub-Logo.png')}
          style={styles.githube}
          />
          
          </TouchableOpacity>      
          

          <Button title= "voltar" onPress= { () => this.voltar(false)} color= '#ff7f50' />
        </View>
      </Modal>
         
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#e9967a',
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',  
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
    marginTop: 10,
    height: 150,
    width: 150, 
       
  },
  texto:{   
    padding: 50,
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
  },
  githube:{
    width: 40,
    height: 30,
    margin: 10,
  },
  git:{
    alignItems: 'center',
    backgroundColor: '#fabc',
    width: 50,
    height: 50,
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});



