import React, { useState, useEffect } from "react";
import GlobalNavigation from "./Navigation/GlobalNavigation";
import { NavigationContainer } from "@react-navigation/native";
import DrawerContent from "./Drawer/DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Authentication/Login";
import SignUpFirstStep from "./components/Authentication/signUpFirstStep";
import SignUpSecondStep from "./components/Authentication/signUpSecondStep";
import SignUpFinalStep from "./components/Authentication/signUpFinalStep";
import "localstorage-polyfill";

const Drawer = createDrawerNavigator();
function App(props) {
  return (
    <Drawer.Navigator
      screenOption={{
        headerShow: true,
        headerTintColor: "#04AF2F",
        fontWeight: "bold",
      }}
      drawerContent={(x) => (
        <DrawerContent {...x} setLogged={props.setLogged} />
      )}
    >
      <Drawer.Screen
        initialParams={{ setLogged: props.setLogged }}
        name="Home"
        options={{
          title: "  Petnet  ",
          headerTintColor: "#04AF2F",
          headerTitleAlign: 'center',
          headerTitleStyle: {
         
            fontWeight: "bold",

          },
        }}
        component={GlobalNavigation}
      />
    </Drawer.Navigator>
  );
}
const Stack = createNativeStackNavigator();
function Authentification(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
        initialParams={{ setLogged: props.setLogged }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUpFirstStep"
        component={SignUpFirstStep}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUpSecondStep"
        component={SignUpSecondStep}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUpFinalStep"
        component={SignUpFinalStep}
      />
    </Stack.Navigator>
  );
}

export default () => {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    let x = localStorage.getItem("token");
    if (x) {
      setLogged(true);
    }
  }, []);
  return (
    <NavigationContainer>
      {/* // <GlobalNavigation /> */}
      {logged ? (
        <App setLogged={setLogged} />
      ) : (
        <Authentification setLogged={setLogged} />
      )}
    </NavigationContainer>
  );
};
