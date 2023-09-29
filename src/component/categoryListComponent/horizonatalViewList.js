import React, {useRef}from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image } from "react-native";
import { Images,fonts,} from "../../constants";
import { TextInput } from "react-native";

import { FlatList } from "react-native-gesture-handler";
  
const renderItem=({item})=>{
    console.log('item',item)
   return (
    <TouchableOpacity>
    <View style={{
        height:50,
        //backgroundColor:'red',
        marginHorizontal:13,
        paddingHorizontal:10,
        borderRadius:30,
        justifyContent:'center',
        borderWidth:0.40,
        borderColor:'black',
        alignItems:'center'

    }}>
       
        <Text style={{fontFamily:fonts.poppinsRegular,fontSize:14,color:'#222222',textAlign:'center'}}>{item}</Text>
    </View>
    </TouchableOpacity>
   )
}

const renderItem1=({item})=>{
    console.log('item',item)
   return (
    <TouchableOpacity>
    <View style={{
        height:386,
        width:200,
        //backgroundColor:'red',
        marginHorizontal:10,
       //justifyContent:'center',
        //borderWidth:0.40,
        borderColor:'black',
       // alignItems:'center'

    }}>
         <Image
         style={Style.imageStyle}
        source={item.Image}
        ></Image>
        <Text style={{fontFamily:fonts.poppinsRegular,color:'#222222'}}>{item.Headind}</Text>
        <Text style={{fontFamily:fonts.poppinsRegular,color:'#222222'}}>{item.Discription}</Text>
        <Text style={{fontFamily:fonts.poppinsRegular,color:'green'}} >{item.price}</Text>

    </View>
    </TouchableOpacity>
   )
}

const HorizontalViewList=({data=[], numColumn=2,title='', isforFilter=true})=>{
    console.log('data',data)
    return(
        <>
       
      
    <View style={{width:'100%',
justifyContent:"space-around",
alignItems:'center',

}}>
  <FlatList
 data={data}
  renderItem={ isforFilter?renderItem:renderItem1}

  horizontal={true}
showsHorizontalScrollIndicator={false}
  />

  
  </View>
  </>

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
        fontSize:12,
        color:'#8E8E93'
    },
    FlatListStyle:{
        justifyContent:'center',
        alignItems:"center"
    },
    imageStyle:{
        width:170,
        height:220,
        borderRadius:10,
    }
})

export default HorizontalViewList;