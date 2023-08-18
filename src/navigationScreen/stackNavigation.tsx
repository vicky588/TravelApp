import {createStackNavigator}from "@react-navigation/stack"

import  OnBoardScreen  from "../Screen/onBoardScreen";
import RegisterScreen from "../Screen/registerScreen";
import LoginScreen from "../Screen/loginScreen";
import VerificationScreen from "../Screen/verificationScreen";
import ChooseFavoriteScreen from "../Screen/ chooseFavoriteScreen";
import HomeScreen from "../Screen/homeScreen";
import { NavigationContainer } from "@react-navigation/native";

const stack = createStackNavigator();
const MyStack=()=>{
    return(
        
        <stack.Navigator screenOptions={{headerShown:false}}
        initialRouteName="homeScreen"
        >
        <stack.Screen name="onBoardScreen" component={OnBoardScreen}/>
        <stack.Screen name="registerScreen" component={RegisterScreen}/>
        <stack.Screen name="loginScreen" component={LoginScreen}/>
        <stack.Screen name="verificationScreen" component={VerificationScreen}/>
        <stack.Screen name="chooseFavoriteScreen" component={ChooseFavoriteScreen}/>
        <stack.Screen name="homeScreen" component={HomeScreen}/>

        </stack.Navigator>
      
    )
}
export default MyStack;