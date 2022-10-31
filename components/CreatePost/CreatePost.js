import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import ImagePicker from "./ImagePicker";
import PetInfo from "./PetInfo";
import PetType from "./PetType";
import SpecificInfo from "./SpecificInfo";
import PetImage from "./PetImage";

const CreatePost = () => {
  const [vue, SetVue] = useState(1);
  // const navigation = Vue;
  // const handelClick = (t) => {
  //   console.log("im herr");
  //   const count = t;
  //   console.log("count", count);
  //   for (let i = 0; i < navigation.lenth; i++) {
  //     console.log(navigation[i]);
  //     if (count === navigation[i]) {
  //       navigation[i] === true;
  //     } else navigation[i] === false;
  //   }
  // };
  return (
    <SafeAreaView>
      <View>
        <View className="flex flex-row justify-around items-center mt-5">
          <View>
            <View
              // onPress={() => handelClick(0)}
              className={
                vue === 1
                  ? "bg-[#04AF2F]  h-14 w-14 justify-center items-center rounded-full border-2 border-slate-300"
                  : "bg-[#E6FEEC] h-14 w-14 justify-center items-center rounded-full border-2 border-slate-300"
              }
            >
              <Text className={vue === 1 ? "text-white" : null}>1</Text>
            </View>
            <View className=" flex  items-center text-center">
              <Text>Pet </Text>
              <Text>Type</Text>
            </View>
          </View>

          <View>
            <View
              // onPress={() => handelClick(1)}
              className={
                vue === 2
                  ? "bg-[#04AF2F]  h-14 w-14 justify-center items-center rounded-full border-2 border-slate-300"
                  : "bg-[#E6FEEC] h-14 w-14 justify-center items-center rounded-full border-2 border-slate-300"
              }
            >
              <Text className={vue === 2 ? "text-white" : null}>2</Text>
            </View>
            <View className=" flex  items-center text-center">
              <Text>Pet </Text>
              <Text>information</Text>
            </View>
          </View>
          <View>
            <View
              // onPress={() => handelClick(2)}
              className={
                vue === 3
                  ? "bg-[#04AF2F]  h-14 w-14 justify-center items-center rounded-full border-2 border-slate-300"
                  : "bg-[#E6FEEC] h-14 w-14 justify-center items-center rounded-full border-2 border-slate-300"
              }
            >
              <Text className={vue === 3 ? "text-white" : null}>3</Text>
            </View>
            <View className=" flex  items-center text-center">
              <Text>Specific</Text>
              <Text>information</Text>
            </View>
          </View>
          <View>
            <View
              // onPress={() => handelClick(3)}
              className={
                vue === 4
                  ? "bg-[#04AF2F]  h-14 w-14 justify-center items-center rounded-full border-2 border-slate-300"
                  : "bg-[#E6FEEC] h-14 w-14 justify-center items-center rounded-full border-2 border-slate-300"
              }
            >
              <Text className={vue === 4 ? "text-white" : null}>4</Text>
            </View>
            <View className=" flex  items-center text-center">
              <Text>Pet </Text>
              <Text>Images</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Component */}
      <ScrollView>
        {vue === 1 && <PetType />}
        {vue === 2 && <PetInfo />}
        {vue === 3 && <SpecificInfo />}
        {vue == 4 && <PetImage />}
      </ScrollView>
      <View></View>
    </SafeAreaView>
  );
};

export default CreatePost;
