import React from "react";
import { View,Text, StyleSheet,ImageBackground } from "react-native";
import { Image } from "react-native";
import { Images ,} from "../constants";
import { fonts } from "../constants";
const OnBoardScreen=()=>{
    return(
    <View
    style={{
        height:'100%',
        width:"100%",
        alignItems:'center'
      // backgroundColor:'red'
    }}
    >
       
         <View style={{marginTop:101,
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
                width:260,
                height:72,
                marginTop:50,
           justifyContent:'center',
           alignItems:'center',
         // backgroundColor:'pink'
        }}>
            <Text style={Style.textStyle}>Start Your Traveling Journey Safely & Fun</Text>
        </View>
        <View style={{width:250,height:80,marginTop:10,justifyContent:'center',alignItems:'center',}}>
          <Text style={Style.secondTextStyle}
          numberOfLines={3}
          >
            Style clip effect union underline Editor auto bullet 
            select fill effect bullet
            layer undo object share outline.
          </Text>
        </View>

        <View style={{width:50,height:10,marginTop:50,}}>
          <Image
          style={Style.ImageIconStyle}
          source={Images.slideIcon}
          />

        </View>
        <View style={{width:400,height:350,}}>
        
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
        width:400,
        height:296,
       marginTop:150
    },
    girlsImageStyle:{
      width:184.75,
      height:441,
      marginLeft:98 ,
      position:'absolute',
      resizeMode:'contain'
    }
})
export default OnBoardScreen;