import {
  Text,
  StyleSheet,
  View,
  Image,
  Select,
  SelectItem,
} from "react-native";



const navbar = () => {
  return (
    <>
      <View style={styles.navbar12}>
    
        
      </View>
    </>
  );
};

export default navbar;

const styles = StyleSheet.create({
  navbar12: {
    marginTop: 40,
    width: 360,
    height: 60,
    flexDirection: "row",
    backgroundColor: "ffffff",
  },

  avatar12: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginTop: 5,
  },

  username: {
    marginTop: 20,
    color: "white",
    marginLeft:180,
  },
});
