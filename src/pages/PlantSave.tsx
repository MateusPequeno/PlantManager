import React, { useState} from 'react';
import {StyleSheet,
        Text,
        Alert,
        View,
        Image,
        ScrollView,
        Platform,
        TouchableOpacity,        
       } from 'react-native';
import {SvgFromUri} from 'react-native-svg';
import {loadPlant, PlantProps, plantSave} from '../../src/libs/storage';
import {useNavigation, useRoute} from '@react-navigation/core';
import waterdrop from '../../assets/waterdrop.png';
import {Button} from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { isBefore,format } from 'date-fns';

interface Params{
  plant: PlantProps
}

export function PlantSave(){
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios');
  //passar dados entre telas.
  const navigation = useNavigation();

  const route = useRoute();
  const { plant } = route.params as Params;

  function handleChangeTime(event: Event, dateTime : Date | undefined){
    if(Platform.OS == 'android'){
      setShowDatePicker(oldState => !oldState);
    }

    //Condição para a pessoa n poder agendar um horário que já passou
    if(dateTime && isBefore(dateTime, new Date())){
    setSelectedDateTime(new Date() );
    return Alert.alert('Escolha um horáro válido ⏰');
  }

  if(dateTime)
    setSelectedDateTime(dateTime); 
}

  function handleDateTimePickerForAndroid(){
    setShowDatePicker(oldState => !oldState)
  }

  async function handleSave(){
    try{
      await plantSave ({
       ...plant,
        dateTimeNotification: selectedDateTime
      }); 
      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da suas plantinhas.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants',
      });

    }catch{
      Alert.alert('Não foi possível salvar. 😅');
   }
  }

  return(
    <ScrollView
      showsVerticalScrollIndicator = {false}
      contentContainerStyle = {styles.container}
    >
      <View style = {styles.container}>
        <View style = {styles.plantInfo}>
          <SvgFromUri
          uri = {plant.photo}
          height = {150}
          width = {150}
          />
          <Text style = {styles.plantName}>
          {plant.name}
          </Text>
          <Text style = {styles.plantAbout}>
            {plant.about}
          </Text>
        </View>
        <View style = {styles.controller}>
          <View style = {styles.tipContainer}>
            <Image 
            source = {waterdrop}
            style = {styles.tipImage}
            />     
            <Text style = {styles.tipText}>
              {plant.water_tips}
            </Text>
          </View>
          <Text style = {styles.alertLabel}>
            Escolha o melhor horário para ser lembrado:
            </Text>
            {
              showDatePicker && (
                <DateTimePicker 
                  value={selectedDateTime}
                  mode="time"
                  display="spinner"
                  onChange={handleChangeTime}
                />
              )
            }     
            {
              Platform.OS == 'android' && (
                <TouchableOpacity
                  style = {styles.dateTimePickerButton}
                  onPress = {handleDateTimePickerForAndroid}>
                  <Text style = {styles.dateTimePickerText}> 
                    {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                  </Text>
                </TouchableOpacity>
              )
            }

            <Button 
            title = "Cadastrar planta"
            onPress = {handleSave}
            />

        </View>
      </View> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape,
  },
  plantInfo:{
    flex :1,
    paddingHorizontal: 30,
    paddingVertical:50,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: colors.shape,
  },
  plantName:{
    textAlign: 'center',
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 15
  },
  plantAbout:{
    textAlign:'center',
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 10
  },
  controller:{
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  tipContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems : 'center',
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
    position: 'relative',
    bottom: 60,
  },
  tipText:{
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize:17,
    textAlign: 'justify',
  },  
  tipImage:{
    width: 56,
    height: 56,
  },
  alertLabel:{
    textAlign: 'center',
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5
  },
  dateTimePickerButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 40,
  },
  dateTimePickerText: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.text
  }, 
})