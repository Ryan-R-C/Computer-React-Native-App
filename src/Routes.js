import React from "react";
import { requireNativeComponent } from "react-native";


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LandingPage from "./screens/LandingPage";

import SinglePost from "./screens/SinglePost";


import Posts from "./screens/Posts";

const Tab = createBottomTabNavigator();


const Stack = createNativeStackNavigator();


export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                headerMode='none'
                initialRouteName={LandingPage}
                screenOptions={{
                    headerShown: false
                  }}
                >
                <Stack.Screen
                    name="LandingPage"
                    component={LandingPage}
                    screenOptions={{
                        headerShown: false
                      }}
                />

                <Stack.Screen   
                    name="SinglePost"
                    component={SinglePost}
                    screenOptions={{
                        headerShown: false
                      }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
