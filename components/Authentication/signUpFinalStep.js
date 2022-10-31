import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SignUpFinalStep = ({ route, navigation }) => {
  // const [password, setpassword] = useState("");
  const [data, setdata] = useState({
    password: String,
  });
  const { state } = route.params;

  useEffect(() => {
    console.log(state);
    setdata({ ...state });
  }, []);

  const SubmitButton = () => {
    console.log("data===>", data);
    axios
      .post("https://dev-api.pet-net.com.au/api/v1/auth/sign-up", data)
      .then((res) => {
        console.log("res==>", res.data);
      })
      .catch((err) => {
        console.log("er", err);
      });
  };
  return (
    <SafeAreaView>
      <View className="py-10 px-10">
        {/* Title */}
        <View>
          <Text className="text-3xl font-bold">Final step to complete</Text>
        </View>
        <Text className="text-[#858585] text-lg ">
          Let's setup your password together .{" "}
        </Text>
        <Text className="text-lg  py-5">Password</Text>
        <TextInput
          type="password"
          value={data.password}
          onChangeText={(text) => {
            setdata({ ...data, password: text });
          }}
          className="p-2 items-center justify-center px-5 border-2 border-[#C9C9C9]  rounded-3xl "
          placeholder="Enter Your Password"
        />
        <Text className="text-lg  py-5">Confirm Password</Text>
        <TextInput
          className="p-2 items-center justify-center px-5 border-2 border-[#C9C9C9]  rounded-3xl "
          placeholder="Confirm Your Password"
        />

        {/* Fix this  */}
        <View className="  py-22 px-8 ">
          <View className="bg-[#04AF2F] color-white p-2 items-center justify-center rounded-full">
            <Text
              className="text-white text-xl  font-bold "
              onPress={SubmitButton}
            >
              Complete
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpFinalStep;
