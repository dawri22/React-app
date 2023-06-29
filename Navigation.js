
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 






//screens
import HomeScreen from "./screens/HomeScreen";
import GenderScreen from "./screens/GenderScreen"
import StackScreen from "./screens/StackScreen";
import AgeScreen from "./screens/AgeScreen";
import WeatherScreen from "./screens/WeatherScreen";
import UniversityScreen from "./screens/UniversityScreen";
import WordPressScreen from './screens/WordPressScreen';
import AboutMeScreen from './screens/AboutMeScreen';


const Tab = createBottomTabNavigator();

function MyTabs() {
   return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
        tabBarActiveTintColor: 'purple'
    }}
    >
        <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
            tabBarLabel: 'Feed',
            tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={color} size={size} />
      ),
        }}
        ></Tab.Screen>

        <Tab.Screen 
        name="Generos" 
        component={GenderScreen}
        options={{
            tabBarLabel: 'Genero',
            tabBarIcon: ({color, size }) => (
                <Ionicons name="people-circle-sharp" size={size} color={color} />
            ),
        }}
        ></Tab.Screen>
        <Tab.Screen
        name="Edad" 
        component={AgeScreen}
        options={{
            tabBarLabel: 'Edad',
            tabBarIcon: ({color, size }) => (
                <AntDesign name="staro" size={size} color={color} />
            ),
        }}
        >

        </Tab.Screen>

        <Tab.Screen
        name="Universidad" 
        component={UniversityScreen}
        options={{
            tabBarLabel: 'Universidad',
            tabBarIcon: ({color, size }) => (
        <FontAwesome name="university" size={24} color="black" />            
        ),
        }}
        >

        </Tab.Screen>

        <Tab.Screen
         name="Wordpress" 
         component={WordPressScreen}
         options={{
             tabBarLabel: 'Wordpress',
             tabBarIcon: ({color, size }) => (
        <FontAwesome name="wordpress" size={24} color="black" />
                    ),
        }}
        >

        </Tab.Screen>

        <Tab.Screen
        name="El clima" 
        component={WeatherScreen}
        options={{
            tabBarLabel: 'El clima',
            tabBarIcon: ({color, size }) => (
        <MaterialCommunityIcons name="weather-cloudy" size={24} color="black" /> 
                   ),
        }}
        >

        </Tab.Screen>

        <Tab.Screen
        name="Acerca de mi" 
        component={AboutMeScreen}
        options={{
            tabBarLabel: 'Acerca de mi',
            tabBarIcon: ({color, size }) => (
        <MaterialCommunityIcons name="contacts" size={size} color={color} /> 
                   ),
        }}
        >

        </Tab.Screen>

    </Tab.Navigator>
   );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs></MyTabs>
        </NavigationContainer>
    );
}