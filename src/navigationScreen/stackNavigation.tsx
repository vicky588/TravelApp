import {createStackNavigator}from "@react-navigation/stack"

import  OnBoardScreen  from "../Screen/onBoardScreen";
import RegisterScreen from "../Screen/registerScreen";
import LoginScreen from "../Screen/loginScreen";
const stack = createStackNavigator();
const MyStack=()=>{
    return(
        <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name="onBoardScreen" component={OnBoardScreen}/>
        <stack.Screen name="registerScreen" component={RegisterScreen}/>
        <stack.Screen name="loginScreen" component={LoginScreen}/>

        </stack.Navigator>
    )
}
export default MyStack;