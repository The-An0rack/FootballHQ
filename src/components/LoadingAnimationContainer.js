import { View, Image, StyleSheet } from "react-native";

function LoadingAnimationContainer() {
  return (
    <View style= {styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/gif/loading_animation.gif")}
        borderRadius={12}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16
    },
    image: { 
        height: 200, 
        width: 200, 
        borderRadius: 16,
        resizeMode: "cover"
    }
});

export default LoadingAnimationContainer;
