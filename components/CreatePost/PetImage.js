import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const PetImage = () => {
  return (
    <SafeAreaView>
      <View className="py-10 px-5">
        <Text className="text-3xl font-bold">Pet Image</Text>
        <Text className=" text-[#A8A8A8]">
          (File size: max 1024 KB | Formats: .PNG, JPG)
        </Text>
        <View>
          <View className="border-2 border-[#E8E8E8] rounded-xl h-40 text-center justify-center items-center my-5">
            <Text className="text-[#04B531]">Browse</Text>
          </View>
          <View className="border-2  border-[#E8E8E8]  rounded-xl h-40 text-center justify-center items-center my-5">
            <Text className="text-[#858585]">Add another photo</Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row justify-center gap-5 items-center">
        <View className="bg-[#04AF2F] color-white  items-center justify-center rounded-3xl py-3 px-16 ">
          <Text className="text-white text-2xl  font-bold ">Previous</Text>
        </View>
        <View className="bg-[#04AF2F] color-white  items-center justify-center rounded-3xl py-3 px-20">
          <Text className="text-white text-2xl  font-bold ">Next</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PetImage;
