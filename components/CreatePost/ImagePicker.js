import { View, Text } from "react-native";
import React from "react";

const ImagePicker = () => {
  return (
    <View>
      <BottomSheet
        isVisible={isBottomSheet}
        containerStyle={{ backgroundColor: "rgba(0.5, 0.50, 0, 0.50)" }}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          // onPress={() => setIsBottomSheet(false)}
          style={styles.bottomSheetStyle}
        >
          <Text
            style={{
              ...Fonts.blackColor19Medium,
              textAlign: "center",
              marginBottom: Sizes.fixPadding * 2.0,
            }}
          >
            Choose Option
          </Text>
          <TouchableOpacity
            onPress={() => {
              openCamera();
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="ios-camera" size={20} color="#4C4C4C" />
              <Text
                style={{
                  ...Fonts.blackColor17Medium,
                  marginLeft: Sizes.fixPadding,
                }}
              >
                Camera
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              showImagePicker();
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: Sizes.fixPadding * 2.0,
              }}
            >
              <MaterialIcons name="photo-album" size={20} color="#4C4C4C" />
              <Text
                style={{
                  ...Fonts.blackColor17Medium,
                  marginLeft: Sizes.fixPadding,
                }}
              >
                Upload from Gallery
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsBottomSheet(false);
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: Sizes.fixPadding * 2.0,
              }}
            >
              <MaterialIcons name="photo-album" size={20} color="#4C4C4C" />
              <Text
                style={{
                  ...Fonts.blackColor17Medium,
                  marginLeft: Sizes.fixPadding,
                }}
              >
                cancel
              </Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </BottomSheet>
    </View>
  );
};

export default ImagePicker;
