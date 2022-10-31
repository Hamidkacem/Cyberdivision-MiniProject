import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import PetInfo from "./PetInfo";
import PetType from "./PetType";
import SpecificInfo from "./SpecificInfo";
import PetImage from "./PetImage";

const CreatePost = ({ navigation }) => {
  const [vue, setVue] = useState(1);
  const [data, setdata] = useState({
    petType: "",
    microshipId: "",
    name: "",
    breed: "",
    dadBreed: "",
    momBreed: "",
    sex: "",
    isDesexed: true,
    age: "",
    size: "",
    veterinaryChecked: true,
    isVaccinated: true,
    coatLength: "",
    color: "",
    isInShelter: true,
    care: "",
    expectedAdultSize: "",
    goodWith: "",
  });

  return (
    <SafeAreaView className="bg-white">
      <View className="">
        <View className="flex flex-row justify-around items-center mt-5">
          <View>
            <View
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
      <ScrollView className="h-5/6">
        {vue === 1 && <PetType data={data} setdata={setdata} />}
        {vue === 2 && <PetInfo data={data} setdata={setdata} />}
        {vue === 3 && <SpecificInfo data={data} setdata={setdata} />}
        {vue == 4 && <PetImage data={data} setdata={setdata} />}

        <View className="">
          {vue === 1 ? (
            <View className="py-8 px-8 ">
              <TouchableOpacity onPress={() => setVue(vue + 1)}>
                <View className="bg-[#04AF2F] color-white p-2 items-center justify-center rounded-full h-12 ">
                  <Text className="text-white text-2xl  font-bold">
                    Complete
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View className="flex flex-row justify-around items-center p-3 ">
              <TouchableOpacity
                onPress={() => setVue(vue - 1)}
                className=" w-2/4 "
              >
                <View className="bg-[#04AF2F] color-white  items-center justify-center rounded-3xl h-12 ">
                  <Text className="text-white text-2xl  font-bold ">
                    Previous
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  vue === 4 ? navigation.navigate("Profile") : setVue(vue + 1)
                }
                className="w-2/4"
              >
                <View className="bg-[#CCCCCC] color-white ml-3 items-center justify-center rounded-3xl  h-12 ">
                  <Text className="text-white text-2xl  font-bold ">Next</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePost;
