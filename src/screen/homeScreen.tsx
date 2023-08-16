import React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, Modal, ImageBase} from "react-native";
import { BackButton, 
    HorizontalViewList } from "../component";
import { Images,fonts,} from "../constants";
import { TextInput } from "react-native";
import ChooseFavoriteScreen from "./ chooseFavoriteScreen";
import { GoogleLoction } from "../assets/image/svg";
import CountryPicker from 'react-native-country-picker-modal'
import { useState } from "react";
 import { FlatList } from "react-native";
import{OnlineLogo}from "../assets/image/svg";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const chooseLocation=['All Filter','National Park','Cruise Travel','Local Travel']
const ImageData=[
{
    Image:Images.travelImage,
    headind:'Name of Destination',
    Discription:'Outline project comonent link content stroke group.Flatten community library',
    price: 'start from $5 / day'
    
    
},
{
    Image:Images.travelImage,
    headind:'Name of Destination',
    Discription:'Outline project comonent link content stroke group.Flatten community library',
    price: 'start from $8 / day'
    
    
},
{
    Image:Images.travelImage,
    headind:'Name of Destination',
    Discription:'Outline project comonent link content stroke group.Flatten community library',
    price: 'start from $12 / day'
    
    
},
{
    Image:Images.travelImage,
    headind:'Name of Destination',
    Discription:'Outline project comonent link content stroke group.Flatten community library',
    price: 'start from $9 / day'
    
    
},
]

const Bottom=createBottomTabNavigator()

const HomeScreen=({navigation})=>{

return (
    <View style={Style.mainViewStyle}>
        <BackButton onPress={()=>{navigation.goBack()}}></BackButton>
        <View style={{flexDirection:'row',margin:10,width:100,height:30,alignItems:'center',backgroundColor:'yellow',}}>
      <GoogleLoction color={'black'}></GoogleLoction>

      <Text style={{fontFamily:fonts.poppinsRegular,color:'#8E8E93'}}>Location</Text>
      </View>

      <View style={{width:'350',height:60,flexDirection:'row',justifyContent:'flex-end',marginRight:40}}>
      
       <View style={{borderRadius:100,width:60,height:60,borderWidth:1,alignItems:'center',justifyContent:'center'}}>
       
       <Image
       style={{width:48,height:48,borderRadius:40}}
       source={Images.womann2}
       />
   
     
       </View>
      </View>

      <View style={{width:227,height:72,margin:20}}>
        <Text style={{fontFamily:fonts.poppin600,fontSize:24,color:'#222222'}}>Wherever You Go, It's Beautiful Place</Text>
      </View>

       <TouchableOpacity style={{}}>
        <HorizontalViewList data={chooseLocation}></HorizontalViewList>
       </TouchableOpacity>

      <View style={{width:'100%',height:350,margin:20,justifyContent:'center',alignItems:'center'}}>
       <HorizontalViewList data={ImageData}
       isforFilter={false}
       ></HorizontalViewList>
      </View>
    

    </View>
)
}
const Style=StyleSheet.create({
    mainViewStyle:{
        width:'100%',
    height:'100%',
   //backgroundColor:'red'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        fontSize: 16,
        color: '#007AFF',
      },
      selectedCountryContainer: {
        marginTop: 20,
        alignItems: 'center',
      },
      selectedCountryText: {
        fontSize: 18,
      },
})

export default HomeScreen;