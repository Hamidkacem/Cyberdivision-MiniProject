import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const PetImage = ({ setdata, data }) => {
  const [image, setImage] = useState(null);

  useEffect(async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        alert("permisson denied");
      }
    }
  }, []);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <SafeAreaView>
      <View className="py-10 px-5">
        <Text className="text-3xl font-bold">Pet Image</Text>
        <Text className=" text-[#A8A8A8]">
          (File size: max 1024 KB | Formats: .PNG, JPG)
        </Text>

        <View>
          <View>
            <TouchableOpacity onPress={()=>pickImage}>
              <View className="border-2 border-[#E8E8E8] rounded-xl h-40 text-center justify-center items-center my-5">
                {image && (
                  <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                  />
                )}
                <Text className="text-[#04B531]">Browse</Text>
              </View>
            </TouchableOpacity>
            {/* )} */}
          </View>
          <View className="border-2  border-[#E8E8E8]  rounded-xl h-40 text-center justify-center items-center my-5">
            <Text className="text-[#858585]">Add another photo</Text>
          </View>
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default PetImage;
