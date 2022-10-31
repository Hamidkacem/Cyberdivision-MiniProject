import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  useLayoutEffect,
} from "react-native";
import React, { useState } from "react";

const SignUpFirstStep = ({ navigation, route }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [data, setdata] = useState({
    email: String,
    lastName: String,
    firstName: String,
  });

  return (
    <SafeAreaView className="py-10  px-5">
      <View>
        <Text className="text-3xl font-bold">Create Account</Text>
        <Text className="text-[#858585] text-lg ">
          We make it easy for people to adopt and rehome
        </Text>
        <Text className="text-[#858585] text-lg">
          pets all around Australia
        </Text>
        <Text className="text-lg p-3  ">First Name</Text>
        <TextInput
          value={data.firstName}
          className="p-3 items-center justify-center border-2 border-[#C9C9C9]  rounded-3xl "
          placeholder="Enter Your First Name"
          onChangeText={(text) => {
            setdata({ ...data, firstName: text });
          }}
        />
        <Text className="text-lg p-3">Last Name</Text>
        <TextInput
          value={data.lastName}
          className="p-3 items-center justify-center border-2 border-[#C9C9C9]  rounded-3xl "
          placeholder="Enter your Last Name"
          onChangeText={(text) => {
            setdata({ ...data, lastName: text });
          }}
        />
        <Text className="text-lg p-3">Email Address</Text>
        <TextInput
          value={data.email}
          className="p-3 items-center justify-center border-2 border-[#C9C9C9]  rounded-3xl "
          placeholder="Enter your Email Address"
          onChangeText={(text) => {
            setdata({ ...data, email: text });
          }}
        />
        {/* Button  */}
        <View className="py-8">
          <View className="bg-[#04AF2F] color-white p-3 items-center justify-center rounded-full py-4 ">
            <Text
              className="text-white "
              onPress={() => {
                navigation.push("SignUpSecondStep", { state: { data: data } });
              }}
            >
              Create account
            </Text>
          </View>
        </View>

        <View className="flex flex-row justify-center ">
          <Text className="text-[#858585] justify-between text-lg">
            Already have an account ? <Text
              className="text-[#04AF2F] font-bold"
              onPress={() => {
                console.log(data);
              }} >
                Login
            </Text>
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center">
          <Text className="text-[#858585] text-l">
            Signup to Petnet means you agree to our
          </Text>
          <Text className="text-[#04AF2F]  text-lg font-bold"> privacy </Text>
        </View>
        <View className="flex flex-row justify-center">
          <Text>
            <Text className="text-[#04AF2F] underline  font-bold">polity</Text>
            <Text className="text-[#858585] underline-none"> and </Text>
            <Text className="text-[#04AF2F] font-bold underline ">
              Terms of services
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpFirstStep;
