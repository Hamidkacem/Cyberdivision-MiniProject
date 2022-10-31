import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../components/UserProfile/Profile";
import CreatePost from "../components/CreatePost/CreatePost"



const Stack = createNativeStackNavigator();
const GlobalNavigation = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CreatePost"
        component={CreatePost}
      />
    </Stack.Navigator>
  );
};

export default GlobalNavigation;
