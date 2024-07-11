import {View, Text, SafeAreaView, StyleSheet, StatusBar} from "react-native";

import MatchesAndResults from "./src/screens/MatchesAndResults/MatchesAndResults";
import PlayerStats from "./src/__mock__/api/playerStats";
import PlayerStatusScreen from "./src/screens/PlayerStatsScreen/PlayerStatsScreen";

function App() {
  return (
  <SafeAreaView style={styles.container}>
    <PlayerStatusScreen />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // 3xpaddingTop: StatusBar.currentHeight,
  }
})

export default App;