import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const PetType = ({ setdata, data  }) => {
  return (
    <SafeAreaView className="bg-white">
      <ScrollView>
        <Text className="text-3xl font-bold">Pet Type</Text>
        <Text className="text-[#858585] text-lg py-1 ">
          Please select a category in order to proceed to the next step.
        </Text>

        <View className="flex flex-row justify-around">
          <TouchableOpacity onPress={() => setdata({ ...data.pet, petType: "Cat" })}>
            <View >
              <Image
                className="rounded-xl"
                source={require("../../assets/catt.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setdata({ ...data.pet, petType: "Dog" })}>
            <View >
              <Image
                className="rounded-xl"
                source={require("../../assets/Dog.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PetType;
