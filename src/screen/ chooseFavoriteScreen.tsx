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
 import { Theme } from "../utils";
 import { useState } from "react";
import { Svg,Path } from "react-native-svg";

let CategoryInitial=[
    {
        title:'Museum & Instituation',
        isSelected:false,

},
   {
    
    title:'National Park',
    isSelected:false,

},

  { title: 'Camping Park',
     isSelected:false
},

  { title: 'Greece Travel',
     isSelected:false


},

   { title:'Disneyland Resort',
      isSelected:false

},
  {  title:'Electric Vechile',
      isSelected:false

},


  { title:'Rock Climbing',
    isSelected:false


},

   { title:'cruise Travel',
     isSelected:false

},

{    title:'Travelling Biogger',
   isSelected:false

}

]
const NationalCountry=[
    
   { 
    title:'Canada Travel',
    isSelected:false

},
    { title:'China Travel',
    isSelected:false
},
    { title:'South Korea',
    isSelected:false
},
   { title:'Las Vegas travel',
   isSelected:false
},
   { title:'Indonesia Culture',
   isSelected:false


}
   
   ]

 




const ChooseFavoriteScreen=({navigation})=>{
    const[Category,setCategory] =useState(CategoryInitial)

      const [selectCountry,setselectCountry]=useState(NationalCountry)
    const MultiSelect=(item)=>{
   
        console.log('multiselect', item)
   
        const updatedCategories = Category.map(item1 => {
           if (item1.title === item.title) {
             return { ...item1, isSelected: !item1.isSelected };
           }
           return item1;
         });
     console.log('updatedCategories',updatedCategories)
       setCategory(updatedCategories)
   
     }

     const singleSelect=(item)=>{
     
        const updatedCountry = selectCountry.map(item2 => {
            
            if (item2.title === item.title) {
              return { ...item2,isSelected :! item2.isSelected}
            } 
            return {
                ...item2, isSelected:false,
            };

          });
          
      console.log('updatedCategories',updatedCountry)
      setselectCountry(updatedCountry)
   
     }
     console.log('country@@',selectCountry)

    return(
        
   
        <ScrollView style={{flex:1}}>
 
  <View style={{width:'100%',height:'100%'}}>
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

  <View style={{width:Theme.horizontalSpacing.space300,height:Theme.verticalSpacing.space88,marginTop:Theme.verticalSpacing.space20,marginLeft:Theme.horizontalSpacing.space30}}>
  <Text style={Style.headingStyle}>Choose Your Favorite</Text>
   <Text style={Style.discriptionStyle} numberOfLines={3}>I'll chose 6 favorite topics that became
    references for my future destination or vacation.
     </Text>
  </View>

 

 <CategoryList 
 data={Category}
 title="Category"
 onPress={MultiSelect}
 />

<CategoryList 
 data={selectCountry}
 title="National country"
 numColumn={2}
 onPress={singleSelect}
 />

<TouchableOpacity style={Style.RegisterButtonStyle}
onPress={()=>{
    navigation.navigate('homeScreen')
   }}
>
 <Text style={Style.registerTextStyle}>Choose Favorite</Text>
 </TouchableOpacity>
 <TouchableOpacity style={{alignItems:"center",justifyContent:'center',marginBottom:20}}
 onPress={()=>{
    navigation.navigate('listDestination')
 }}
 >
    <Text style={{textDecorationLine:'underline',fontFamily:fonts.manropeMedium,color:'8E8E93',fontSize:Theme.fontSize.paragraph14,}}>Skip for now</Text>
 </TouchableOpacity>
  </View>


 
  </ScrollView>
    )

}


const Style=StyleSheet.create({
    headingStyle:{
        fontFamily:fonts.poppin600,
        fontSize:Theme.fontSize.extraLargeTitle24,
        letterSpacing:0.2,
        color:'#222222'
    },
    discriptionStyle:{
        fontFamily:fonts.poppinsRegular,
        fontSize:Theme.fontSize.paragraph14,
        color:'#8E8E93',
        marginTop:Theme.verticalSpacing.space20,
        //backgroundColor:'red'
    },
    FlatListStyle:{
        justifyContent:'center',
        alignItems:"center",
        //backgroundColor:'yellow'
    },
    RegisterButtonStyle:{
        width:Theme.horizontalSpacing.space350,
        height:Theme.verticalSpacing.space56,
        borderRadius:Theme.borderRadius.medium8,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:  '#85D3FF',
        alignSelf:'center',
        marginVertical:Theme.verticalSpacing.space40,
  
           
    },
    registerTextStyle:{
        color:'#FFFFFF',
        fontFamily:fonts.poppin600,
        fontSize:Theme.fontSize.subHeading16,
        lineHeight:22
    },
})

export default ChooseFavoriteScreen;