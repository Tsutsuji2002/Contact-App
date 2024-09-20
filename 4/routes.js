import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import Contacts from "../screens/Contacts";
import Profile from "../screens/Profiles";
import Favorites from "../screens/Favorites";
import User from "../screens/User";
import AddContact from "../screens/AddContact";
import EditContact from "../screens/EditContact";
import Options from "../screens/Options";
import colors from "../utility/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from '../3/routes';

const getDrawerItemIcon = (icon) => ({ tintColor }) => (
  <MaterialIcons name={icon} size={22} style={{ color: tintColor }} />
);

const Stack = createNativeStackNavigator();

const ContactsScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerShown: false,
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{ title: "Contact" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => {
          const { contact } = route.params;
          const { name } = contact;
          return {
            title: name.split(" ")[0],
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.blue,
            },
          };
        }}
      />
      <Stack.Screen
        name="AddContact"
        component={AddContact}
        options={{ title: "Add Contact" }}
      />
      <Stack.Screen
        name="EditContact"
        component={EditContact}
        options={{ title: "Edit Contact" }}
      />
    </Stack.Navigator>
  );
};

const FavoritesScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: "Favorites" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
};

const UserScreen = () => {
  return (
    <Stack.Navigator initialRouteName="User">
      <Stack.Screen
        name="User"
        component={User}
        options={{
          headerShown: false,
          headerBackTitle: "Me",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: colors.blue,
          },
        }}
      />
      <Stack.Screen name="Options" component={Options} options={{ title: "Option" }} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.blue,
        },
        drawerActiveTintColor: colors.greyLight,
        drawerInactiveTintColor: colors.greyDark,
      }}
    >
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          drawerIcon: getDrawerItemIcon("dashboard"),
          title: "Tabs",
        }}
      />

      <Drawer.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={{
          drawerIcon: getDrawerItemIcon("list"),
          title: "Contacts",
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: getDrawerItemIcon("star"),
          title: "Favorites",
        }}
      />
      <Drawer.Screen
        name="User"
        component={UserScreen}
        options={{
          drawerIcon: getDrawerItemIcon("person"),
          title: "User",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
