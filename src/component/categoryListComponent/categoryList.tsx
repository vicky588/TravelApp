import React, {useRef}from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image } from "react-native";
import { Images,fonts,} from "../../constants";
import { TextInput } from "react-native";

import { FlatList } from "react-native-gesture-handler";
  
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
        borderWidth:0.40,
        borderColor:'black',
        alignItems:'center'

    }}>
        <Text style={{fontFamily:fonts.poppinsRegular,fontSize:14,color:'#222222',textAlign:'center'}}>{item}</Text>
    </View>
    </TouchableOpacity>
   )
}

const CategoryList=({data=[], numColumn=2,title=''})=>{
    console.log('data',data)
    return(
        <>
        <View style={{width:200,height:30,marginLeft:30,marginTop:50}}>
    
        <Text style={{fontFamily:fonts.poppin600,fontSize:18,lineHeight:27,color:'#222222'}}>{title}</Text>
     
       </View>
    <View style={{width:'100%',marginTop:25,
justifyContent:"space-around",
alignItems:'center',
maxHeight:200,
}}>
  <FlatList
 data={data}
  renderItem={renderItem}
numColumns={2}
  horizontal={false}
  showsVerticalScrollIndicator={false}
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
    }
})

export default CategoryList;