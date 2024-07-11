import {View, Text, SafeAreaView, StyleSheet, StatusBar} from "react-native";

import MatchesAndResults from "./src/screens/MatchesAndResults/MatchesAndResults";

function App() {
  return (
  <SafeAreaView style={styles.container}>
    <MatchesAndResults />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // 3xpaddingTop: StatusBar.currentHeight,
  }
})

export default App;