import { View, Text, SafeAreaView, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";

const SpecificInfo = ({ setdata, data }) => {
  const [value, setvalue] = useState({});
  const [vue, Setvue] = useState({
    sex: false,
    Desexed: false,
    Shelterorrescue: false,
    Healthstatus: false,
  });
  return (
    <View className="py-2 px-2">
      <Text className="text-2xl font-bold py-5 px-5">Specific information</Text>
      <Text className="text-[#858585] text-lg py-5 px-5 ">Sex</Text>
      {/* Toggle Button */}
      <View className="border-2 border-slate-300 rounded-3xl flex-row  justify-between">
        <View
          className={
            !vue.sex
              ? "bg-[#04AF2F] color-white items-center justify-center  h-14 w-2/4 rounded-3xl "
              : " items-center justify-center h-14 w-2/4 rounded"
          }
        >
          <Text
            onPress={() => {
              Setvue({ ...vue, sex: false }), setdata({ ...data.pet, sex: "Male" });
            }}
            className={
              vue.sex
                ? "text-black text-2xl font-bold "
                : "text-white text-2xl  font-bold "
            }
          >
            Male
          </Text>
        </View>
        <View
          className={
            !vue.sex
              ? " px-16 justify-center"
              : "bg-[#04AF2F] color-white items-center justify-center  h-14 w-2/4 rounded-3xl"
          }
        >
          <Text
            onPress={() => {
              Setvue({ ...vue, sex: true }),
                setdata({ ...data.pet, sex: "Female" });
            }}
            className={
              !vue.sex
                ? "text-black text-2xl font-bold"
                : "text-white text-2xl  font-bold"
            }
          >
            Female
          </Text>
        </View>
      </View>
      {/* Toggle Button */}
      <Text className="text-[#858585] text-lg py-5 px-5">Desexed</Text>
      <View className="border-2 border-slate-300 rounded-3xl flex-row  justify-between">
        <View
          className={
            !vue.Desexed
              ? "bg-[#04AF2F] color-white items-center justify-center  h-14 w-2/4 rounded-3xl"
              : " items-center justify-center h-14 w-2/4 rounded"
          }
        >
          <Text
            onPress={() => {
              Setvue({ ...vue, Desexed: false }),
                setdata({ ...data.pet, isDesexed: "Yes" });
            }}
            className={
              vue.Desexed
                ? "text-black text-2xl font-bold "
                : "text-white text-2xl  font-bold "
            }
          >
            Yes
          </Text>
        </View>
        <View
          className={
            !vue.Desexed
              ? " px-16 justify-center"
              : "bg-[#04AF2F] color-white items-center justify-center  h-14 w-2/4 rounded-3xl"
          }
        >
          <Text
            onPress={() => {
              Setvue({ ...vue, Desexed: true }),
                setdata({ ...data.pet, isDesexed: "No" });
            }}
            className={
              !vue.Desexed
                ? "text-black text-2xl font-bold"
                : "text-white text-2xl  font-bold"
            }
          >
            No
          </Text>
        </View>
      </View>
      <Text className="text-[#858585] text-lg ">Care & behaviour</Text>
      {/* select input */}
      <View className="border-2 border-[#C9C9C9] rounded-3xl">
        <RNPickerSelect
          onValueChange={(value) => setdata({ ...data.pet, care: value })}
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
      <Text className="text-[#858585] text-lg ">Shelter or rescue</Text>
      {/* Toggle Button */}
      <View className="border-2 border-slate-300 rounded-3xl flex-row  justify-between">
        <View
          className={
            !vue.Shelterorrescue
              ? "bg-[#04AF2F] color-white items-center justify-center  h-14 w-2/4 rounded-3xl"
              : " items-center justify-center h-14 w-2/4 rounded"
          }
        >
          <Text
            onPress={() => {
              Setvue({ ...vue, Shelterorrescue: false }),
                setdata({ ...data.pet,isInShelter: "Shelter" });
            }}
            className={
              vue.Shelterorrescue
                ? "text-black text-2xl font-bold "
                : "text-white text-2xl  font-bold "
            }
          >
            Shelter
          </Text>
        </View>
        <View
          className={
            !vue.Shelterorrescue
              ? " px-16 justify-center"
              : "bg-[#04AF2F] color-white items-center justify-center  h-14 w-2/4 rounded-3xl"
          }
        >
          <Text
             onPress={() => {
              Setvue({ ...vue, Shelterorrescue: true }),
                setdata({ ...data.pet, isInShelter: "Rescue" });
            }}
            className={
              !vue.Shelterorrescue
                ? "text-black text-2xl font-bold"
                : "text-white text-2xl  font-bold"
            }
          >
            Rescue
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

      <Text className="text-[#858585] text-lg ">Color</Text>
      {/* select input */}
      <View className="border-2  border-[#C9C9C9] rounded-3xl">
        <RNPickerSelect
          onValueChange={(value) => setdata({ ...data.pet, color: value })}
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
      <Text className="text-[#858585] text-lg ">Good with</Text>
      {/* select input */}
      <View className="border-2  border-[#C9C9C9] rounded-3xl">
        <RNPickerSelect
          onValueChange={(value) => setdata({ ...data.pet, goodWith: value })}
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
      <Text className="text-[#858585] text-lg ">Coat length</Text>
      {/* select input */}
      <View className="border-2  border-[#C9C9C9] rounded-3xl">
        <RNPickerSelect
          onValueChange={(value) => setdata({ ...data.pet, coatLength: value })}
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
      <Text className="text-[#858585] text-lg ">Expected adult size</Text>
      {/* select input */}
      <View className="border-2 p-2 border-[#C9C9C9] rounded-3xl">
        <RNPickerSelect
          onValueChange={(value) =>
            setdata({ ...data.pet, expectedAdultSize: value })
          }
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
      <Text className="text-[#858585] text-lg ">Health status</Text>
      {/* Toggle Button */}
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
            Male
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
            onPress={() => Setvue(true)}
            className={
              !vue
                ? "text-black text-2xl font-bold"
                : "text-white text-2xl  font-bold"
            }
          >
            Female
          </Text>
        </View>
      </View>
      <Text>Description</Text>
      <TextInput
        className="p-3 items-center justify-center border-2 border-[#C9C9C9] rounded-3xl "
        placeholder="   Enter Your Pet Age"
      />

      <Text className="text-[#858585] text-lg ">Age</Text>
      {/* Input place  */}
      <TextInput
        className=" p-3 items-center justify-center border-2 border-[#C9C9C9] rounded-3xl "
        placeholder="   Enter Your Pet Age"
      />
      <Text className="text-[#858585] text-lg ">Size</Text>
      <View className="border-2  border-[#C9C9C9] rounded-3xl">
        <RNPickerSelect
          onValueChange={(value) =>
            setdata({ ...data.pet, expectedAdultSize: value })
          }
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
      <Text className="text-[#858585] text-lg py-5 ">
        Region anima is located
      </Text>
      <TextInput
        className=" p-2 items-center justify-center border-2 border-[#C9C9C9] rounded-3xl "
        placeholder="   Enter Your Pet Age"
      />
    </View>
  );
};

export default SpecificInfo;
