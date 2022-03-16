# App_Jokenpo
import React,{Component} from 'react';
import {View,
        Text,
        StyleSheet,
        Button,
        Image} from 'react-native';


class Ppt extends Component{
    constructor(props){
      super(props);

   this.state = { escolhaUsuario : '',
    escolhaComputador : '',
    resultado : ''}
    
 }


jokenpo(escolhaUsuario){

 var Gera_Resultado = Math.floor(Math.random() * 3);
 
 var escolhaComputador = ''

  switch(Gera_Resultado){
    case 0: escolhaComputador = 'Pedra';break;
    case 1: escolhaComputador = 'Papel';break;
    case 2: escolhaComputador = 'Tesoura';break;
  }


 var resultado = '';

  if(escolhaComputador == 'Pedra'){
    if(escolhaUsuario == 'Pedra'){
      resultado = 'Empate'
  
  }if(escolhaUsuario == 'Papel'){
    resultado ='Você Venceu';
  }if(escolhaUsuario == 'Tesoura'){
    resultado = 'Computador Venceu'
   }
  }

  if(escolhaComputador == 'Papel'){
    if(escolhaUsuario == 'Papel'){
      resultado = 'Empate' 
  }if(escolhaUsuario == 'Tesoura'){
    resultado = 'Você Venceu';
  }if(escolhaUsuario == 'Pedra'){
    resultado = 'Computador Venceu';
  }
}

 if(escolhaComputador == 'Tesoura'){
   if(escolhaUsuario == 'Tesoura'){
    resultado = 'Empate';
   }
   if(escolhaUsuario == 'Pedra'){
    resultado = 'Você Venceu';
   }
   if(escolhaUsuario == 'Papel'){
    resultado = 'Computador Venceu';
   }
 }

  
   

  this.setState({ escolhaUsuario : escolhaUsuario,
    escolhaComputador : escolhaComputador,
    resultado : resultado
  });

}

  render(){
    return(
      <View>
          <View>
          <Image source={require('./imgs/jokenpo.png')} style={{width:380,height:200}}/>
          </View>
          <View style={Estilos.ConteinerB}>
           

           <View style={Estilos.Conteinerbotoes}>
            <Button title="Pedra" onPress={ () => {this.jokenpo('Pedra')}}/>
           </View>

            <View style={Estilos.Conteinerbotoes}>
             <Button title="Papel" onPress={ () => {this.jokenpo('Papel')}}/>
            </View>
           
            <View style={Estilos.Conteinerbotoes}>
             <Button title="Tesoura" onPress={ () => {this.jokenpo('Tesoura')}}/>
            </View>
          </View> 

        <View style={Estilos.conteinerResult}>
         <Text style={Estilos.result}>{this.state.resultado}</Text>
        </View>  
        
        <View style={Estilos.conteinerIcone}>
         <Icone escolha={this.state.escolhaUsuario} jogador="Você"></Icone>
         </View>
          <View style={Estilos.conteinerIcone}>
         <Icone escolha={this.state.escolhaComputador} jogador="Computador"></Icone>
        </View>
 

      </View>

      );
  }
}

class Icone extends Component{
  render(){

    if(this.props.escolha == 'Pedra'){
      return (
        <View>
          <Text style={Estilos.txtjogador}>{this.props.jogador}</Text>
          <Image source={require('./imgs/pedra.png')} />
        </View>
      );

    } else if(this.props.escolha == 'Papel'){
      return (
        <View>
          <Text style={Estilos.txtjogador}>{this.props.jogador}</Text>
          <Image source={require('./imgs/papel.png')} />
        </View>
      );

    } else if(this.props.escolha == 'Tesoura'){
      return (
        <View>
          <Text style={Estilos.txtjogador}>{this.props.jogador}</Text>
          <Image source={require('./imgs/tesoura.png')}/>
        </View>
      );

    } else {
      return false;
    }

  }
}
export default Ppt;

const Estilos = StyleSheet.create({
  conteinerResult:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10
  },
  result:{
    color:'red',
    fontSize: 25,
    fontWeight:'bold'
  },
  conteinerIcone:{ 
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    padding: 15

  },
  Conteinerbotoes:{
    flex: 1,
    width:100,
    marginTop: 5,
    margin: 10,
 
    



  },
  ConteinerB:{
    flexDirection:'row'
  },
  txtjogador:{
    textAlign: 'center',
    fontSize: 15,
    fontWeight:'bold'
  }


});
