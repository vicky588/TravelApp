import React from "react";
import { View,Text, StyleSheet,ImageBackground, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Images ,} from "../constants";
import { fonts } from "../constants";
import {useNavigation} from "@react-navigation/native"
import { CategoryList } from "../component";
import RegisterScreen from "./registerScreen";
import { Theme } from "../utils";
const OnBoardScreen=({Navigation})=>{
    const navigation=useNavigation()
    return(
    <View
    style={{
        height:'100%',
        width:"100%",
        alignItems:'center'
      // backgroundColor:'red'
    }}
    > 
    <TouchableOpacity style={Style.LoginViewStyle}
       onPress={()=>{
        navigation.navigate('registerScreen')
       }}
    >
        <Text style={Style.loginTextStyle}>Login</Text> 
        </TouchableOpacity>
         <View style={{marginTop:Theme.verticalSpacing.space40,
           justifyContent:'center',
           alignItems:'center',
          //backgroundColor:'yellow'
        }}>
            <Image
            style={Style.imageStyle}
              source={Images.logo}
            />
            
            
            </View>

            <View style={{
                width:Theme.horizontalSpacing.space290,
                height:Theme.verticalSpacing.space74,
               // marginTop:25,
           justifyContent:'center',
           alignItems:'center',
         // backgroundColor:'pink'
        }}>
            <Text style={Style.textStyle}>Start Your Traveling Journey Safely & Fun</Text>
        </View>
        <View style={{width:Theme.horizontalSpacing.space290,height:Theme.verticalSpacing.space100,marginTop:Theme.verticalSpacing.space10,justifyContent:'center',alignItems:'center',}}>
          <Text style={Style.secondTextStyle}
          numberOfLines={3}
          >
            Style clip effect union underline Editor auto bullet 
            select fill effect bullet
            layer undo object share outline.
          </Text>
        </View>

        <View style={{width:Theme.horizontalSpacing.space50,height:Theme.verticalSpacing.space10,marginTop:Theme.verticalSpacing.space50,}}>
          <Image
          style={Style.ImageIconStyle}
          source={Images.slideIcon}
          />

        </View>
        <View style={{width:Theme.horizontalSpacing.space414,height:Theme.verticalSpacing.space350,}}>
        
         <ImageBackground
         style={Style.ImageBackgroundStyle}
         source={Images.circleLogo}>
           
         </ImageBackground>
         <Image
           style={Style.girlsImageStyle}
              source={Images.girlLogo}
           />
        </View>
       
    </View>)
}

const Style=StyleSheet.create({
    imageStyle:{
        width:106,
        height:46,
        padding:8,
        justifyContent:'center',
       alignItems:'center',
       
    },
    textStyle:{
        fontFamily:fonts.manropeSemiBold,
        fontSize:24,
        alignItems:'center',
        color:'#222222'
    },
    secondTextStyle:{
        fontFamily:fonts.manropeRegular,
        fontSize:12,
        lineHeight:22,
       
        
    },
    ImageIconStyle:{
        width:44,
        height:6,
        borderRadius:5,
       
    },
    ImageBackgroundStyle:{
        width:Theme.horizontalSpacing.space414,
        height:Theme.verticalSpacing.space350,
       marginTop:Theme.verticalSpacing.space160
    },
    girlsImageStyle:{
      width:184.75,
      height:Theme.verticalSpacing.space570,
      marginLeft:98 ,
      position:'absolute',
      resizeMode:'contain'
    },
    LoginViewStyle:{
        alignItems:'center',
         justifyContent:"center",
        backgroundColor:'white',
        borderRadius:Theme.borderRadius.medium8,
        width:Theme.horizontalSpacing.space80,
        height:Theme.verticalSpacing.space50,
        alignSelf:'flex-end',
        margin:Theme.horizontalSpacing.space15,
        marginTop:Theme.verticalSpacing.space20
    },
    loginTextStyle:{
        fontFamily:fonts.manropeSemiBold
    }
})
export default OnBoardScreen;