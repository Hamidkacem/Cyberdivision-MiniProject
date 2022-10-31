import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const PetType = ({setdata ,data}) => {

  return (
    <SafeAreaView className='bg-white'>
      <Text className="text-3xl font-bold py-5">Pet Type</Text>
      <Text className="text-[#858585] text-lg py-3 ">
        Please select a category in order to proceed to the next step.
      </Text>

      <View className="flex flex-row justify-around ">
        <TouchableOpacity>
          <View onPress={() => setdata({...data,type:"Cat"})}>
            <Image
              className="rounded-xl"
              source={require("../../assets/Cat.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View onPress={() => setdata({...data,type:"Dog"})}>
            <Image
              className="rounded-xl"
              source={require("../../assets/Dog.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PetType;
