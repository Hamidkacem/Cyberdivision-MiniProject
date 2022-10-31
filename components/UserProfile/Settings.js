import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";

const Settings = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1 p-3">
          <View>
            <View className="flex flex-row justify-center items-center">
              <Image source={require("../../assets/Personal.png")} />
              <View>
                <Text className="text-2xl font-bold flex-start">
                  Personal informations
                </Text>
              </View>
            </View>
            <Text className="text-[#858585] justify-between text-lg  ">
              Edit your account and keep your informations up to date, to not
              miss any news
            </Text>

            <Text className="text-[#858585] justify-between text-lg px-2 py-3">
              Full Name
            </Text>
            <View className="flex flex-row border-2 border-[#858585] p-2 rounded-3xl items-center justify-center text-lg">
              <Text className="text-lg font-bold ">Karim Benmbarek</Text>
            </View>
            <Text className="text-[#858585] justify-between text-lg px-2 py-3">
              Email Address <Text className="text-red-500">(Not Verifed)</Text>
            </Text>
            <View className="flex flex-row border-2 border-[#858585] p-2 rounded-3xl items-center justify-center text-lg">
              <Text>karim.benmbarek@cyberdivision.xyz </Text>
              <Text className="text-[#04AF2F]  text-lg"> Verify Now</Text>
            </View>
            <Text className="text-[#858585] justify-between text-lg px-2 py-3">
              Phone Number{" "}
            </Text>
            <View className="flex flex-row border-2 border-[#858585] p-3 rounded-3xl items-center justify-center text-lg">
              <Text>+216 20 000 000</Text>
            </View>
            <Text className="text-[#858585] justify-between text-lg px-2 py-3">
              Address
            </Text>
            <View className="flex flex-row border-2 border-[#858585] p-3 rounded-3xl items-center justify-center text-lg">
              <Text>Sahloul Sousse</Text>
            </View>
            <Text className="text-[#858585] justify-between text-lg px-2 py-3">
              Bio{" "}
            </Text>
            <View className="flex flex-row border-2 border-[#858585] p-3 rounded-3xl items-center justify-center text-lg">
              <Text>Write your bio here...</Text>
            </View>
            <Text className="text-[#858585] justify-between text-lg px-2 py-3">
              State{" "}
            </Text>
            <View className="flex flex-row border-2 border-[#858585] p-3 rounded-3xl items-center justify-center text-lg">
              <Text>Sahloul, Sousse</Text>
            </View>
            <Text className="text-[#858585] justify-between text-lg px-2 py-3">
              Suburb{" "}
            </Text>
            <View className="flex flex-row border-2 border-[#858585] p-3 rounded-3xl items-center justify-center text-lg">
              <Text>Sahloul, Sousse</Text>
            </View>
            <Text className="text-[#858585] justify-between text-lg px-2 py-3">
              Poste code{" "}
            </Text>
            <View className="flex flex-row border-2 border-[#858585] p-3 rounded-3xl items-center justify-center text-lg">
              <Text>5050</Text>
            </View>
          </View>
          <Text className="text-[#E53935] underline p-2">
            Delete this account
          </Text>
          <View>
            <View className="bg-[#04AF2F] color-white p-2 items-center justify-center rounded-lg ">
              <Text className="text-white text-2xl  font-bold ">Save</Text>
            </View>
          </View>
          <View className="py-10"></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
