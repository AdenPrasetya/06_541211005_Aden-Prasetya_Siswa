import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";

import Spiderman from "../assets/images/spiderman.jpeg";
import fast from "../assets/images/fast-x.jpeg";
import Jjk from "../assets/images/jjk.jpeg";

const Movie = ({ navigation }) => {
  return (
    <View style={styles.popo}>
      <Image source={Spiderman} style={styles.gambar} />
      <Image source={fast} style={styles.gambar} />
      <Image source={Jjk} style={styles.gambar} />
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  popo: {
    flexDirection: "row",
    marginTop: 20,
    gap: 30,
  },

  gambar: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
});
