import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

// subscribe for more videos like this :)
export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
           
          >
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/upp.png")}
            style={{ width: 0, height: 45}}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-black px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="font-xl font-bold text-gray-700 ml-4">Nama</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Nama Anda"
          />
          <Text className="font-xl font-bold text-gray-700 ml-4">Email </Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Masukan 
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            Email"
          />
          <Text className="font-xl font-bold text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
            placeholder="Masukan Password"
          />
          <TouchableOpacity className="py-3 bg-red-400 rounded-xl">
            <Text className="font-xl font-bold text-center text-gray-700">
              Daftar
            </Text>
          </TouchableOpacity>
        </View>
        
        <View className="flex-row justify-center space-x-12">
          
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-blue-500 font-semibold">
            Anda Sudah Memiliki Akun?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="font-semibold text-red-500"> Masuk Saja</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
