import React, {useRef}from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image } from "react-native";
import { Images,fonts,} from "../../constants";
import { TextInput } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
  
const RenderItem=({item, onPress})=>{
    console.log('item', item)
   return (
    <TouchableOpacity
    onPress={()=>{
        console.log('item',item);
        onPress(item)

    }}
    >
    <View style={{
        height:50,
        backgroundColor:item.isSelected?'#213555':'white',
        margin:10,
        paddingHorizontal:10,
        borderRadius:30,
        justifyContent:'center',
        borderWidth:0.40,
        borderColor:'black',
        alignItems:'center'
          
    }}

    >
        <Text style={[{ color: item.isSelected ? 'white' : 'black' }]}
        >{item.title}</Text>
    </View>
    </TouchableOpacity>
   )
}

const CategoryList=({data=[], numColumn=2,title='',onPress})=>{
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
  renderItem={({item})=>
  <RenderItem item={item} onPress={onPress}></RenderItem>}
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