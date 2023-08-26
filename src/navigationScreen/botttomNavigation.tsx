import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/homeScreen';
import MyStack from './stackNavigation';
import { BellIcon,SearchIcon,HomeIcon,Profile} from "../assets/image/svg";
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Search from '../Screen/search';
import TellMe from '../Screen/tellMe';
import ProfileScreen from '../Screen/profile';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}
    
    >
    
      <Tab.Screen name="Home" component={HomeScreen} 
   options={{
    tabBarIcon: ({ color, size }) => (
       <HomeIcon color={color}/>
      ),
}}


      />
      <Tab.Screen name="search" component={Search}
      options={{
        tabBarIcon: ({ color, size }) => (
            <SearchIcon color={color} />
            ),
    }}
      
      />
      <Tab.Screen name="Tell me" component={TellMe}
      options={{
        tabBarIcon: ({ color, size }) => (
          <BellIcon color={color} />
          ),
    }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen}
       options={{
        tabBarIcon: ({ color, size }) => (
          <Profile color={color}/>
          ),
    }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs