import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

const PetType = () => {
  return (
    <SafeAreaView>
      <Text className="text-3xl font-bold py-5">Pet Type</Text>
      <Text className="text-[#858585] text-lg py-3 ">
        Please select a category in order to proceed to the next step.
      </Text>

      <View className="flex flex-row justify-around ">
        <Image source={require("../../assets/Cat.png")} />
        <Image source={require("../../assets/Dog.png")} />
      </View>
      <View className="py-8 px-8">
        <View className="bg-[#04AF2F] color-white p-2 items-center justify-center rounded-full ">
          <Text className="text-white text-2xl  font-bold">Complete</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PetType;
