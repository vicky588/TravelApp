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
import MyStack from './src/navigationScreen/stackNavigation';
 import {NavigationContainer} from "@react-navigation/native"
import OnBoardScreen from './src/screen/onBoardScreen';
import RegisterScreen from './src/Screen/registerScreen';
import MyTabs from './src/navigationScreen/botttomNavigation';

const App=()=>{
  return(
   
  <NavigationContainer>
<MyStack></MyStack>
  </NavigationContainer>
 
  )
}


export default App;