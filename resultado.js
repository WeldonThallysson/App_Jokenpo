# App_Jokenpo
import React,{Component} from 'react';
import {View,Text} from 'react-native';

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

 export default resultado;
