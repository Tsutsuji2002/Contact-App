import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contacts from "../screens/Contacts";
import Profile from "../screens/Profiles";
import Favorites from "../screens/Favorites";
import User from "../screens/User";
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import colors from "../utility/colors";

const getTabBarIcon = icon => ({tintColor}) => (
    <MaterialIcons name={icon} size={26} style={{color: tintColor}}/>
)

const Stack = createNativeStackNavigator();
const ContactsScreen = ()=>
{
    return (
        <Stack.Navigator
            initialRouteName="Contacts"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato'},
                headerTitleAlign: 'center',
            }}
        >
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
    )
}
const FavoritesScreen = ()=>
{
    return (
        <Stack.Navigator
            initialRouteName="Favorites"
        >
            <Stack.Screen name='Favorites' component={Favorites} options={{title:"Favorites"}}/>
            <Stack.Screen name="Profile" component={Profile} options={{title:"Profile"}}/>      
        </Stack.Navigator>
    )
}
const UserScreen = ()=>
{
    return (
        <Stack.Navigator
            initialRouteName="User"
        >
            <Stack.Screen name='User' component={User} options={{
                headerBackTitle:"Me",
                headerTintColor:'white',
                headerStyle: {
                    backgroundColor: colors.blue,
                },
                headerRight: ()=>(
                    <MaterialIcons
                        name="settings"
                        size={24}
                        style={{ color: 'white', marginRight: 10}}
                        onPress={() => navigation.navigate('Option')}/>
                )}}/> 
            <Stack.Screen name="Options" component={Options} options={{title: "Option"}}/>
        </Stack.Navigator>
    )
}  

const Tab = createMaterialBottomTabNavigator();
const TabNavigator= ()=>
{
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="ContactsScreens"
                barStyle= {{backgroundColor: colors.blue}}
                labeled= {false}
                activeTintColor= {colors.greyLight}
                inactiveColor={colors.greyDark}
                >
                    <Tab.Screen name='ContactsScreen' component={ContactsScreen} options={{tabBarIcon: getTabBarIcon('list')}}/>
                    <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} options={{tabBarIcon: getTabBarIcon('star')}}/>
                    <Tab.Screen name="UserScreen" component={UserScreen} options={{tabBarIcon: getTabBarIcon('person')}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default TabNavigator;