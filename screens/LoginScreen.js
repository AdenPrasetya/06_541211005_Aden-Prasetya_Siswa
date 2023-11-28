import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity
           
          >
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/sp.png")}
            style={{ width: 185, height: 220}}
          />
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-blue px-8 pt-8"
      >
        <View className="form space-y-2">
          <Text className="font-xl font-bold text-gray-700 ml-4">Email</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="email"
          />
          <Text className="font-xl font-bold text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            placeholder="password"
          />
        
          <TouchableOpacity
            onPress={() => navigation.navigate("Dashboard")}
            className="py-3 bg-red-400 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-gray-700">
              Masuk
            </Text>
          </TouchableOpacity>
        
          
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-red-500 font-semibold">
            Anda Belum Punya Akun?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text className="font-semibold text-blue-500"> Daftar Segera</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
