import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React ,{useState}from "react";
import axios from "axios";
import { FancyAlert } from "react-native-expo-fancy-alerts";

const Settings = ({userInfo, setLogged}) => {
  const [visible, setVisible] = useState(false);
 const [Delete,SetDelete] = useState(false)
  const toggleAlert = React.useCallback(() => {
     setVisible(!visible);
   }, [visible]);

  let DeleteAccount = () => {
    let token = localStorage.getItem("token");
    toggleAlert()
    if(Delete){
      axios
      .delete("https://dev-api.pet-net.com.au/api/v1/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setLogged(true);

      })
      .catch((err) => {
        // console.log("err", err);
      });
    }
  };
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
              <Text className="text-lg font-bold ">
                {" "}
                {userInfo.firstName} {userInfo.lastName}
              </Text>
            </View>
            <Text className="text-[#858585] justify-between text-lg px-2 py-3">
              Email Address <Text className="text-red-500">(Not Verifed)</Text>
            </Text>
            <View className="flex flex-row border-2 border-[#858585] p-2 rounded-3xl items-center justify-center text-lg">
              <Text>karim.benmbarek@cyberdivision.xyz </Text>
              <Text className="text-[#04AF2F]  text-sm"> Verify Now</Text>
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
          <Text
            className="text-[#E53935] font-bold underline p-2"
            onPress={DeleteAccount}
          >
            Delete this account
          </Text>
          <View>
            <View className="bg-[#04AF2F] color-white p-2 items-center justify-center rounded-lg ">
              <Text className="text-white text-2xl  font-bold ">Save</Text>
            </View>
          </View>
          <View className="py-10"></View>
          <View className="flex flex-row justify-center items-center">
               <FancyAlert
                visible={visible}
                icon={
                  <View
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "red",
                      borderRadius: 50,
                      width: "100%",
                    }}
                  >
                    <View className="absolute items-center justify-center left-6">
                      <Image
                        className=" right-4  w-10 h-12"
                        source={require("../../assets/Cat.png")}
                      />
                    </View>
                  </View>
                }
                style={{ backgroundColor: "white" }}
              >
                <Text style={{ marginTop: -16, marginBottom: 32 }}>
                  <Image
                    className="  w-5 h-5"
                    source={require("../../assets/exclamation-removebg-preview.png")}
                  />
                  Are you sure you want to Delete your Account ?
                </Text>
                <View className="flex flex-row justify-between  p-4 ">
                  <Text
                    className=" bg-red-500 text-white px-3 py-2 rounded-md font-bold text-xl ml-5"
                    onPress={()=>{
                      toggleAlert() ,
                      SetDelete(true)} }

                  >
                    Yes
                  </Text>
                  <Text
                    className=" bg-[#04AF2F] text-white px-4 py-2 rounded-md font-bold text-xl ml-5"
                    onPress={toggleAlert}
                  >
                    No
                  </Text>
                </View>
              </FancyAlert>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
