import React from 'react';
import { View, Text, Button, Alert,StyleSheet, FlatList } from 'react-native';
import { PaymentMethod, useStripe } from '@stripe/stripe-react-native';
import { Component } from 'react';




  


  const PaymentScreen = () => {
// const paymentData={
    
//         name:'vinay kumar',
//         contactNumber:'+91-8848510629',
//         address:"abc chowk",
//         pincode:'825412',
//         paymentHistory:[
//             {
//                 paymentAmount:'Rs 1000',
//                 date:"2023-09-15",
//                 place:'gurgoan',
//                 payeeName:'vinay kumar'
//             },
//             {
//                 paymentAmount:'Rs2000',
//                 date:"2023-10-12",
//                 place:'gurgoan',
//                 payeeName:'vinay kumar'
//             },
//             {
//                 paymentAmount:'Rs 1500',
//                 date:"2023-10-16",
//                 place:'gurgoan',
//                 payeeName:'vinay kumar'
//             },
//             {
//                 paymentAmount:'Rs700',
//                 date:"2023-10-20",
//                 place:'gurgoan',
//                 payeeName:'vinay kumar'
//             }
//         ]
    
 //}
//  const renderItem=({item})=>{
//     return(
//         <View style={{width:400,height:100}}>
             
//             <View style={{flexDirection:'row',margin:10,height:100}}>
                
//             <Text style={{margin:5}}>{item.payeeName}</Text>
//             <Text style={{margin:5}}>paymentDate-{item.date}</Text>
//             <Text style={{margin:10}}>{item.place}</Text>
//             <Text style={{margin:5}}>{item.paymentAmount}</Text>
//             </View>
           
//         </View>
//     )

 }
//   return (
//     <View style={{flex:1}}>
//         <Text style={{fontSize:20,alignSelf:'center',marginTop:20}}>{paymentData.name}</Text>
//             <Text style={{fontSize:16,alignSelf:'center'}}>{paymentData.contactNumber}</Text>
//             <Text style={{fontSize:16,alignSelf:'center'}}>{paymentData.pincode}</Text>
//         <FlatList
//         data={paymentData.paymentHistory}
//         renderItem={renderItem}
//         />
//     </View>
//   )
// };
  
 export default PaymentScreen;