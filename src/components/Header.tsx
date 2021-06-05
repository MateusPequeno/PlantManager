import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect,useState} from 'react';
import {StyleSheet,
        Text,
        Image,
        View,
        Button,
      } from 'react-native';
import { color } from 'react-native-reanimated';
import UserImg from '../../assets/UserAvatar.png';
import  colors  from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
  //ARMAZENAR ESTADO
  const [userName,setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName(){     //Chave.
      //Await por ter tempo de espera
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '');
      //Ou aceita o nome de usuário digitado ou retorna nada. 
    }
    loadStorageUserName();  
  },[userName]);  
  //Ao alterar o userName chama o useEffect.
  return(
    <View style = {styles.container}>
      <View>
        <Text style = {styles.greeting}>Olá</Text>
        <Text style = {styles.userName}>
          {userName}
          </Text>
      </View>
      <Image source = {UserImg} style = {styles.image}  />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection: 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    paddingVertical: 20,
    padding: 20,
    },
  image:{
    width: 80,
    height: 80,
    borderRadius:40,
  },
  greeting:{
    fontSize : 32,
    color : colors.heading,
    fontFamily: fonts.text,
    marginTop: 10,
  },
  userName:{
    fontSize: 32,
    fontFamily: fonts.heading,
    color : colors.heading,
    lineHeight: 40,
  }
});