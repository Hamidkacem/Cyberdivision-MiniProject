import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FancyAlert } from "react-native-expo-fancy-alerts";

const SignUpFinalStep = ({ route, navigation }) => {
  const [showAlert, setshowAlert] = useState(false);

  const [data, setdata] = useState({
    password: "",
  });
  const { state } = route.params;
  const [visible, setVisible] = useState(false);

  const toggleAlert = React.useCallback(() => {
     setVisible(!visible);
   }, [visible]);
  useEffect(() => {
    console.log(state);
    setdata({ ...state });
  }, []);

  const SubmitButton = () => {

    axios.post("https://dev-api.pet-net.com.au/api/v1/auth/sign-up", data).then((res) => {
        navigation.navigate("Login");
        console.log("res.data", res.data);
      })
      .catch((err) => {
        console.log('err====>',err)
        toggleAlert()
      });
  };
  return (
    <SafeAreaView>
      <View className="py-14 px-2">
        {/* Title */}
        <View className="flex flex-row justify-between">
          <Text className="text-2xl font-bold">Final step to complete</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.push("Login");
            }}
          >
            <Image
              className="justify-end"
              source={require("../../assets/Close.png")}
            />
          </TouchableOpacity>
        </View>
        <Text className="text-[#858585] text-lg ">
          Let's setup your password together .{" "}
        </Text>
        <Text className="text-lg  py-5">Password</Text>
        <TextInput
          secureTextEntry={true}
          value={data.password}
          onChangeText={(text) => {
            setdata({ ...data, password: text });
          }}
          className="p-2 items-center justify-center px-5 border-2 border-[#C9C9C9]  rounded-3xl "
          placeholder="Enter Your Password"
        />
        <Text className="text-lg  py-5">Confirm Password</Text>
        <TextInput
          secureTextEntry={true}
          className="p-2 items-center justify-center px-5 border-2 border-[#C9C9C9]  rounded-3xl "
          placeholder="Confirm Your Password"
        />

        {/* Fix this  */}
        <View className="px-8 py-14">
          <View className="bg-[#04AF2F] color-white  p-2 items-center justify-center rounded-full">
            <Text
              className="text-white text-xl  font-bold "
              onPress={SubmitButton}
            >
              Complete
            </Text>
          </View>
        </View>
        <View className="flex flex-row justify-center items-center">
                  <FancyAlert
                visible={visible}
                icon={
                  <View
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "red",
                      borderRadius: 50,
                      width: "100%",
                    }}
                  >
                    <View className="absolute items-center justify-center left-6">
                      <Image
                        className=" right-4  w-10 h-12"
                        source={require("../../assets/Cat.png")}
                      />
                    </View>
                  </View>
                }
                style={{ backgroundColor: "white" }}
              >
                <Text style={{ marginTop: -16, marginBottom: 32 }}>
                  <Image
                    className="  w-5 h-5"
                    source={require("../../assets/exclamation-removebg-preview.png")}
                  />
                  Wrong password or E-mail
                </Text>
                <View className="flex flex-row justify-between p-6 ">
                  <Text
                    className=" bg-red-500 text-white py-2 px-5 rounded-md font-bold text-xl"
                    onPress={toggleAlert}
                  >
                    ok
                  </Text>
                </View>
              </FancyAlert>
            </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpFinalStep;
