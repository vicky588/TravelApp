import React, {useState} from 'react';
import {View,Text, Button, Platform, SafeAreaView , StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Theme } from '../utils';
import { fonts } from '../constants';
import PaymentScreen from './paymentScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Svg,Path } from 'react-native-svg';
const  ChooseDate=({navigation}) =>{
   const [mydate, setDate] = useState(new Date());
   const [displaymode, setMode] = useState('date');
   const [isDisplayDate, setShow] = useState(false);

   const [count,setCount]=useState(0)
   const [childrencount,setChildrenCount]=useState(0)
   const [kidscount,setKidsCount]=useState(0)

   const changeSelectedDate = (event, selectedDate) => {
   const currentDate = selectedDate || mydate;
   setDate(currentDate);
};
const showMode = (currentMode) => {
   setShow(true);
   setMode(currentMode);
};
const displayDatepicker = () => {
   showMode('date');
};

 const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  const decrement = () => {
    // Update state with incremented value
    if(count!==0){
    setCount(count - 1);
    }
  };

  const childrenIncrementCount = () => {
    // Update state with incremented value
    
    setChildrenCount(childrencount + 1);
  };
  const childrenDecrement = () => {
    if(childrencount !== 0){
    setChildrenCount(childrencount - 1);}
  };

  const kidsIncrementCount = () => {
    // Update state with incremented value
    setKidsCount(kidscount + 1);
  };
  const kidsDecrement = () => {
   if(kidscount !==0){
    setKidsCount(kidscount - 1);}
    
  };

  const handleReset=()=>{
    setCount(0);
    setChildrenCount(0);
    setKidsCount(0)
  }

return (
   <SafeAreaView style={styles.container}>
                {/* <TouchableOpacity
   onPress={()=>(
    navigation.goBack()
   

   )}
   style={{marginTop:Theme.verticalSpacing.space17}}
   >
   <Svg style={{width:Theme.horizontalSpacing.space50,height:Theme.verticalSpacing.space50}}>
        <Path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </Svg>
   
   </TouchableOpacity> */}
                  <View style={{width:Theme.horizontalSpacing.space414,height:Theme.verticalSpacing.space570,backgroundColor:"red",alignItems:"center"}}>
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={mydate}
                     mode={displaymode}
                     is24Hour={true}
                     display='default'
                     onChange={changeSelectedDate}
            />
            </View>
         <View style={{width:Theme.horizontalSpacing.space354,height:Theme.verticalSpacing.space160,}}>
            <View style={{width:Theme.horizontalSpacing.space354,height:Theme.verticalSpacing.space56,flexDirection:'row',alignItems:'center',borderTopWidth:0.30}}>
                <View style={{width:Theme.horizontalSpacing.space230}}>
               <Text style={{fontFamily:fonts.poppinsRegular,fontSize:Theme.fontSize.subHeading16}}>Adult</Text>
               </View>
                <TouchableOpacity style={{width:Theme.horizontalSpacing.space30,height:Theme.verticalSpacing.space30,backgroundColor:'white',borderRadius:10,alignItems:'center'}}
                onPress={decrement}
                >
                    <Text style={{alignSelf:'center',fontSize:16}}>-</Text>
                </TouchableOpacity>
                <Text style={{marginLeft:10}}>{count}</Text>
                <TouchableOpacity style={{width:Theme.horizontalSpacing.space30,height:Theme.verticalSpacing.space30,backgroundColor:'white',borderRadius:10,marginLeft:10,alignItems:'center'}}
                 onPress={incrementCount}
                >
                    <Text style={{fontSize:16}}>+</Text>
                </TouchableOpacity>
                
            </View>
            <View style={{width:Theme.horizontalSpacing.space354,height:Theme.verticalSpacing.space56,flexDirection:'row',alignItems:'center',borderTopWidth:0.30}}>
                <View style={{width:Theme.horizontalSpacing.space230}}>
               <Text style={{fontFamily:fonts.poppinsRegular,fontSize:Theme.fontSize.subHeading16}}>Children</Text>
               </View>
                <TouchableOpacity style={{width:Theme.horizontalSpacing.space30,height:Theme.verticalSpacing.space30,backgroundColor:'white',borderRadius:10,alignItems:'center'}}
                onPress={childrenDecrement}
                >
                    <Text style={{alignSelf:'center',fontSize:16}}>-</Text>
                </TouchableOpacity>
                <Text style={{marginLeft:10}}>{childrencount}</Text>
                <TouchableOpacity style={{width:Theme.horizontalSpacing.space30,height:Theme.verticalSpacing.space30,backgroundColor:'white',borderRadius:10,marginLeft:10,alignItems:'center'}}
                 onPress={childrenIncrementCount}
                >
                    <Text style={{fontSize:16}}>+</Text>
                </TouchableOpacity>
                
            </View>

            <View style={{width:Theme.horizontalSpacing.space354,height:Theme.verticalSpacing.space56,flexDirection:'row',alignItems:'center',borderTopWidth:0.30}}>
                <View style={{width:Theme.horizontalSpacing.space230}}>
               <Text style={{fontFamily:fonts.poppinsRegular,fontSize:Theme.fontSize.subHeading16}}>Kids (Baby)</Text>
               </View>
                <TouchableOpacity style={{width:Theme.horizontalSpacing.space30,height:Theme.verticalSpacing.space30,backgroundColor:'white',borderRadius:10,alignItems:'center'}}
                onPress={kidsDecrement}
                >
                    <Text style={{alignSelf:'center',fontSize:16}}>-</Text>
                </TouchableOpacity>
                <Text style={{marginLeft:10}}>{kidscount}</Text>
                <TouchableOpacity style={{width:Theme.horizontalSpacing.space30,height:Theme.verticalSpacing.space30,backgroundColor:'white',borderRadius:10,marginLeft:10,alignItems:'center'}}
                 onPress={kidsIncrementCount}
                >
                    <Text style={{fontSize:16}}>+</Text>
                </TouchableOpacity>
                
            </View>
            <View style={{width:Theme.horizontalSpacing.space354,height:Theme.verticalSpacing.space60,flexDirection:'row',gap:30,marginTop:Theme.verticalSpacing.space24}}>
               <TouchableOpacity style={{width:Theme.horizontalSpacing.space153,height:Theme.verticalSpacing.space60,backgroundColor:'white',borderRadius:Theme.borderRadius.medium8,alignItems:'center',justifyContent:'center',}}
               onPress={handleReset}
               >
                 <Text>Reset</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{width:Theme.horizontalSpacing.space153,height:Theme.verticalSpacing.space60,backgroundColor:'#5BC0F8',borderRadius:Theme.borderRadius.medium8,alignItems:'center',justifyContent:'center'}}
                 onPress={()=>{
                    navigation.navigate('paymentScreen')
                 }}
                 
                 >
                 <Text>Confirmation</Text>
                 </TouchableOpacity>
            </View>
         </View>
      </SafeAreaView>
   );
};
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      //justifyContent: "center",
      //backgroundColor:'red',
      
   },
});
export default ChooseDate;