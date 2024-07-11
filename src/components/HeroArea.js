import {View, Text, StyleSheet, ImageBackground, Line, Dimensions} from "react-native";
import Colors from "../constants/colors";

function HeroArea({title}) {
    return (
        <View style={styles.container}>
            <ImageBackground 
                style={styles.imageContainer}
                imageStyle={styles.backgroundImage}
                source={require("../assets/img/background_img.jpg")}
                resizeMode="cover" >
                <Text style={styles.heading}>{title}</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary500,
        height: Dimensions.get("screen").height * 0.25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        overflow: "hidden"
        
    },  
    backgroundImage: {
        opacity: 0.55,
        
    }, 
    heading: {
        textAlign: "justify",
        margin: 16,
        color: "white",
        fontSize: 36,
        fontWeight: "bold"
    }
});

export default HeroArea;