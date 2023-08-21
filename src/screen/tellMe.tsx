import React from "react";
import { View,Text } from "react-native";
import { TouchableOpacity,StyleSheet,Image, Modal, ImageBase} from "react-native";
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
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { wp,hp,fp, Theme } from "../utils";

const Notification=[
    {
        image:Images.message,
        message:'Component Asset rectangle hand export.Horizontal flows duplicate mask select',
        date:'june 10, 2023',

    },
    {
        image:Images.message,
        message:'Component Asset rectangle hand export.Horizontal flows duplicate mask select',
        date:'june 10, 2023',
    },
    {
    image:Images.message,
        message:'Component Asset rectangle hand export.Horizontal flows duplicate mask select',
        date:'june 10, 2023',

} ,
{
    image:Images.message,
        message:'Component Asset rectangle hand export.Horizontal flows duplicate mask select',
        date:'june 10, 2023',

}    ,
{
    image:Images.message,
        message:'Component Asset rectangle hand export.Horizontal flows duplicate mask select',
        date:'june 10, 2023',

}    ,
{
    image:Images.message,
        message:'Component Asset rectangle hand export.Horizontal flows duplicate mask select',
        date:'june 10, 2023',

}     ,
{
    image:Images.message,
        message:'Component Asset rectangle hand export.Horizontal flows duplicate mask select',
        date:'june 10, 2023',

}     ,
{
    image:Images.message,
        message:'Component Asset rectangle hand export.Horizontal flows duplicate mask select',
        date:'june 10, 2023',

}     ,

]

const  renderItem2 = ({item}) => {
    console.log('item',item)
    
    return (
           <View style={{width:Theme.horizontalSpacing.space360,height:Theme.verticalSpacing.space95,borderBottomWidth:0.26,justifyContent:'center',marginLeft:20,borderColor:'#222222',borderRadius:10,}}>
      <View style={{width:Theme.horizontalSpacing.space300,height:Theme.verticalSpacing.space88 ,flexDirection:'row',margin:10,justifyContent:'center',alignItems:'center'}}>
        <Image
        style={{width:Theme.horizontalSpacing.space40,height:Theme.verticalSpacing.space40,backgroundColor:'#85D3FF',borderRadius:70}}
         source={item.image}
       
        />
        
           <View style={{marginLeft:15}}>
        <Text style={{fontFamily:fonts.poppinsRegular,fontSize:13,color:'#222222',lineHeight:22}}>{item.message}</Text>
       <Text style={{fontFamily:fonts.poppinsRegular,fontSize:12,color:'#8E8E93'}}>{item.date}</Text>
       </View>
      </View>

     
      </View>
    );
  };





const TellMe=({navigation})=>{
    const [selectedButton, setSelectedButton] = useState('notification')
return(
    <View style={{flex:1,
    alignItems:'center'
    }}>
       <View style={Style.notification}>
         <View style={Style.textStyle}>
            <Text style={Style.notificationTextStyle}>Notification</Text>
             <Text style={Style.discriptionText}>You always get the latest news</Text>
         </View>
         
         <View style={Style.imageViewStyle}>
       
       <Image
       style={Style.dpImageStyle}
       source={Images.womann2}
       />
           
     
       </View>

       </View>
     <View style={{width:Theme.horizontalSpacing.space360,height:Theme.verticalSpacing.space40,margin:30,flexDirection:'row'}}>
     <TouchableOpacity style={{width:Theme.horizontalSpacing.space175,height:Theme.verticalSpacing.space35
       ,borderWidth:1,justifyContent:"center",alignItems:'center',borderRadius:5,
       backgroundColor:  selectedButton==='notification'?'white': '#D6D7D8'
       
       }}
       onPress={()=>{
        setSelectedButton('notification')
       }}
       >
       <Text style={{fontFamily:fonts.poppin600}}>Notification</Text>
      
     </TouchableOpacity>
     <TouchableOpacity style={{width:wp(175),height:hp(36)
       ,borderWidth:1,justifyContent:"center",alignItems:'center',
       borderRadius:5,
       backgroundColor:  selectedButton==='activity'?'white': '#D6D7D8'
    }}
       onPress={()=>{
        setSelectedButton('activity')
       }}
       >
       <Text style={{fontFamily:fonts.poppin600}}>Activity</Text>
      
     </TouchableOpacity>
      

     </View>
     
     <View style={{height:'100%'}}>
  <FlatList
  data={Notification}
  renderItem={renderItem2}
  showsVerticalScrollIndicator={false}
  >

  </FlatList>

  </View>

      
    
       
    </View>
)
}
const Style=({
    notification:{
        flexDirection:'row',
        width:'100%',
        height:Theme.verticalSpacing.space123,
       // backgroundColor:"red"
    },
    textStyle:{
        width:Theme.horizontalSpacing.space300,
        //backgroundColor:'yellow'
    },
    notificationTextStyle:{
        fontFamily:fonts.poppin600,
        fontSize:Theme.fontSize.headline,
        color:'#222222',
        marginTop:Theme.verticalSpacing.space40,
        marginLeft:15
    },
    discriptionText:{
        fontFamily:fonts.poppinsRegular,
        fontSize:12,
        color:'#8E8E93',
        marginLeft:Theme.horizontalSpacing.space15,
        marginTop:Theme.verticalSpacing.space10
    },
    imageViewStyle:{
        borderRadius:Theme.borderRadius.image100,
        width:Theme.horizontalSpacing.space60,
        height:Theme.verticalSpacing.space70,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:35
    },
    dpImageStyle:{
        width:Theme.horizontalSpacing.space50,
        height:Theme.verticalSpacing.space60,
        borderRadius:Theme.borderRadius.extraLarge40,
        position:'absolute'
    }
})
export default TellMe;
