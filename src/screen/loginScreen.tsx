import React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image } from "react-native";
import { BackButton } from "../component";
import { Images,fonts,} from "../constants";
import { TextInput } from "react-native";
import { FaceBook } from "../assets/image";
import { GoogleIcon } from "../assets/image/svg";

const LoginScreen=({navigation})=>{
return(
<View style={{width:'100%',height:'100%',}}>
<TouchableOpacity>
    <BackButton  onPress={()=>{navigation.goBack()}}></BackButton>
   </TouchableOpacity>
   <Image
            style={Style.imageStyle}
              source={Images.logo}
            />
             <View style={{width:300,height:40,marginLeft:30,marginTop:35,}}>
            <Text style={Style.HeadingTextStyle}>Welcome Travelling</Text>
            
            </View>  
            <View style={Style.discriptionViewStyle}>
                <Text style={Style.discriptionTextStyle}>
                Style clip effect underline .Editor auto bullet
                select fill select create draft. Pen list effect.
                </Text>
                </View> 

                <View style={Style.loginViewStyle}>
                 <TextInput style={Style.TextInputStyle1}placeholder="Your Email"></TextInput>
                 <TextInput style={Style.TextInputStyle1}placeholder="Password"secureTextEntry={true}></TextInput>
                </View>
                <TouchableOpacity style={{width:350,height:35,alignItems:'flex-end',justifyContent:'center',marginLeft:20,}}>
               
                     <Text style={{textDecorationLine:'underline'}}>Forget Password?</Text>
               
                </TouchableOpacity>

                <TouchableOpacity style={Style.loginButtonStyle}>
                   
                 
           
            <Text style={Style.loginTextStyle}>Login</Text>
        </TouchableOpacity>

         <View style={{width:354,height:20,flexDirection:'row',marginLeft:20,justifyContent:'center',alignItems:'center'}}>
         <View style={{width:161,height:2,backgroundColor:'#222222'}}></View>
            <Text style={{marginLeft:4,marginRight:4}}>OR</Text>
            <View style={{width:161,height:2,backgroundColor:'#222222'}}></View>
        </View>
        <View style={Style.googleLoginStyle}>
        <TouchableOpacity style={{width:354,height:56,borderRadius:8,borderWidth:1,flexDirection:'row',marginTop:13,alignItems:'center',justifyContent:'center'}}>
                <GoogleIcon color="black" size={25}></GoogleIcon>
                <Text style={Style.GoogleLoginView}>Login With Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:354,height:56,borderRadius:8,borderWidth:1,flexDirection:'row',marginTop:13,alignItems:'center',justifyContent:'center'}}>
                <FaceBook color="black" size={25}></FaceBook>
                <Text style={Style.GoogleLoginView}>Login With Facebook</Text>
            </TouchableOpacity>
            
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
  marginTop:45,
  //backgroundColor:"red"
},
HeadingTextStyle:{
    fontFamily:fonts.poppin600,
    fontSize:24,
    lineHeight:36,
    color:'#222222',
   // backgroundColor:'red'
},
discriptionViewStyle:{
    width:300,
    height:66,
    marginLeft:30,
    //backgroundColor:"red",
   
},
discriptionTextStyle:{
    fontFamily:fonts.poppinsRegular,
      fontSize:12,
      lineHeight:20,
      color:' #8E8E93',
      
      
},
loginViewStyle:{
    width:354,
    height:150,
    alignSelf:'center',
    justifyContent:'center',
   // backgroundColor:"pink",
   
   
  },

TextInputStyle:{
    width:354,
    height:56,
    borderRadius:8,
    borderWidth:1,
    Colors:'#222222',
    
  },
  TextInputStyle1:{
  width:354,
  height:56,
  borderRadius:8,
  borderWidth:1,
  Colors:'#222222',
  marginTop:15,

},
loginButtonStyle:{
    width:354,
    height:56,
    margin:20,
    borderRadius:8,
    backgroundColor:'#85D3FF',
    alignItems:'center',
    justifyContent:'center',
       marginTop:15,
       
},
loginTextStyle:{
    color:'#FFFFFF',
    width:59,
    height:22,
    fontFamily:fonts.poppin600,
    fontSize:14,
    lineHeight:22
},
googleLoginStyle:{
    width:354,
    height:128,
   // backgroundColor:'red',
    marginLeft:20,
    marginTop:20
},
GoogleLoginView:{
    fontFamily:fonts.poppinsRegular,
    marginLeft:20
}


})
export default LoginScreen;