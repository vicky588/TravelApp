import React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, Modal, ImageBase} from "react-native";
import { BackButton, 
    CategoryList, 
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
import { ScrollView } from "react-native-gesture-handler";
import { Svg,Path } from "react-native-svg";



const chooseLocation=[
  {
  title:'All Filter',
    isSelected:false
  },
  {
   title:'National Park',
  isSelected:false
  },
  {
  title:'Cruise Travel',
  isSelected:true
  },
  {
   title:'Local Travel',
  isSelected:false
  }
]



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

  const [selectLocation,setSelectLocation]=useState(chooseLocation)
  
console.log('select location',selectLocation)
  
  const RenderItem1=(location)=>{
   
  return(
    <TouchableOpacity
    onPress={()=>{singleSelect(location)}}
    >
    <View style={{width:Theme.horizontalSpacing.space124,
      height:Theme.verticalSpacing.space50,borderWidth:1,
      alignItems:'center',margin:8,borderRadius:20,
      justifyContent:'center',
      backgroundColor:location.isSelected?'#213555':'white',}}
      >
      <Text style={{color:location.isSelected?'white':'black'}}>{location.title}</Text>
  
    </View>
    </TouchableOpacity>
  )
  }
 
 
  const singleSelect=(location)=>{
   
 const singleLocation = selectLocation.map(item2 => {

        if (item2.title === location.title) {
          return { ...item2,isSelected :! item2.isSelected}
        } 
        return {
            ...item2, isSelected:false,
        };
  
      });
      
       setSelectLocation(singleLocation)
    }
  
  
return (
  <ScrollView>
    <View style={Style.mainViewStyle}>
    <TouchableOpacity
   onPress={()=>(
    navigation.goBack()
   

   )}
   style={{marginTop:Theme.verticalSpacing.space17}}
   >
   <Svg style={{width:Theme.horizontalSpacing.space50,height:Theme.verticalSpacing.space50}}>
        <Path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </Svg>
   
   </TouchableOpacity>

       
        <View style={{flexDirection:'row',margin:Theme.horizontalSpacing.space15,width:Theme.horizontalSpacing.space100,height:Theme.verticalSpacing.space30,alignItems:'center',}}>
      <GoogleLoction color={'black'}></GoogleLoction>

      <Text style={{fontFamily:fonts.poppinsRegular,color:'#8E8E93'}}>Location</Text>
      </View>

      <View style={{width:'350',height:Theme.verticalSpacing.space50,flexDirection:'row',justifyContent:'flex-end',marginRight:Theme.horizontalSpacing.space40}}>
      
       <View style={{borderRadius:Theme.borderRadius.image100,width:Theme.horizontalSpacing.space60,height:Theme.verticalSpacing.space70,alignItems:'center',justifyContent:'center'}}>
       
       <Image
       style={{width:Theme.horizontalSpacing.space50,height:Theme.verticalSpacing.space60,borderRadius:Theme.borderRadius.extraLarge40}}
       source={Images.womann2}
       />
   
     
       </View>
      </View>

      <View style={{width:Theme.horizontalSpacing.space230,height:72,marginLeft:Theme.horizontalSpacing.space24}}>
        <Text style={{fontFamily:fonts.poppin600,fontSize:Theme.fontSize.extraLargeTitle24,color:'#222222'}}>Wherever You Go, It's Beautiful Place</Text>
      </View>
          
          <FlatList
          style={{width:'100%',height:50}}
          data={selectLocation}
          renderItem={({item})=>RenderItem1(item)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
            </FlatList> 
     
      

      <View style={{width:'100%',height:'55%',margin:Theme.horizontalSpacing.space20,justifyContent:'center',alignItems:'center'}}>
       <HorizontalViewList data={ImageData}
       isforFilter={false}
       ></HorizontalViewList>
      </View>
    

    </View>
    </ScrollView>
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