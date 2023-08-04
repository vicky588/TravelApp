import {createStackNavigator}from "@react-navigation/stack"

import { OnBoardScreen } from "../Screen";

const stack = createStackNavigator();
const MyStack=()=>{
    return(
        <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name="onBoardScreen" component={OnBoardScreen}/>

        </stack.Navigator>
    )
}
export default MyStack;