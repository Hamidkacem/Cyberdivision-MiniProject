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
const PetInfo = ({ setdata, data }) => {
  const [vue, Setvue] = useState(true);
  const [value, setvalue] = useState({});
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-3">
          <Text className="text-3xl font-bold">Pet Information</Text>
          <Text className="text-[#858585] text-lg ">Breed</Text>
          {/* input selecter */}
          <View className="border-2   border-[#C9C9C9] rounded-3xl items-end justify-center">
            <Image
              className="absolute items-center  right-4 "
              source={require("../../assets/Vector.png")}
            />
            <RNPickerSelect
              onValueChange={(value) => setdata({ ...data.pet, breed: value })}
              placeholder={{
                label: "Select your Role",
                value: null,
              }}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              items={[
                { label: "Parc des oliver", value: "Parc des oliver" },
                { label: "Parc des legend", value: "Parc des legend" },
                { label: "Twins house parc", value: "Twins house parc" },
              ]}
            />
          </View>

          <Text className="text-[#858585] text-lg ">Pet Name</Text>
          <TextInput
            className="p-3 items-center justify-center border-2 border-[#C9C9C9]  rounded-3xl "
            placeholder="Enter Your Pet Name"
            onChangeText={(text) => {
              setdata({ ...data.pet, name: text });
            }}
          />
          <Text className="text-[#858585] text-lg ">Pet Microchip</Text>
          {/* input Microchip */}
          <TextInput
            onChangeText={(text) => {
              setdata({ ...data.pet, microshipId: text });
            }}
            className="p-3 items-center justify-center border-2 border-[#C9C9C9]  rounded-3xl "
            placeholder="Enter Your Pet Microchip"
          />
          <Text className="text-[#858585] text-lg ">Vaccinated</Text>
          {/* Input Vaccinated */}

          <View className="border-2 border-slate-300 rounded-3xl flex-row  justify-between">
        <View
          className={
            !vue
              ? "bg-[#04AF2F] color-white items-center justify-center  h-14 w-2/4 rounded-3xl "
              : " items-center justify-center h-14 w-2/4 rounded"
          }
        >
          <Text
            onPress={() => {
              Setvue(false), setdata({ ...data.pet, isVaccinated: "Yes" });
            }}
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
              : "bg-[#04AF2F] color-white items-center justify-center  h-14 w-2/4 rounded-3xl"
          }
        >
          <Text
            onPress={() => {
              Setvue(true), setdata({ ...data.pet, isVaccinated: "No" });
            }}
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
            onChangeText={(text) => {
              setdata({ ...data.pet, care: text });
            }}
            className=" h-32 items-center justify-center border-2 border-[#C9C9C9] rounded-3xl "
            placeholder="   Enter Your Pet Age"
          />
        </View>
        <View className="py-10"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PetInfo;
