import React from 'react';
import {  Text,
   SafeAreaView,Image
   ,TouchableOpacity,
    StyleSheet 
  ,Dimensions
  ,View} 
    from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/core';
import wateringImg from "../../assets/watering.png";
import colors from '../styles/colors';
import fonts from '../styles/fonts';
export function Welcome() {
  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate('UserIdentification');
  }
  return (
    <SafeAreaView style =  {styles.container}>
      <View style = {styles.wrapper}>
      <Text style = {styles.title}>
        Gerencie {'\n'}suas plantas {'\n'} de forma fácil
      </Text>

    <Image 
    source = {wateringImg} 
    style = {styles.image} 
    resizeMode = 'contain'
    />

    <Text style = {styles.subTitle}>
      Não esqueça de regar suas plantas, vamos te lembrar sempre que precisar
      </Text>

    <TouchableOpacity 
    style = {styles.button} 
    activeOpacity = {0.7} 
    onPress = {handleStart}>

    <Feather name = "chevron-right" style = {styles.buttonIcon}/>
    
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1, //ocupar a tela toda
    alignItems: 'center',
    justifyContent : 'space-around', //elementos vao distribuir o espeço por igual
  },
  wrapper:{
    flex : 1,
    alignItems: 'center',
    justifyContent : 'space-around', //elementos vao distribuir o espeço por igual
    paddingHorizontal: 20,
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 35,
    fontFamily: fonts.heading,
    lineHeight: 38
  },
  subTitle:{
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.text
  },
  button:{
    backgroundColor:colors.green,
    justifyContent : 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom:10,
    height: 56,
    width: 300
  },
  image:{
    height: 284,
     width: 264,
   // height: Dimensions.get('window').width * 0.7
  },
  buttonIcon:{
    fontSize: 22,
    color: colors.white
  }
});