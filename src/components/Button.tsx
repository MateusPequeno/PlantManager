import React from 'react';
import {Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,}  from 'react-native';
import colors from '../styles/colors'
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps{
  title: string;
}
/*Cria a tipagem para o botão, definindo o titulo como string,
e extende todas as propriedades do TouchableOpacityProps
Assim posso definir o title no return {title}
e mudar o titulo do botão mais fácilmente
obs: ...rest (resto das propriedades do opacity)
*/
export function Button({title, ...rest}: ButtonProps){
  return(
    <TouchableOpacity style = {styles.container}{...rest}>
      <Text style = {styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.green,
    height: 56,
    borderRadius : 16 , 
    justifyContent : 'center',
    alignItems : 'center',
  },
  text:{
    fontSize : 16,
    color : colors.white,
    fontFamily: fonts.heading
  }
})