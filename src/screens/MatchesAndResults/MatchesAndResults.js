import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import { fetchFixtures } from "../../services/mockApi";
import { useEffect, useState } from "react";

import MatchResultCard from "../../components/MatchResultCard";
import HeroArea from "../../components/HeroArea";
import Colors from "../../constants/colors";
import LoadingAnimationContainer from "../../components/LoadingAnimationContainer";
import Images from "../../assets/img/index";
import preprocessFixturesData from "../../services/preprocessing/preprocessFixtures";

function MatchesAndResults() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFixtures = async () => {
      const fixturesData = await fetchFixtures();
      const processedData = preprocessFixturesData(fixturesData);
      setData(processedData);
      setIsLoading(false);
    };

    getFixtures();
  }, []);

  return (
    <View style={styles.container}>
      <HeroArea title="Matches & Results" />
      <View style={styles.contentContainer}>
        {/* <LoadingAnimationContainer /> */}
        <ImageBackground 
          source={require("../../assets/img/bg_img.jpg")}
          style={styles.contentContainer}
          imageStyle={{opacity: 0.15}} >
        {isLoading ? (
          <LoadingAnimationContainer />
        ) : (
          <FlatList 
            data={data}
            contentContainerStyle={{alignItems: "center"}}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <MatchResultCard data={item.item} />}
          />
        )}
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height
  },
  contentContainer: {
    backgroundColor: Colors.accent500,
    height: "100%",
    width:"100%",
    alignItems: "center",
    justifyContent: "center"
  },
});

export default MatchesAndResults;
