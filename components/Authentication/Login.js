import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { FancyAlert } from "react-native-expo-fancy-alerts";

import "localstorage-polyfill";

const Login = ({ route, navigation }) => {
  const [wrong, setwrong] = useState(false);
  const [visible, setVisible] = useState(false);

  const [data, setdata] = useState({
    password: String,
    email: String,
  });
  const toggleAlert = React.useCallback(() => {
    setVisible(!visible);
  }, [visible]);
  let setLogged = route.params.setLogged;

  const Login = () => {
    axios
      .post("https://dev-api.pet-net.com.au/api/v1/auth/sign-in", data)
      .then((res) => {
        console.log('res.status',res.status);
        if (res.status !== 200) {
        }
        localStorage.setItem("token", res.data.accessToken);
        setLogged(true);
        setwrong(false);
       
      })
      .catch(err=>{
      
          toggleAlert();

                
      })
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="py-10 px-5">
          <Text className="text-2xl font-bold">Login to your Account</Text>
          <Text className="text-[#858585] text-lg py-3 ">
            We make it easy for people to adopt and rehome
            <Text>pets all around Australia </Text>
          </Text>

          <Text className="text-lg  py-5">Email Address</Text>
          <TextInput
            className="p-3 items-center justify-center border-2 border-[#C9C9C9]  rounded-3xl "
            placeholder="Enter Your Address"
            type="email"
            value={data.email}
            onChangeText={(text) => {
              setdata({ ...data, email: text });
            }}
          />
          <Text className="text-lg  py-5">Password</Text>
          <TextInput
            secureTextEntry={true}
            className="p-3 items-center justify-center border-2 border-[#C9C9C9]  rounded-3xl "
            placeholder="Enter Your Password"
            value={data.password}
            onChangeText={(text) => {
              setdata({ ...data, password: text });
            }}
          />
          <View className=" py-7">
            <View className="bg-[#04AF2F] color-white p-2 items-center justify-center rounded-full ">
              <TouchableOpacity>
                <Text
                  className="text-white text-2xl  font-bold"
                  onPress={Login}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
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
                  Wrong password or E-mail
                </Text>
                <View className="flex flex-row justify-between p-6 ">
                  <Text
                    className=" bg-red-500 text-white py-2 px-5 rounded-md font-bold text-xl"
                    onPress={toggleAlert}
                  >
                    ok
                  </Text>
                </View>
              </FancyAlert>
            </View>
          </View>

          <View className="flex flex-row justify-center ">
            <Text className="text-[#858585] justify-between text-l">
              You don't have an account ?
              <Text
                className="text-[#04AF2F] font-bold"
                onPress={() => navigation.navigate("SignUpFirstStep")}
              >
                {" "}
                Create account{" "}
              </Text>
            </Text>
          </View>
          <View className="flex flex-wrap justify-center items-center ">
            <Text className="text-[#858585] text-l">
              {" "}
              Signup to Petnet means you agree to our{" "}
              <Text className="text-[#04AF2F]  text-lg"> privacy </Text>
            </Text>
          </View>
          <View className="flex flex-row justify-center">
            <Text>
              <Text className="text-[#04AF2F] underline font-bold ">
                polity{" "}
              </Text>
              <Text className="text-[#858585] "> and </Text>
              <Text className="text-[#04AF2F] font-bold underline ">
                Terms of services
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
