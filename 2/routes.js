import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "./screens/Contacts";
import Profile from "./screens/Profiles";
import Favorites from "./screens/Favorites";
import User from "./screens/User";
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import colors from "../utility/colors";

const Stack = createStackNavigator();

const StackNavigator = ()=>
{
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Contacts"
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato'},
                    headerTitleAlign: 'center',
                }}>
                    <Stack.Screen name='Contacts' component={Contacts} options={{title:"Contact"}}/>
                    <Stack.Screen name="Profile" component={Profile} options={({route})=>
                                                                                {
                                                                                    const {contact} = route.params;
                                                                                    const {name} = contact;
                                                                                    return {
                                                                                        title: name.split(' ')[0],
                                                                                        headerTintColor: 'white',
                                                                                        headerStyle: {
                                                                                            backgroundColor: colors.blue,
                                                                                        }
                                                                                    }
                                                                                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StackNavigator;