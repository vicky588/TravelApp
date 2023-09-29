import React, {useRef}from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image } from "react-native";
import { BackButton } from "../component";
import { Images,fonts,} from "../constants";
import { TextInput } from "react-native";
import { FaceBook } from "../assets/image";
import { GoogleIcon } from "../assets/image/svg";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { wp,hp,fp, Theme } from "../utils";
import{useNavigation} from "@react-navigation/native"
import { Formik } from "formik";
import Svg, { Path } from 'react-native-svg';
const VerificationScreen=({navigation})=>{
    const [otp,setOtp]=useState()
   
    const handleOtpChange=(newOtp)=>{
        setOtp(newOtp)
        console.log('newOtp',newOtp)
    }
    const handleKeyPress = ({ nativeEvent }) => {
        if (nativeEvent.key === 'Backspace') {
          // Handle delete key press
          setOtp(otp.slice(0, -1)); // Remove the last character
        }
      };
      const handleFormSubmit = () => {
      
        console.log('Entered OTP:', otp);
      };
return(
    
    <View style={Style.MainViewStyle}>
       <View style={{width:'100%',height:Theme.verticalSpacing.space15,}}>
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

       </View>
       <View style={{width:300,height:96,marginTop:119,justifyContent:'center',alignItems:'center'}}>
           <Text style={Style.vericationTextStyle}>Verification account</Text>
           <View style={{flexDirection:'row',}}>
            <Text style={Style.discriptionStyle}>Style clip effect union underline. Editor auto bullet
                select fill select vicky555@gmail.com
            </Text>
             
           </View>
        
       </View>

       <View style={Style.codeVerificationScreen}>
       <OTPInputView
    
       pinCount={5}
       code={otp}
       onCodeChanged={handleOtpChange}
       autoFocusOnLoad
       codeInputFieldStyle={{borderRadius:8,fontSize:22,color:'black',width:56,height:56,borderWidth:1,fontFamily:fonts.poppin600,borderColor:'black'}}
     
       />
       </View>
       <TouchableOpacity style={Style.verification}
       onPress={()=>{
        navigation.navigate('chooseFavoriteScreen')
       }}
      >
                 
                
         <Text style={Style.verificationTextStyle}>Verification</Text>
         </TouchableOpacity>
         <View style={Style.reSendScreen}>
         <Text style={Style.reSendScreenTExt}>I dont't have code?</Text>
         <TouchableOpacity
         onPress={handleFormSubmit}
         >
         <Text style={Style.reSendScreenTExt2}>Resend Code</Text>
         </TouchableOpacity>
         </View>
    </View>
     )
     }
      const Style=StyleSheet.create({
       MainViewStyle:{
        width:'100%',
        height:"100%",
        alignItems:'center',
        //justifyContent:'center',
        //backgroundColor:"red"
    },
      vericationTextStyle:{
        fontFamily:fonts.poppin600,
        fontSize:24,
        letterSpacing:0.2,
        color:' #222222'
        
    },
    discriptionStyle:{
        fontFamily:fonts.poppin600,
        fontSize:12,
        lineHeight:22,
        color:"#8E8E93",
    },
    codeVerificationScreen:{
        width:328,
        height:56,
        //backgroundColor:'red',
        marginTop:50,
        flexDirection:'row'
    },
    textInputStyle:{
        width:56,
        height:56,
        borderRadius:8,
        borderWidth:1,
        color:' #222222',
        textAlign:'center',
        fontSize:16,
        fontFamily:fonts.poppinsRegular,
    },
    
    verification:{
        width:354,
        height:56,
       marginTop:50,
        borderRadius:8,
        backgroundColor:'#85D3FF',
        alignItems:'center',
        justifyContent:'center',
          
    },
    verificationTextStyle:{
        color:'#FFFFFF',
        width:90,
        height:22,
        fontFamily:fonts.poppin600,
        fontSize:15,
        lineHeight:22
    },
    reSendScreen:{
        width:250,
        height:22,
        //backgroundColor:'red',
        marginTop:20,
        flexDirection:'row'
    },
    reSendScreenTExt:{
      fontFamily:fonts.poppinsRegular,
      fontSize:14,
      color:'#8E8E93'  
    },
    reSendScreenTExt2:{
        fontFamily:fonts.poppin600,
        fontSize:14,
        color:'#222222',
        marginLeft:5,
        lineHeight:22,


      },
      otpInputStyle1:{
        width:Theme.horizontalSpacing.space56,
        height:Theme.verticalSpacing.space56,
        borderRadius:8,
        borderWidth:1,
        //color:' #222222',
       
        textAlign:'center',
        fontFamily:fonts.poppinsRegular,
        fontSize:16
    },

})



export default VerificationScreen;