import {
  Text,
  ImageBackground,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

import BckImage from "../assets/images/pl.jpg";
import Navbar from "../component/navbar";
import { useNavigation } from "@react-navigation/native";

export default function Siswapage() {

	const navigation = useNavigation();

  
  

  

  

  const Eskul = [
	{eskul: 'Basket'},
	{eskul: 'Web tech'},
	{eskul: 'Cyber Security'},
	{eskul: 'Futsal'},
  ]

  return (
    <>
      <Navbar />
      <ImageBackground source={BckImage} style={styles.bck1}>
        <View style={styles.wraphalo}>
          <Text style={styles.halo}>Hai</Text>
          <Text style={styles.Welcome}>Silahkan Isi Biodata Anda</Text>
        </View>
        <View className="flex justify-center">
          <View>
            <TextInput
              style={styles.input} placeholder="Nis"
            />
            <TextInput
              style={styles.input} placeholder="Nama"
            />
            <TextInput
              style={styles.input} placeholder="Gender"
            />
            <TextInput
              style={styles.input} placeholder="Tgllahir"
            />
            <TextInput
              style={styles.input} placeholder="Kelas"
            />
            <TouchableOpacity
			onPress={() => navigation.navigate("Dashboard")}
			>
              <Text style={styles.daftar2}>
                Kirim
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  wraphalo: {
    marginTop: 30,
    marginLeft: 20,
  },

  halo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
  },

  Welcome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },

  bck1: {
    flex: 1,
    resizeMode: "cover",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
    color: "black",
	marginTop:30
  },

  daftar2:{
	color: 'black',
	backgroundColor: "red", 
	width:100, 
	height:30,
	textAlign: 'center',
	borderRadius: 5, 
	marginLeft: 130, 
	paddingTop:5, 
	marginTop:20
  }
});
