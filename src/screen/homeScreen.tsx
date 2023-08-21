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
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Theme } from "../utils";
const chooseLocation=['All Filter','National Park','Cruise Travel','Local Travel']
const ImageData=[
{
    Image:Images.travelImage,
    heading:'Name of Destination',
    Discription:'Outline project comonent link content stroke group.Flatten community library',
    price: 'start from $5 / day'
    
    
},
{
    Image:Images.travelImage,
    heading:'Name of Destination',
    Discription:'Outline project comonent link content stroke group.Flatten community library',
    price: 'start from $8 / day'
    
    
},
{
    Image:Images.travelImage,
    heading:'Name of Destination',
    Discription:'Outline project comonent link content stroke group.Flatten community library',
    price: 'start from $12 / day'
    
    
},
{
    Image:Images.travelImage,
    heading:'Name of Destination',
    Discription:'Outline project comonent link content stroke group.Flatten community library',
    price: 'start from $9 / day'
    
    
},
]

const Bottom=createBottomTabNavigator()

const HomeScreen=({navigation})=>{

return (
    <View style={Style.mainViewStyle}>
       <Text>
      
  
     
      </Text>
        <BackButton onPress={()=>{navigation.goBack()}}></BackButton>
        <View style={{flexDirection:'row',margin:Theme.horizontalSpacing.space15,width:Theme.horizontalSpacing.space100,height:Theme.verticalSpacing.space30,alignItems:'center',}}>
      <GoogleLoction color={'black'}></GoogleLoction>

      <Text style={{fontFamily:fonts.poppinsRegular,color:'#8E8E93'}}>Location</Text>
      </View>

      <View style={{width:'350',height:Theme.verticalSpacing.space50,flexDirection:'row',justifyContent:'flex-end',marginRight:Theme.horizontalSpacing.space40}}>
      
       <View style={{borderRadius:Theme.borderRadius.image100,width:Theme.horizontalSpacing.space60,height:Theme.verticalSpacing.space70,borderWidth:1,alignItems:'center',justifyContent:'center'}}>
       
       <Image
       style={{width:Theme.horizontalSpacing.space50,height:Theme.verticalSpacing.space60,borderRadius:Theme.borderRadius.extraLarge40}}
       source={Images.womann2}
       />
   
     
       </View>
      </View>

      <View style={{width:Theme.horizontalSpacing.space230,height:Theme.verticalSpacing.space88,marginLeft:Theme.horizontalSpacing.space24}}>
        <Text style={{fontFamily:fonts.poppin600,fontSize:Theme.fontSize.extraLargeTitle24,color:'#222222'}}>Wherever You Go, It's Beautiful Place</Text>
      </View>

       <TouchableOpacity style={{marginLeft:Theme.horizontalSpacing.space15}}>
        <HorizontalViewList data={chooseLocation}></HorizontalViewList>
       </TouchableOpacity>

      <View style={{width:'100%',height:'55%',margin:Theme.horizontalSpacing.space15,justifyContent:'center',alignItems:'center'}}>
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
        fontSize:Theme.fontSize.subHeading16,
        color: '#007AFF',
      },
      selectedCountryContainer: {
       // marginTop:the,
        alignItems: 'center',
      },
      selectedCountryText: {
       // fontSize: 18,
      },
})

export default HomeScreen;