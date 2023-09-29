import React from "react";
import { View,Text,ImageBackground, StyleSheet,TouchableOpacity ,Image,FlatList} from "react-native";
import { Images, fonts } from "../constants";
import { Theme } from "../utils";
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";
import AboutScreen from "./listDestination";
import Svg, { Path } from 'react-native-svg';

const Profile=[
    {
        image:Images.profileVc,
        title:'Profile',
        discription:"Short Description of Menu",
        navigateTo:''
    },
    {
        image:Images.paymentVectorIcon,
        title:'Payment & Method',
        discription:"Short Description of Menu",
        navigateTo:''
    },
    {
        image:Images.LanguageVectorIcon,
        title:'Language ',
        discription:"Short Description of Menu",

    },
    {
        image:Images.PrivacyVectorIcon,
        title:'Privacy & Security',
        discription:"Short Description of Menu"
    },
    {
        image:Images.advanceSetting,
        title:'Advance Setting',
        discription:"Short Description of Menu"
    }
]

const  renderItem2 = ({item}) => {
    console.log('item',item)
    
    return (
           <View style={Style.renderitemMainView}>

      <View style={Style.renderItemSecondMainView}>
        
        <View style={Style.renderItemMainView}>
        <Image
        style={Style.renderItemImage}
         source={item.image}
       
        />
       
        </View>
            
           <View style={Style.titleView}>
        <Text style={Style.titleText}>{item.title}</Text>
       <Text style={Style.discription}>{item.discription}</Text>
       </View>
       <TouchableOpacity style={Style.renderItemTouch}
       onPress={()=>NavigationContainer.navigate(item.navigateTo)}
       >
       <Icon name="caretright" size={15} color="black" />

       </TouchableOpacity>
      </View>

      
    
     
      </View>
    );
  };




const ProfileScreen=({navigation})=>{
return(
    <View style={{flex:1,}}>
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
      <ImageBackground
      style={Style.imageViewStyle}
      source={Images.profileWoman}
      
      >
        <View style={Style.textprofileView}>
            <View style={{width:Theme.horizontalSpacing.space290,height:Theme.verticalSpacing.space74,alignItems:'center'}}>
         <Text style={{fontFamily:fonts.poppinSemiBold,marginTop:Theme.verticalSpacing.space20,fontSize:Theme.fontSize.subHeading16,color:'#222222'}}>Bessie Cooper</Text>
        <Text style={{fontFamily:fonts.poppinsRegular,fontSize:Theme.fontSize.preHeading12,color:'8E8E93'}}>Bullet editor invite shadow create effect scrolling community shadow. </Text>
        </View>
        <View style={{width:Theme.horizontalSpacing.space330,height:Theme.verticalSpacing.space42,marginTop:Theme.verticalSpacing.space20,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
         
          <TouchableOpacity style={{width:Theme.horizontalSpacing.space153,height:Theme.verticalSpacing.space42,borderWidth:Theme.borderRadius.borderWidth1,borderRadius:Theme.borderRadius.large24,borderColor:Theme.lightTheme.lightGrey,alignItems:'baseline',justifyContent:'center',}}>
            <Text style={{alignSelf:'center',fontSize:Theme.fontSize.preHeading12,fontFamily:fonts.poppinsRegular}}>Edit Photo</Text>
          
          </TouchableOpacity>
          <TouchableOpacity style={{width:Theme.horizontalSpacing.space153,height:Theme.verticalSpacing.space42,borderWidth:Theme.borderRadius.borderWidth1,borderRadius:Theme.borderRadius.large24,borderColor:Theme.lightTheme.lightGrey,alignItems:'baseline',justifyContent:'center',marginLeft:Theme.horizontalSpacing.space10}} >
         
          <Text style={{alignSelf:'center',fontSize:Theme.fontSize.preHeading12,fontFamily:fonts.poppinsRegular}}>Verification</Text>
         
          </TouchableOpacity>
         </View>
         <View style={{height:Theme.verticalSpacing.space570,}}>
  <FlatList
  data={Profile}
  renderItem={renderItem2}

  >

  </FlatList>

  </View>
        </View>
        
      

      </ImageBackground>
    </View>
)
}
const Style=StyleSheet.create({
   imageViewStyle:{
    width:Theme.horizontalSpacing.space414,
    height:Theme.verticalSpacing.space324,
    alignItems:'center',

   },
   textprofileView:{
    width:Theme.horizontalSpacing.space350,
    height:Theme.verticalSpacing.space588,
    backgroundColor:'#FFFFFF',
    marginTop:Theme.verticalSpacing.space243,
    borderRadius:Theme.borderRadius.large24,
    alignItems:'center',

   },
   renderItemTouch:{
    width:Theme.horizontalSpacing.space60,
    height:Theme.verticalSpacing.space40,
    marginLeft:Theme.horizontalSpacing.space10,
    alignItems:'flex-end',
    justifyContent:'center'
   },
   titleText:{
    fontFamily:fonts.poppinsRegular,
    fontSize:Theme.fontSize.paragraph14,
    color:'#222222'
   },
  titleView:{
    marginLeft:Theme.horizontalSpacing.space15,
    width:Theme.horizontalSpacing.space180
  },
  discription:{
    fontFamily:fonts.poppinsRegular,
    fontSize:Theme.fontSize.preHeading12,
    color:'#8E8E93'
  },
  renderitemMainView:{
    width:Theme.horizontalSpacing.space360,
    height:Theme.verticalSpacing.space88,justifyContent:'center',
    marginLeft:Theme.horizontalSpacing.space10,borderColor:'#222222',
   // borderRadius:
  },
  renderItemSecondMainView:{
    width:Theme.horizontalSpacing.space300,
    height:Theme.verticalSpacing.space88 ,
    flexDirection:'row',margin:Theme.horizontalSpacing.space10
    ,alignItems:'center',
  },
  renderItemImage:{
    width:Theme.horizontalSpacing.space16,
    height:Theme.verticalSpacing.space16
    ,borderRadius:Theme.borderRadius.medium8,
  },
  renderItemMainView:{
    width:Theme.horizontalSpacing.space36,
    height:Theme.verticalSpacing.space36,
    backgroundColor:'#5BC0F8',alignItems:'center',
    justifyContent:'center',borderRadius:Theme.borderRadius.medium8,
    flexDirection:'row'
  }
  
})
export default ProfileScreen;
