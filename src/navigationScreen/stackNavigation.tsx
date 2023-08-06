import {createStackNavigator}from "@react-navigation/stack"

import  OnBoardScreen  from "../Screen/onBoardScreen";
import RegisterScreen from "../Screen/registerScreen";
const stack = createStackNavigator();
const MyStack=()=>{
    return(
        <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name="onBoardScreen" component={OnBoardScreen}/>
        <stack.Screen name="registerScreen" component={RegisterScreen}/>
        </stack.Navigator>
    )
}
export default MyStack;