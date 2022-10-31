import { View, Text, SafeAreaView } from "react-native";

import React from "react";

const PetImage = ({setdata , data}) => {

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
        <View>
        </View>
      </View>
      
    </SafeAreaView>
  );
};

export default PetImage;
