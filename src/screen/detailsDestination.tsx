import React from "react";
import { Theme } from "../utils";
import { fonts,Images } from "../constants";
import { View,Text,Image, ImageBackground } from "react-native";
import { MessageIcon } from "../assets/image/svg";
import FontAwesome6Icon from 'react-native-vector-icons/Entypo';

let DetailsDestination=()=>{
    return(
        <View style={{flex:1,backgroundColor:'red'}}>
           <View style={{width:'100%',height:"100%",}}>
              <ImageBackground
              style={{width:414,height:350}}
              source={Images.rajaAmpatProfile}
              >
               <View style={{width:Theme.horizontalSpacing.space414,height:Theme.verticalSpacing.space588,backgroundColor:'white',marginTop:Theme.verticalSpacing.space324,borderTopLeftRadius:32,borderTopRightRadius:32,alignItems:'center'}}>
              
               <View style={{width:Theme.horizontalSpacing.space354,height:Theme.verticalSpacing.space70,flexDirection:'row'}}>
                <View style={{width:Theme.horizontalSpacing.space230,height:Theme.verticalSpacing.space30}}>
               
               <View style={{width:Theme.horizontalSpacing.space175,height:Theme.verticalSpacing.space20,flexDirection:"row",gap:4,marginTop:Theme.verticalSpacing.space12}}>
               <FontAwesome6Icon name="star" size={15} color='#5BC0F8' />    
               <FontAwesome6Icon name="star" size={15} color='#5BC0F8' />    
               <FontAwesome6Icon name="star" size={15} color='#5BC0F8' />  
               <FontAwesome6Icon name="star" size={15} color='#5BC0F8' />    
                 <Text style={{marginLeft:Theme.horizontalSpacing.space10,fontSize:Theme.fontSize.paragraph14}}>4.5/5.0</Text>

               </View>
            <View style={{width:Theme.horizontalSpacing.space241,height:Theme.verticalSpacing.space36,justifyContent:'center'}}>
             <Text style={{fontFamily:fonts.poppin600,fontSize:Theme.fontSize.extraLargeTitle24,color:'#222222',}}>Raja Ampat</Text>
            
             </View>
             </View>
             <View style={{justifyContent:'flex-end',width:100,alignItems:'flex-end'}}>
             <MessageIcon></MessageIcon>
             </View>
             </View>
             
             </View>
             
              </ImageBackground>
             
           </View>
        </View>
    )
}

export default DetailsDestination;