import React from "react";
import { Theme } from "../utils";
import { fonts,Images } from "../constants";
import { View,Text,Image, ImageBackground, FlatList } from "react-native";
import { MessageIcon } from "../assets/image/svg";
import FontAwesome6Icon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from "react-native-gesture-handler";
import ChooseDate from "./chooseDate";
const ImageList=[
    {
        image:Images.rajaAmpat,
        price:'$1.500/ day'
    },
    {
       image:Images.image2
    },
    {
        image:Images.image3
    },
    {
        image:Images.image4
    },
    {
        image:Images.image5
    },
]
const  renderItem=({item})=>{
    console.log('item',item)
      return(
     <View style={{
        width:Theme.horizontalSpacing.space70,
     height:Theme.verticalSpacing.space70,
     margin:Theme.horizontalSpacing.space10,flexDirection:'row',
     }}>
       <Image
       style={{width:Theme.horizontalSpacing.space70,height:Theme.verticalSpacing.space60,borderRadius:10}}
       source={item.image}
       
       />

      
     </View>
      )
}

let DetailsDestination=({navigation})=>{
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
            <View style={{width:Theme.horizontalSpacing.space241,height:Theme.verticalSpacing.space36,justifyContent:'center',marginTop:Theme.verticalSpacing.space12}}>
             <Text style={{fontFamily:fonts.poppin600,fontSize:Theme.fontSize.extraLargeTitle24,color:'#222222',}}>Raja Ampat</Text>
            
             </View>
             </View>
             <View style={{justifyContent:'flex-end',width:100,alignItems:'flex-end'}}>
             <MessageIcon></MessageIcon>
             </View>
             </View>
             <View style={{width:Theme.horizontalSpacing.space354,height:Theme.verticalSpacing.space70,marginTop:Theme.verticalSpacing.space15}}>
             <FlatList
                data={ImageList}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                />
                </View>
                <Text
                style={{fontFamily:fonts.poppinsRegular,lineHeight:22,margin:Theme.horizontalSpacing.space20,color:"grey",alignSelf:'center',fontSize:Theme.fontSize.preHeading12}}
                
                >Ellipse rotate community underline list content inspect 
                       image align. Object connection inpect pixel style 
                       connection image layout boolean . Star figma group invite
                        scale layer apacity star. Pixel component scrolling fill font edit. boolean
                        flatern pen reezing move follower. main layer mask layout prototype 
                        selection duplicate vector bold. Slice editor follower opacity pencil share layer . Clips bullet rotate
                        shadow vector flow boolean draft flattern.

                </Text>
                
                <View style={{width:Theme.horizontalSpacing.space414,height:Theme.verticalSpacing.space117,borderTopWidth:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:Theme.verticalSpacing.space20}}>
                  <View style={{width:150,height:50,marginLeft:Theme.horizontalSpacing.space15}}>
                    <Text style={{fontFamily:fonts.poppinsRegular,fontSize:Theme.fontSize.paragraph14,color:'grey'}}>price Place</Text>
                      <Text style={{fontFamily:fonts.poppin600,fontSize:Theme.fontSize.headline20,color:'black'}}>$1.500/ day</Text>
                  </View>
                  <TouchableOpacity
                  onPress={()=>{
                    navigation.navigate('chooseDate')
                  }}
                  >
                  <View style={{width:110,height:53,backgroundColor:'#5BC0F8',marginLeft:Theme.horizontalSpacing.space100,borderRadius:Theme.borderRadius.medium8,justifyContent:"center",alignItems:'center'}}>
                 <Text style={{color:'#FFFFFF',fontFamily:fonts.poppin600,fontSize:Theme.fontSize.subHeading16}}>Book Now</Text>
                  </View>
                  </TouchableOpacity>
                </View>
             </View>
             
             <View>
               
                </View>
              </ImageBackground>
             
           </View>
        </View>
    )
}

export default DetailsDestination;