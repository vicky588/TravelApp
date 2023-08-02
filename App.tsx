/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { assets } from './react-native.config';
import { fonts} from './src/constants';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () =>{
return (
 <View style={{width:'90%',height:'90%',margin:10,alignItems:'center',justifyContent:'center'}}>
<Text style={Styles.container}>Hi Vickys</Text>
 </View>

)
}

const Styles=StyleSheet.create({
  container:{
    fontFamily:fonts.manropeMedium,
   // fontFamily:fonts.manropeSemiBold,
    //fontFamily:fonts.manropeBold,
    //fontFamily:fonts.manropeRegular,
    //fontFamily:fonts.manropeExtraLight,
    //fontFamily:fonts.manropeBold,
    fontSize:30
  }
})
export default App;