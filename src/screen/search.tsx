import React from "react";
import { View,Text, StyleSheet, TextInput ,Image, FlatList} from "react-native";
import { Images,fonts } from "../constants";
import { CategoryList, HorizontalViewList } from "../component";





const ExploreView=[
    {
      image:Images.explore1,
      heading:'Explore'
    },
    {
        image:Images.sailing,
        heading:'Sailing'
    },
    {
        image:Images.kayaKIng,
        heading:'KayaKing'
    },
    {
        image:Images.cottage,
        heading:'Cottage'
    }
]



const renderItem = ({ item }) => {
    console.log('item',item)
    return (
      <View style={{ height:95,justifyContent:'center',alignItems:"center",margin:10}}>
        <Image
         source={item.image}
          style={{ width:48, height:47,borderRadius:6,margin:10}}
        />
        
        <Text>{item.heading}</Text>
      </View>
    );
  };
     


const Search=()=>{

return(
    <View style={{flex:1}}>
        <View style={{width:'100%',height:139,backgroundColor:'#113043',justifyContent:'center',alignItems:'center'}}>
        <Text style={Style.headingStyle}>Choose your Favorite</Text>
           <Text style={Style.textStyle}>Many Interesting Choices For You </Text>
           
           </View>
           <View style={{width:354,height:58,flexDirection:'row',marginLeft:20,justifyContent:'center'}}>
             <TextInput style={Style.TextInputStyle} placeholder="Search Your Destination">
             

             </TextInput>
            
        </View>
        <View style={{width:'100%',height:100,alignItems:'center',justifyContent:'center',marginTop:20,}}>
        <FlatList
      data={ExploreView}
      renderItem={renderItem}
      style={{
       // backgroundColor:'green',
       
      }}
      //keyExtractor={item => item.id}
      horizontal={true}
    />
        
          
        </View>
  <View style={{margin:30 }}>
<Text style={{fontFamily:fonts.poppin600,fontSize:16,color:"#222222"}}>Suggestion Place</Text>

  </View>
      
    </View>
)
}
const Style=StyleSheet.create({
    headingStyle:{
        fontFamily:fonts.poppin600,
        color:'#FFFFFF',
        fontSize:24
    },
    textStyle:{
        fontFamily:fonts.poppinsRegular,
        fontSize:12,
        color:'#CCCCCC'
    },
    TextInputStyle:{
        width:300,
        height:58,
        borderWidth:1,
        borderColor:'black',
        borderRadius:50,
    //  backgroundColor:'red',
      
    }
})
export default Search;
