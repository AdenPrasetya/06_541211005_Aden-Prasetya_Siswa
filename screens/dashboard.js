import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Navbar from "../component/navbar";
import Animation12 from "../assets/images/op.png";
import BckImage from "../assets/images/pl.jpg";
import Mapelimage from "../assets/images/haa.png"; 
import Aktiv from "../assets/images/pop.png"

const Home = ({ navigation }) => {
  const dataSiswa = [
	{ gambar: (Animation12), text: "Klik Saya" },
	{ gambar: (Mapelimage), text: "Klik Saya" },
	{ gambar: (Aktiv), text: "Klik Saya" },
];

  return (
    <>
      <Navbar />
      <View className="flex-1">
        <ImageBackground source={BckImage} style={styles.bck1}>
          <View style={styles.wraphalo}>
            <Text style={styles.halo}>Haii</Text>
            <Text style={styles.Welcome}>Siswa & Siswi SMK TELKOM PWT</Text>
          </View>

          {dataSiswa.map((post) => {
            return(
            <View style={styles.containerextra}>
              <Image source={post.gambar} style={styles.animation1} />
              <TouchableOpacity
                style={styles.wrapeskul}
                onPress={() => navigation.navigate("eskul")}
              >
                <Text style={styles.eskul}>{post.text}</Text>
              </TouchableOpacity>
            </View>
			)
          })}
        </ImageBackground>
      </View>
    </>
  );
};

export default Home;

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

  containerextra: {
    width: 300,
    height: 150,
    backgroundColor: "grey",
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 20,
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    flexDirection: "row",
  },

  animation1: {
    marginLeft: 20,
    marginTop: 5,
    width: 140,
    height: 140,
    resizeMode: "stretch",
  },
  wrapeskul: {
    width: 100,
    height: 50,
    borderRadius: 5,
    marginTop: 50,
    backgroundColor: "red",
  },

  eskul: {
    textAlign: "center",
    marginTop: 12,
    fontWeight: "bold",
    color: "black",
  },

  bck1: {
    flex: 1,
    resizeMode: "cover",
  },
});
