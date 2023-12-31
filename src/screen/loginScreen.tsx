import React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, } from "react-native";
import { BackButton } from "../component";
import { Images,fonts,} from "../constants";
import { TextInput } from "react-native";
import { FaceBook } from "../assets/image";
import { GoogleIcon } from "../assets/image/svg";
import VerificationScreen from "./verificationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Theme } from "../utils";
import { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup"
import Svg, { Path } from 'react-native-svg';   




const LoginScreen=({navigation})=>{
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handlePasswordChange = (newPassword) => {
    console.log('newPassword',newPassword)
    setPassword(newPassword);
  };

  console.log('Email:', email);
  console.log('Password:', password);

  const handleSubmit=(values)=>{
    console.log('form vlues', values)
    navigation.navigate('verificationScreen')
    }
  
     const Login =Yup.object().shape({
     
        email:Yup.string()
     .email('Invalid Email')
     .max(50)
     .required('Please enter your email adress'),
      
     password:Yup.string()
     .min(6)
    
     .required('Please enter your password'),
      
    })
return(
    <Formik
    initialValues={{

        name:"",
        email:"",
        password:"",
    }}
    validationSchema={Login}
    onSubmit={handleSubmit}
    >
        {({values,errors,touched,handleSubmit,handleChange,handleBlur,setFieldTouched})=>(

      
<View style={{width:'100%',height:'100%',}}>
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

   <Image
            style={Style.imageStyle}
              source={Images.logo}
            />
             <View style={{width:Theme.horizontalSpacing.space300,height:Theme.verticalSpacing.space40,marginLeft:Theme.horizontalSpacing.space30,marginTop:Theme.verticalSpacing.space15}}>
            <Text style={Style.HeadingTextStyle}>Welcome Travelling</Text>
            
            </View>  
            <View style={Style.discriptionViewStyle}>
                <Text style={Style.discriptionTextStyle}>
                Style clip effect underline .Editor auto bullet
                select fill select create draft. Pen list effect.
                </Text>
                </View> 

                <View style={Style.loginViewStyle}>
                 <TextInput style={Style.TextInputStyle1}placeholder="Email"    value={values.email} 
                   onChangeText={handleChange('email')}
                  onBlur={()=>setFieldTouched('email')}
                            
                
                 />
                    { touched.email &&  errors.email &&  (
                        <Text style={{color:'red',alignSelf:'flex-start',marginLeft:Theme.horizontalSpacing.space16}}>{errors.email}</Text>
                    )} 
              
                 <TextInput style={Style.TextInputStyle1}placeholder="Password"secureTextEntry={true}  
                 value={values.password}
                 onChangeText={handleChange('password')}
                 onBlur={()=> setFieldTouched('password')}
                  
                 />
                 {  touched.password && errors.password &&  (
                        <Text style={{color:'red',alignSelf:'flex-start',marginLeft:Theme.horizontalSpacing.space16}}>{errors.password}</Text>
                    )} 
                </View>
                <TouchableOpacity style={{width:Theme.horizontalSpacing.space350,height:Theme.verticalSpacing.space35,alignItems:'flex-end',justifyContent:'center',marginLeft:Theme.horizontalSpacing.space20,}}>
               
                     <Text style={{textDecorationLine:'underline'}}>Forget Password?</Text>
               
                </TouchableOpacity>

                  <View style={{alignItems:'center'}}>
                <TouchableOpacity style={Style.loginButtonStyle}
                
               onPress={handleSubmit}
                
                >
                   
                 
           
            <Text style={Style.loginTextStyle}>Login</Text>
        </TouchableOpacity>
        </View>
         <View style={{width:Theme.horizontalSpacing.space354,height:Theme.verticalSpacing.space20,flexDirection:'row',justifyContent:'center',alignItems:'center',margin:Theme.horizontalSpacing.space20,marginLeft:Theme.horizontalSpacing.space30}}>
         <View style={{width:Theme.horizontalSpacing.space153,height:1,backgroundColor:'#222222'}}></View>
            <Text style={{marginLeft:4,marginRight:4}}>OR</Text>
            <View style={{width:Theme.horizontalSpacing.space153,height:1,backgroundColor:'#222222'}}></View>
        </View>

        <View style={Style.googleLoginStyle}>

        <TouchableOpacity style={{width:Theme.horizontalSpacing.space354,height:Theme.verticalSpacing.space56,borderRadius:Theme.borderRadius.medium8,borderWidth:1,flexDirection:'row',marginTop:Theme.verticalSpacing.space15,alignItems:'center',justifyContent:'center'}}>
                <GoogleIcon color="black" size={20}></GoogleIcon>
                <Text style={Style.GoogleLoginView}>Login With Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:Theme.horizontalSpacing.space354,height:Theme.verticalSpacing.space56,borderRadius:Theme.borderRadius.medium8,borderWidth:1,flexDirection:'row',marginTop:Theme.verticalSpacing.space15,alignItems:'center',justifyContent:'center'}}>
                <FaceBook color="black" size={20}></FaceBook>
                <Text style={Style.GoogleLoginView}>Login With Facebook</Text>
            </TouchableOpacity>
            
            </View>
    </View>
      )}
    </Formik>
)

}
const Style=StyleSheet.create({
    imageStyle:{
   width:Theme.horizontalSpacing.space90,
   height:Theme.verticalSpacing.space21,
   //padding:8,
   justifyContent:'center',
  alignItems:'center',
  marginLeft:Theme.horizontalSpacing.space30,
  marginTop:Theme.verticalSpacing.space20,
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
    alignItems:'center'
   
   
  },

TextInputStyle:{
    width:Theme.horizontalSpacing.space354,
    height:Theme.verticalSpacing.space60,
    borderRadius:Theme.borderRadius.medium8,
    borderWidth:1,
    Colors:'#222222',
    
  },
  TextInputStyle1:{
  width:Theme.horizontalSpacing.space354,
  height:Theme.verticalSpacing.space60,
  borderRadius:Theme.borderRadius.medium8,
  borderWidth:1,
  Colors:'#222222',
  marginTop:Theme.verticalSpacing.space20,

},
loginButtonStyle:{
    width:Theme.horizontalSpacing.space354,
    height:Theme.verticalSpacing.space56,
    
    borderRadius:Theme.borderRadius.medium8,
    backgroundColor:'#85D3FF',
    alignItems:'center',
    justifyContent:'center',
       marginTop:Theme.verticalSpacing.space15,
       
},
loginTextStyle:{
    color:'#FFFFFF',
    width:Theme.horizontalSpacing.space60,
    height:Theme.verticalSpacing.space24,
    fontFamily:fonts.poppin600,
    fontSize:Theme.fontSize.subHeading16,
    lineHeight:22
},
googleLoginStyle:{
    width:Theme.horizontalSpacing.space400,
    height:Theme.verticalSpacing.space140,
   // backgroundColor:'red',
   // marginLeft:Theme.horizontalSpacing.space20,
    marginTop:Theme.verticalSpacing.space20,
    alignItems:'center',
    justifyContent:'center',
 
    margin:Theme.horizontalSpacing.space10
},
GoogleLoginView:{
    fontFamily:fonts.poppinsRegular,
    marginLeft:Theme.horizontalSpacing.space20,
}


})
export default LoginScreen;