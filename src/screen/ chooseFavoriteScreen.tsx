import React, {useRef}from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image } from "react-native";
import { BackButton, CategoryList } from "../component";
import { Images,fonts,} from "../constants";
import { TextInput } from "react-native";
import { FaceBook } from "../assets/image";
import { GoogleIcon } from "../assets/image/svg";
import VerificationScreen from "./verificationScreen";
import { FlatList, ScrollView } from "react-native-gesture-handler";
 import { useNavigation } from "@react-navigation/native"; 
const Category=['Museum & Instituation','National Park','Camping Park','Greece Travel','Disneyland Resort',
'Electric Vechile','Rock Climbing','cruise Travel','Travelling Biogger'

]
const NationalCountry=['Canada Travel','China Travel','South Korea','Las Vegas travel','Indonesia Culture']


const renderItem=({item})=>{
    
   return (
    <TouchableOpacity>
    <View style={{
        height:50,
        //backgroundColor:'red',
        margin:10,
        paddingHorizontal:10,
        borderRadius:30,
        justifyContent:'center',
        borderWidth:1,
        borderColor:'black',
        alignItems:'center'

    }}>
        <Text style={{fontFamily:fonts.poppinsRegular,fontSize:14,color:'#222222',textAlign:'center'}}>{item}</Text>
    </View>
    </TouchableOpacity>
   )
}

const ChooseFavoriteScreen=({navigation})=>{
    
    return(
        
   
        <ScrollView style={{flex:1}}>
 
  <View style={{width:'100%',height:'100%'}}>
  <BackButton onPress={()=>{navigation.goBack()}}></BackButton>

  <View style={{width:300,height:88,marginTop:83,marginLeft:30}}>
  <Text style={Style.headingStyle}>Choose Your Favorite</Text>
   <Text style={Style.discriptionStyle} numberOfLines={3}>I'll chose 6 favorite topics that became
    references for my future destination or vacation.
     </Text>
  </View>

 

 <CategoryList 
 data={Category}
 title="Category"
 />

<CategoryList 
 data={NationalCountry}
 title="National country"
 numColumn={3}
 />

<TouchableOpacity style={Style.RegisterButtonStyle}
onPress={()=>{
    navigation.navigate('homeScreen')
   }}
>
 <Text style={Style.registerTextStyle}>Choose Favorite</Text>
 </TouchableOpacity>
 <TouchableOpacity style={{alignItems:"center",justifyContent:'center',margin:30}}>
    <Text style={{textDecorationLine:'underline',fontFamily:fonts.manropeMedium,color:'8E8E93',fontSize:14}}>Skip for now</Text>
 </TouchableOpacity>
  </View>


 
  </ScrollView>
    )

}


const Style=StyleSheet.create({
    headingStyle:{
        fontFamily:fonts.poppin600,
        fontSize:24,
        letterSpacing:0.2,
        color:'#222222'
    },
    discriptionStyle:{
        fontFamily:fonts.poppinsRegular,
        fontSize:14,
        color:'#8E8E93',
        
    },
    FlatListStyle:{
        justifyContent:'center',
        alignItems:"center"
    },
    RegisterButtonStyle:{
        width:354,
        height:56,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:  '#85D3FF',
        alignSelf:'center',
        marginVertical:40,
     
           
    },
    registerTextStyle:{
        color:'#FFFFFF',
        fontFamily:fonts.poppin600,
        fontSize:18,
        lineHeight:22
    },
})

export default ChooseFavoriteScreen;