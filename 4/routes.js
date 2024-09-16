import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Contacts from "../screens/Contacts";
import Profile from "../screens/Profiles";
import Favorites from "../screens/Favorites";
import User from "../screens/User";
import { MaterialIcons } from "@expo/vector-icons";
import Options from "../screens/Options";
import colors from "../utility/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 

const getDrawerItemIcon = icon => ({tintColor}) => (
    <MaterialIcons name={icon} size={22} style={{color: tintColor}}/>
)

const Stack = createNativeStackNavigator();
const ContactsScreen = ()=>
{
    return (
        <Stack.Navigator
            initialRouteName="Contacts"
            screenOptions={{
                headerShown: false,
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
            screenOptions={
                {
                    headerShown: false,
                }
            }
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
                headerShown: false,
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

const Drawer = createDrawerNavigator();
const DrawerNavigator= ()=>
{
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="ContactsScreens"
                barStyle= {{backgroundColor: colors.blue}}
                labeled= {false}
                activeTintColor= {colors.greyLight}
                inactiveColor={colors.greyDark}
                >
                    <Drawer.Screen name='ContactsScreen' component={ContactsScreen} options={{drawerIcon: getDrawerItemIcon('list')}}/>
                    <Drawer.Screen name="FavoritesScreen" component={FavoritesScreen} options={{drawerIcon: getDrawerItemIcon('star')}}/>
                    <Drawer.Screen name="UserScreen" component={UserScreen} options={{drawerIcon: getDrawerItemIcon('person')}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default DrawerNavigator;