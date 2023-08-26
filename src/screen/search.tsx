import React from "react";
import { View,Text, StyleSheet, TextInput ,Image, FlatList} from "react-native";
import { Images,fonts } from "../constants";
import { CategoryList, HorizontalViewList } from "../component";
import { Theme } from "../utils";
import{BackButton} from "../component";




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
const SuggestionPlace=[
{
    image1:Images.kepulauan,
    heading1:'Kepulauan Raja Ampat',
    discription:'Papua Barat'
},
{
    image1:Images.taman,
    heading1:'Taman Laut Bunaken',
    discription:'Sulawesi Utara'
},
{
    image1:Images.gunung,
    heading1:'Gunung Bromo',
    discription:'jawa Timur'
},
{
    image1:Images.pulau,
    heading1:'Pulau Komodo',
    discription:'Nusa Tenggara Timur'
},
{
    image1:Images.tana,
    heading1:'Tana Toraja',
    discription:'Papua Barat'
},
{
    image1:Images.om,
    heading1:'Om Tenggara',
    discription:'Nusa Tenggara'
},
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
     
const  renderItem2 = ({item}) => {
    console.log('item',item)
    return (
           <View style={{width:Theme.horizontalSpacing.space330,height:Theme.verticalSpacing.space70,borderBottomWidth:0.20,justifyContent:'center',marginLeft:20,borderColor:'#222222',borderRadius:10}}>
      <View style={{width:Theme.horizontalSpacing.space230,height:Theme.verticalSpacing.space40 ,flexDirection:'row',margin:Theme.horizontalSpacing.space10}}>
        <Image
        style={{width:Theme.horizontalSpacing.space50,height:Theme.verticalSpacing.space40,}}
         source={item.image1}
       
        />
        
           <View style={{marginLeft:15}}>
        <Text style={{fontFamily:fonts.poppinSemiBold,fontSize:Theme.fontSize.paragraph14,color:'#222222'}}>{item.heading1}</Text>
       <Text style={{fontFamily:fonts.poppinsRegular,fontSize:Theme.fontSize.preHeading12,color:'#8E8E93'}}>{item.discription}</Text>
       </View>
      </View>
      </View>
    );
  };

const Search=()=>{

return(
    <View style={{flex:1}}>
        
        <View style={{width:'100%',height:Theme.verticalSpacing.space140,backgroundColor:'#113043',justifyContent:'center',alignItems:'center'}}>
        <Text style={Style.headingStyle}>Choose your Favorite</Text>
           <Text style={Style.textStyle}>Many Interesting Choices For You </Text>
           
           </View>
           <View style={{width:Theme.horizontalSpacing.space350,height:Theme.verticalSpacing.space56,flexDirection:'row',justifyContent:'center',marginLeft:Theme.horizontalSpacing.space30}}>
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

  <View style={{height:300,}}>
  <FlatList
  data={SuggestionPlace}
  renderItem={renderItem2}
  showsVerticalScrollIndicator={false}
  >

  </FlatList>

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
