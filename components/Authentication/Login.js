import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import axios from "axios";

const Login = ({ route, navigation }) => {
  const [data, setdata] = useState({
    password: String,
    email: String,
  });
  let setLogged = route.params.setLogged;

  const Login = () => {
    axios
      .post("https://dev-api.pet-net.com.au/api/v1/auth/sign-in", data)
      .then((res) => {
        console.log("res", res.data);
        setLogged(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView>
      <View className="py-10 px-10">
        <Text className="text-3xl font-bold">Login to your Account</Text>
        <Text className="text-[#858585] text-lg py-3 ">
          We make it easy for people to adopt and rehome
          <Text>pets all around Australia </Text>
        </Text>

        <Text className="text-lg  py-5">Email Address</Text>
        <TextInput
          className="p-3 items-center justify-center border-2 border-[#C9C9C9]  rounded-3xl "
          placeholder="Enter Your Address"
          type="email"
          value={data.email}
          onChangeText={(text) => {
            setdata({ ...data, email: text });
          }}
        />
        <Text className="text-lg  py-5" type="password">
          Password
        </Text>
        <TextInput
          type="password"
          className="p-3 items-center justify-center border-2 border-[#C9C9C9]  rounded-3xl "
          placeholder="Enter Your Password"
          value={data.password}
          onChangeText={(text) => {
            setdata({ ...data, password: text });
          }}
        />
        <View className="py-8 px-8">
          <View className="bg-[#04AF2F] color-white p-2 items-center justify-center rounded-full ">
            <Text className="text-white text-2xl  font-bold" onPress={Login}>
              Login
            </Text>
          </View>
        </View>
        <View className="flex flex-row justify-center ">
          <Text className="text-[#858585] justify-between text-lg">
            You don't have an account ?
            <Text
              className="text-[#04AF2F] font-bold"
              onPress={() => navigation.navigate("SignUpFirstStep")}
            >
              {" "}
              Create account{" "}
            </Text>
          </Text>
        </View>
        <View className="flex flex-row justify-center">
          <Text className="text-[#858585] text-lg">
            Signup to Petnet means you agree to our
          </Text>
          <Text className="text-[#04AF2F]  text-lg"> privacy </Text>
        </View>
        <View className="flex flex-row justify-center">
          <Text>
            <Text className="text-[#04AF2F] underline ">polity</Text>
            <Text className="text-[#858585] font-bold ">and</Text>
            <Text className="text-[#04AF2F] font-bold underline ">
              Terms of services
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
