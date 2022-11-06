import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import Listings from "./Listings.js";
import Settings from "./Settings.js";
import "localstorage-polyfill";
import axios from "axios";
const Profile = ({ navigation, route }) => {
  const [userInfo, setuserInfo] = useState({
    firstName: "",
    lastName: "",
    state: "",
    suburb: "",
    zipCode: "",
  });
  
  useEffect(() => {

    let token = localStorage.getItem("token");
    axios
    .get("https://dev-api.pet-net.com.au/api/v1/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      // console.log("user: ", res.data);
      setuserInfo(res.data.profile);
    });
  }, []);
  // let setLogged = route.params.setLogged;
  const [view, setView] = useState(false);

  return (
    <SafeAreaView className="h-screen bg-white py-2">
            <StatusBar style="light" />
      <View className=" flex">
        {/* Title */}
        <View className=" flex flex-row justify-warp gap-2 items-center text-center py-2">
          <View className="mt-3 p-4">
            <Image source={require("../../assets/El.png")} />
          </View>
          {/* user Container */}
          <View className="mt-3 flex flex-warp">
            {/* Name User */}
            <Text className="text-l flex-warp font-bold">
              {userInfo.firstName } {userInfo.lastName}
            </Text>
            <Text className="text-[#858585] text-xs  flex-wrap ">
              An experienced dogs breeder located
            </Text>
            <Text className="text-[#858585] text-xs  flex-wrap ">
              in Melboune, VIC Test
            </Text>
          </View>
        </View>
        <View className="p-2">
          <View className="bg-[#04AF2F] color-white p-2 items-center justify-center rounded">
            <Text
              className="text-white text-2xl"
              onPress={() => navigation.navigate("CreatePost")}
            >
              Create Post
            </Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row justify-around p-3">
        <Text
          className={
            !view
              ? "text-[#04AF2F] border-b-4 border-[#04AF2F]  text-lg"
              : "text-[#858585] font-bold text-lg"
          }
          onPress={() => setView(false)}
        >
          Listings
        </Text>
        <Text
          className={
            view
              ? "text-[#04AF2F]  font-bold  border-b-4 border-[#04AF2F]  text-lg"
              : "text-[#858585] font-bold text-lg"
          }
          onPress={() => setView(true)}
        >
          Settings
        </Text>
      </View>
      {/* Listings and settings */}
      <View className="flex-auto flex-row justify-around  ">
        {/* A Suivre  you need to fix this  */}
        {/* keyboardShouldPersistTaps="always" */}
        {/* <ScrollView  > */}
        {view ? <Settings userInfo={userInfo} /> : <Listings />}
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
