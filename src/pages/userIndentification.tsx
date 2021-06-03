import React,{useState} from 'react';
import {StyleSheet,
  SafeAreaView,
  View,
  Text
  ,TextInput
  ,KeyboardAvoidingView
  ,Keyboard
  ,TouchableWithoutFeedback}  from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Button} from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification(){
  const [isFocused , setIsFocused ] = useState(false);
  const [isFilled , setIsFilled ] = useState(false);
  const [name , setName ] = useState<string>(); // para tipar o dado se coloca o string
  const navigation = useNavigation();
  function handleInputBlur (){
    setIsFocused(false);
    setIsFilled(!!name);
  }
  function handleInputFocus (){
    setIsFocused(true)
  }
  function handleInputChange (value : string){
    setIsFilled(!!value); //value passa a ser um conteudo lógico, 1 verdadeiro 0 falso
    //Caso tenha conteúdo será verdadeiro, se não tiver falso.
    setName(value);
   }
   function handleSubmit (){
    navigation.navigate('Confirmation');
  }
  return(
    <SafeAreaView style  = {styles.container} >
      <KeyboardAvoidingView style = {styles.container}>
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
      <View  style  = {styles.content} >
        <View  style  = {styles.form}>
          <Text style = {styles.emoji}>
            😀
          </Text>
          <Text style = {styles.title}>
            Como podemos {'\n'}
            chamar você?
          </Text>
          <TextInput 
          style = {[styles.input,
                    (isFocused || isFilled) && //&& seria o então
                    {borderColor:colors.green}
           ]}
            placeholder = "Digite seu nome"
            onBlur = {handleInputBlur}
            onFocus =  {handleInputFocus}
            onChangeText = {handleInputChange}
          />
          <View style = { styles.footer}>
          <Button title = "Confirmar"
          onPress = {handleSubmit}
          />
          </View>
          </View>
           
        </View>
        </TouchableWithoutFeedback> 
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({  
    container:{
      flex : 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    content : {
      flex: 1,
      width: '100%'
    },
    form :{
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 54,
      alignItems: 'center',
    },
    emoji:{
      fontSize: 30
    },
    input : {
      borderWidth : 1,
      borderColor: colors.gray,
      color : colors.heading,
      width: '100%',
      fontSize: 18,
      marginTop : 50,
      padding : 10,
      textAlign: 'center'
    },
    title:{
      marginTop : 20, // Espaço o titulo do icone 
      fontSize: 24, 
      lineHeight : 32,
      textAlign:'center',
      color:colors.heading,
      fontFamily: fonts.heading
    },
    footer:{
      marginTop: 40,
      width : '100%', 
      paddingHorizontal : 20
    }
})