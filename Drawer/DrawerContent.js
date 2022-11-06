import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import "localstorage-polyfill";
import axios from "axios";

const DrawerContent = (props) => {
  const navigation = useNavigation();
 
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity style={Styles.drawerItem}>
          <Text
            style={Styles.drawerText}
            onPress={() => navigation.navigate("Profile")}
          >
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.drawerItem}>
          <Text
            style={Styles.drawerText}
            onPress={() => navigation.navigate("CreatePost")}
          >
            Create Post
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.drawerItem}>
          <Text
            style={Styles.drawerText}
            onPress={() => {
              let token = localStorage.getItem("token");
              axios.post("https://dev-api.pet-net.com.au/api/v1/auth/sign-out",{},{ headers: {
                Authorization: `Bearer ${token}`,
              }}).then(res=>{
                if(res.status===200){
                  props.setLogged(false);
                  localStorage.clear();
                }
              })
            }}
          >
            Deconnexion
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  drawerItem: {
    marginTop: 30,
    width: "100%",
    height: 50,
    paddingLeft: 10,
    justifyContent: "center",
  },

  drawerText: {
    fontSize: 14,
    color: "grey",
    fontWeight: "bold",
  },
});

export default DrawerContent;
