import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Carousel from "../Carousel";

const Listings = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log(token);
    axios
      .get(
        " https://dev-api.pet-net.com.au/api/v1/posts?pageNumber=1&pageSize=20",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.posts);
        setPosts(res.data.posts);
      });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView  >
        {posts.map((elem, i) => (
          <>
            <View className="w-[380px]  h-[260px] shadow-black  shadow-sm rounded-xl ">
              <FlatList
                className="flex flex-row w-[380px] scroll-px-2 "
                horizontal
                showsHorizontalScrollIndicator={true}
                data={elem.images}
                renderItem={({ item }) => (
                  <View className="w-[380px] h-[200px] ">
                    <Image
                      source={{ uri: item.url }}
                      className="w-full h-full rounded-t-xl"
                    />
                  </View>
                )}
              />
              <View className="p-5">
                <View className="flex-row flex justify-between">
                  <Text className="text-[#50555C]">
                    {elem.postedBy.firstName}
                  </Text>
                  <Text className="text-[#04B531] items-center justify-content font-bold">
                    <Text> $ </Text>
                    {elem.price}
                  </Text>
                </View>
                <Text>{elem.pet.breed}</Text>

                <Text className="justify-center items-center">
                  <Image
                    className="absolute items-center  right-4 "
                    source={require("../../assets/Location.png")}
                  />
                  <Text>{elem.location.state}</Text> /{elem.location.suburb}
                </Text>
              </View>
            </View>
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Listings;
