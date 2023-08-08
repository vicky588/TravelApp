import React from "react";
import { View,Text,StyleSheet, TouchableOpacity,Image } from "react-native";
import { BackButton } from "../component";
import{useNavigation} from "@react-navigation/native"
import { Images,fonts } from "../constants";
import { TextInput } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import LoginScreen from "./loginScreen";
const RegisterScreen=({navigation})=>{
    return(
<View style={{width:'100%',height:'100%',}}>
   <TouchableOpacity>
    <BackButton  onPress={()=>{navigation.goBack()}}></BackButton>
   </TouchableOpacity>
   <Image
            style={Style.imageStyle}
              source={Images.logo}
            />
          <View style={{width:300,height:72,marginLeft:30,marginTop:20,}}>
            <Text style={Style.HeadingTextStyle}>Let's Join  With Us to Around the World</Text>
            
            </View>  
            <View style={Style.discriptionViewStyle}>
                <Text style={Style.discriptionTextStyle}>
                 Style Clip effect union underline. Editor auto bullet
                 select fill select create draft.Pen list effect bullet 
                 layer undo object share outine.
                </Text>
                </View> 
                <View style={Style.loginViewStyle}>
                 <TextInput style={Style.TextInputStyle}placeholder="Full Name"></TextInput>
                 <TextInput style={Style.TextInputStyle1}placeholder="Your Email"></TextInput>
                 <TextInput style={Style.TextInputStyle1}placeholder="Password"secureTextEntry={true}></TextInput>
                </View>
                 <TouchableOpacity style={Style.RegisterButtonStyle}
                 onPress={()=>{
                    navigation.navigate('loginScreen')
                   }}
                 >
                    <Text style={Style.registerTextStyle}>Register</Text>
                 </TouchableOpacity>
                <View style={Style.TermandPriviacyScreenStyle}>
                    <Text style={Style.privacyTextStyle}>
                    By clicking Register, you are agree to our 
                    regulation of Terms and privacy
                    </Text>
                </View>
               
              </View>
                 )
              }
        const Style=StyleSheet.create({
         imageStyle:{
        width:92,
        height:21,
        padding:8,
        justifyContent:'center',
       alignItems:'center',
       marginLeft:30,
       marginTop:50
    },
    HeadingTextStyle:{
        fontFamily:fonts.poppin600,
        fontSize:24,
        lineHeight:36,
        color:'#222222'
        
    },
    discriptionViewStyle:{
        width:300,
        height:66,
        marginLeft:30,
       // backgroundColor:"red",
    },
    discriptionTextStyle:{
        fontFamily:fonts.poppinsRegular,
          fontSize:12,
          lineHeight:22,
          color:' #8E8E93'
          
    },
      loginViewStyle:{
        width:354,
        height:200,
        margin:23,
        //backgroundColor:"red",
        marginTop:20
      },
      TextInputStyle:{
        width:354,
        height:56,
        borderRadius:8,
        borderWidth:1,
        Colors:'#222222'
      },
      TextInputStyle1:{
      width:354,
      height:56,
      borderRadius:8,
      borderWidth:1,
      Colors:'#222222',
      marginTop:15
    },
    RegisterButtonStyle:{
        width:354,
        height:56,
        margin:20,
        borderRadius:8,
        backgroundColor:'#85D3FF',
        alignItems:'center',
        justifyContent:'center',
           marginTop:1
    },
    registerTextStyle:{
        color:'#FFFFFF',
        width:59,
        height:22,
        fontFamily:fonts.poppin600,
        fontSize:14,
        lineHeight:22
    },
    TermandPriviacyScreenStyle:{
        width:280,
        height:44,
         alignSelf:'center',
      marginTop:120,
        //backgroundColor:'red',
         marginLeft:20
          
    },
    privacyTextStyle:{
        fontFamily:fonts.poppin600,
        fontSize:12,
        lineHeight:22,
        color:"#8E8E93"
    },
   

})
export default RegisterScreen;