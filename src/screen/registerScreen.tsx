import React from "react";
import { View,Text,StyleSheet, TouchableOpacity,Image } from "react-native";
import { BackButton } from "../component";
import{useNavigation} from "@react-navigation/native"
import { Images,fonts } from "../constants";
import { TextInput } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import LoginScreen from "./loginScreen";
import { Theme } from "../utils";
import { Formik } from "formik";
import * as Yup from "yup"
import Svg, { Path } from 'react-native-svg';

const Register =Yup.object().shape({
  name:Yup.string()
  .min(2)
  .max(50)
  .required('Please enter your full name'),
   
  email:Yup.string()
.email('Invalid Email')

.required('Please enter your email adress'),

password:Yup.string()
.min(6)

.required('Please enter your password'),

})




const RegisterScreen=({navigation})=>{
  const handleSubmit=(values)=>{
    console.log('form vlues', values)
    navigation.navigate('loginScreen')
    }
    
    return(
      <Formik
      initialValues={{

        name:"",
        email:"",
        password:"",
    }}
    validationSchema={Register}
onSubmit={handleSubmit}
      >
     {({values,errors,handleChange,handleBlur,touched,handleSubmit,setFieldTouched})=>(

    

<View style={{width:'100%',height:'100%',}}>

   <TouchableOpacity
   onPress={()=>(
    navigation.goBack()
   

   )}
   style={{marginTop:20}}
   >
   <Svg style={{width:50,height:50}}>
        <Path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </Svg>
   
   </TouchableOpacity>
   <Image
            style={Style.imageStyle}
              source={Images.logo}
            />
          <View style={{width:Theme.horizontalSpacing.space300,height:Theme.verticalSpacing.space70,marginLeft:Theme.horizontalSpacing.space30,marginTop:Theme.verticalSpacing.space20,}}>
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
                 <TextInput style={Style.TextInputStyle}placeholder="Full Name"
                 onChangeText={handleChange('name')}
                   value={values.name}
                     onBlur={()=>setFieldTouched('name')}
                 >
                    
              
                 </TextInput>
                 { touched.name &&  errors.name &&  (
                        <Text style={{color:'red',alignSelf:'flex-start'}}>{errors.name}</Text>
                    )} 
              
                 <TextInput style={Style.TextInputStyle1}placeholder="Your Email"
                 onChangeText={handleChange('email')}
                 value={values.email}
                 onBlur={()=>setFieldTouched('email')}
                 secureTextEntry={false}
                 ></TextInput>
                 { touched.email&&  errors.email &&  (
                        <Text style={{color:'red',alignSelf:'flex-start'}}>{errors.email}</Text>
                    )} 
              
                 <TextInput style={Style.TextInputStyle1}placeholder="Password"secureTextEntry={true}
                 onChangeText={handleChange('password')}
                 value={values.password}
                 onBlur={()=>setFieldTouched('password')}
                 >

                 </TextInput>
                 { touched.password &&  errors.password &&  (
                        <Text style={{color:'red',alignSelf:'flex-start'}}>{errors.password}</Text>
                    )} 
              
                </View>
                 <TouchableOpacity style={Style.RegisterButtonStyle}
                 onPress={handleSubmit}
                 >
                    <Text style={Style.registerTextStyle}>Register</Text>
                 </TouchableOpacity>

                      <View style={{alignItems:'center'}}>
                <View style={Style.TermandPriviacyScreenStyle}>
                    <Text style={Style.privacyTextStyle}>
                    By clicking Register, you are agree to our 
                    regulation of Terms and privacy.
                    </Text>
                </View>
                </View>
              </View>
              )

}

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
       marginTop:Theme.verticalSpacing.space50
    },
    HeadingTextStyle:{
        fontFamily:fonts.poppin600,
        fontSize:Theme.fontSize.extraLargeTitle24,
        lineHeight:22,
        color:'#222222'
        
    },
    discriptionViewStyle:{
        width:Theme.horizontalSpacing.space300,
        height:66,
        marginLeft:Theme.horizontalSpacing.space30,
        //backgroundColor:"red",
    },
    discriptionTextStyle:{
        fontFamily:fonts.poppinsRegular,
          fontSize:Theme.fontSize.preHeading12,
          lineHeight:22,
          color:' #8E8E93'
          
    },
      loginViewStyle:{
        width:Theme.horizontalSpacing.space354,
        height:Theme.verticalSpacing.space240,
        margin:23,
        //backgroundColor:"red",
        marginTop:Theme.verticalSpacing.space24
      },
      TextInputStyle:{
        width:Theme.horizontalSpacing.space354,
        height:Theme.verticalSpacing.space56,
        borderRadius:Theme.borderRadius.medium8,
        borderWidth:1,
        Colors:'#222222'
      },
      TextInputStyle1:{
      width:Theme.horizontalSpacing.space354,
      height:Theme.verticalSpacing.space56,
      borderRadius:Theme.borderRadius.medium8,
      borderWidth:1,
      Colors:'#222222',
      marginTop:Theme.verticalSpacing.space20
    },
    RegisterButtonStyle:{
        width:Theme.horizontalSpacing.space354,
        height:Theme.verticalSpacing.space56,
        margin:Theme.horizontalSpacing.space30,
        borderRadius:8,
        backgroundColor:'#85D3FF',
        alignItems:'center',
        justifyContent:'center',
           marginTop:Theme.verticalSpacing.space12
    },
    registerTextStyle:{
        color:'#FFFFFF',
        fontFamily:fonts.poppin600,
        fontSize:Theme.fontSize.headline20,
        //lineHeight:22,
  
    },
    TermandPriviacyScreenStyle:{
        width:Theme.horizontalSpacing.space290,
        height:Theme.verticalSpacing.space70,
        alignItems:'center',
        justifyContent:'center',
        marginTop:Theme.verticalSpacing.space35,
        //backgroundColor:'red',
       //  marginLeft:Theme.horizontalSpacing.space30,
        // backgroundColor:'red',
         
    },
    privacyTextStyle:{
        fontFamily:fonts.poppin600,
        fontSize:Theme.fontSize.paragraph14,
        lineHeight:22,
        color:"#8E8E93"
    },
   

})
export default RegisterScreen;