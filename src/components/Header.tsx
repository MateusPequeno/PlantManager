import React from 'react';
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
  return(
    <View style = {styles.container}>
      <View>
        <Text style = {styles.greeting}>Olá</Text>
        <Text style = {styles.userName}>Mateus</Text>
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