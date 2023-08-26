import React from "react";
import { Theme } from "../utils";
import { fonts,Images } from "../constants";
import { View,Text,Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const List=[
    {
        image:Images.rajaAmpat,
        headind:'Raja Ampat',
        discription:'Library device clip strikethrough move flows vector overflow style invite.',
        navigateTo:'detailsDestination'
        
    },
    {
        image:Images.sungai,
        headind:'Sungai Balien',
        discription:'Library device clip strikethrough move flows vector overflow style invite.'
    },
    {
        image:Images.danau,
        headind:'danau Pania',
        discription:'Library device clip strikethrough move flows vector overflow style invite.'
    },
    {
        image:Images.sungai,
        headind:'Danau Senatai',
        discription:'Library device clip strikethrough move flows vector overflow style invite.'
    },
    {
        image:Images.air,
        discription:'Library device clip strikethrough move flows vector overflow style invite.'
    },
    {
        image:Images.rajaAmpat,
        headind:'Air Terjun Bihewa',
        discription:'Library device clip strikethrough move flows vector overflow style invite.'
    }
]

const RenderItem=({item})=>{
    const navigation = useNavigation()

    return(
        <View style={{width:Theme.horizontalSpacing.space354,height:Theme.verticalSpacing.space117,flexDirection:'row',borderBottomWidth:0.40}}>
           <View style={{justifyContent:'center'}} >
            <Image
            style={{width:Theme.horizontalSpacing.space90,height:Theme.verticalSpacing.space95,borderRadius:Theme.borderRadius.medium8}}
            source={item.image}
            />
           </View>
               <TouchableOpacity
               onPress={()=>{
                navigation.navigate(item.navigateTo)
               }}
               >

           <View style={{width:Theme.horizontalSpacing.space241,height:Theme.verticalSpacing.space100,justifyContent:'center',marginLeft:Theme.horizontalSpacing.space10}}>
           <Text style={{fontFamily:fonts.poppin600,color:'#222222',fontSize:14}}>{item.headind}</Text>
           <Text style={{fontFamily:fonts.poppinsRegular,fontSize:Theme.fontSize.preHeading12}}>{item.discription}</Text>
           </View>
           </TouchableOpacity>
        
        </View>
    )
}


let ListDestination=({Navigation})=>{
    const navigation=useNavigation()
    
return (
    <View style={{flex:1}}>
        <View style={{margin:Theme.horizontalSpacing.space15,width:Theme.horizontalSpacing.space354,height:Theme.verticalSpacing.space160,marginTop:Theme.verticalSpacing.space60,flexDirection:"row"}}>
   
         <View style={{width:219,height:62}}>
      <Text style={{fontFamily:fonts.poppin600,color:'#222222',fontSize:Theme.fontSize.extraLargeTitle24,marginTop:20}}>Papua, Indonesia</Text>
    
       <Text style={{fontFamily:fonts.poppinsRegular,fontSize:Theme.fontSize.paragraph14,marginTop:Theme.verticalSpacing.space20,color:'8E8E93'}}>There are 80 interseting tourist spots</Text>
       </View>
      <View style={{justifyContent:'center',alignItems:"center"}}>
      <View style={{borderRadius:Theme.borderRadius.image100,width:Theme.horizontalSpacing.space60,height:Theme.verticalSpacing.space70,borderWidth:1,alignItems:'center',justifyContent:'center',alignSelf:'flex-end',marginLeft:Theme.horizontalSpacing.space35}}>
      
      <Image
      style={{width:Theme.horizontalSpacing.space50,height:Theme.verticalSpacing.space60,borderRadius:Theme.borderRadius.extraLarge40}}
      source={Images.womann2}
      />
  
    
     
     </View>
     </View>
   
      </View>
       <View style={{alignItems:"center"}}>
        <FlatList
        data={List}
        renderItem={({item})=><RenderItem item={item}/>}
        >

        </FlatList>
       </View>
     
    </View>
)
}
export default ListDestination;