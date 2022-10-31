import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useState, useEffect } from "react";

const SignUpSecondStep = ({ navigation, route }) => {
  const [data, setdata] = useState({
    zipCode: Number,
    state: String,
    suburb: String,
  });
  const { state } = route.params;

  useEffect(() => console.log("location", state), []);

  return (
    <SafeAreaView>
      <View className=" py-4">
        {/* Text and Close Button */}
        <View>
          <Text className="text-3xl font-bold p-3">Few steps to complete</Text>
        </View>
        {/* Inputs State */}
        <Text className="text-[#858585] text-lg  pb-5">
          Please,fill all this informations .
        </Text>
        <Text className="text-lg  pb-5 px-4">State</Text>

        <TextInput
          value={data.state}
          className="p-3 items-center justify-center border-2 border-[#C9C9C9]  rounded-3xl "
          placeholder="Select"
          onChangeText={(text) => {
            setdata({ ...data, state: text });
          }}
        />
        <Text className="text-lg  pb-5 px-4">Suburb</Text>
        <TextInput
          value={data.suburb}
          className="p-3 items-center justify-center border-2 border-[#C9C9C9] rounded-3xl "
          placeholder="Select"
          onChangeText={(text) => {
            setdata({ ...data, suburb: text });
          }}
        />
        <Text className="text-lg  pb-5 px-4">Zip Code</Text>
        <TextInput
          type="number"
          value={data.zipCode}
          className="p-3 items-center justify-center border-2 border-[#C9C9C9]  rounded-3xl "
          placeholder="Enter Your Post code"
          onChangeText={(text) => {
            setdata({ ...data, zipCode: Number(text) });
          }}
        />
      </View>
      <View className="py-8 px-8">
        <View className="bg-[#04AF2F] color-white p-3 items-center justify-center rounded-full ">
          <Text
            className="text-white text-2xl  font-bold "
            onPress={() =>
              navigation.navigate("SignUpFinalStep", {
                state: { ...state.data, ...data },
              })
            }
          >
            Complete
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
  const style = StyleSheet.create({
    // @supports (-webkit-touch-callout: none) {
    // inputIOS: {
    // }
    // inputAndroid: {
    //   ...t.pB0,
    //   ...t.pT0,
    //   ...t.textSm,
    //   ...t.textGray900,
    //   ...t.bgGray500,
    // },
  });
};

export default SignUpSecondStep;
