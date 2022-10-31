import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
const PetInfo = () => {
  const [vue, Setvue] = useState(false);
  const [value, setvalue] = useState({});
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-3">
          <Text className="text-3xl font-bold">Pet Information</Text>
          <Text className="text-[#858585] text-lg ">Breed</Text>
          {/* input selecter */}
          <View className="border-2  py-2 border-[#C9C9C9] rounded-3xl items-end justify-center">
            <Image
              className="absolute items-center  right-4 "
              source={require("../../assets/Vector.png")}
            />
            <RNPickerSelect
              onValueChange={(value) => setvalue(value)}
              placeholder={{
                label: "Select your Role",
                value: null,
              }}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              items={[
                { label: "Select1", value: "Select1" },
                { label: "Select2", value: "Select2" },
              ]}
            />
          </View>

          <Text className="text-[#858585] text-lg ">Pet Name</Text>
          <TextInput
            className="p-3 items-center justify-center border-2 border-[#C9C9C9]  rounded-3xl "
            placeholder="Enter Your Pet Name"
          />
          <Text className="text-[#858585] text-lg ">Pet Microchip</Text>
          {/* input Microchip */}
          <TextInput
            className="p-3 items-center justify-center border-2 border-[#C9C9C9]  rounded-3xl "
            placeholder="Enter Your Pet Microchip"
          />
          <Text className="text-[#858585] text-lg ">Vaccinated</Text>
          {/* Input Vaccinated */}
          <View className="border-2 border-slate-300 rounded-3xl flex-row  justify-between">
            <View
              className={
                !vue
                  ? "bg-[#04AF2F] color-white items-center justify-center  h-14 w-2/4 rounded-3xl"
                  : " items-center justify-center h-14 w-2/4 rounded"
              }
            >
              <Text
                onPress={() => Setvue(false)}
                className={
                  vue
                    ? "text-black text-2xl font-bold "
                    : "text-white text-2xl  font-bold "
                }
              >
                Yes
              </Text>
            </View>
            <View
              className={
                !vue
                  ? " px-16 justify-center"
                  : "bg-[#04AF2F] color-white  items-center rounded-3xl h-14 px-16 justify-center"
              }
            >
              <Text
                onPress={() => Setvue(true)}
                className={
                  !vue
                    ? "text-black text-2xl font-bold"
                    : "text-white text-2xl  font-bold"
                }
              >
                No
              </Text>
            </View>
          </View>
          <Text>Description</Text>
          <TextInput
            className=" h-32 items-center justify-center border-2 border-[#C9C9C9] rounded-3xl "
            placeholder="   Enter Your Pet Age"
          />
          <View className="flex flex-row justify-around items-center p-3 ">
            <View className="bg-[#04AF2F] color-white  items-center justify-center rounded-3xl  w-2/4 h-12 ">
              <Text className="text-white text-2xl  font-bold ">Previous</Text>
            </View>
            <View className="bg-[#CCCCCC] color-white ml-3 items-center justify-center rounded-3xl w-2/4 h-12 ">
              <Text className="text-white text-2xl  font-bold ">Next</Text>
            </View>
          </View>
        </View>
        <View className="py-14"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PetInfo;
