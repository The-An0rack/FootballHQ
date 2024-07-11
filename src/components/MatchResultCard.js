import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { fetchFixtures } from "../services/mockApi";

function MatchResultCard({ data }) {
  console.log(data)

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.teamLogo}
          source={{ uri: data.homeTeamLogo }}
        />
        <Text>{data.homeTeam}</Text>
      </View>
      <View style={styles.scoresheet}>
        <Text style={styles.leagueNameStyle}>{data.leagueName} </Text>
        <Text style={styles.leagueRoundStyle}> {data.leagueRound}</Text>
        <Text style={styles.goalCount}>{data.homeGoals} : {data.awayGoals}</Text>
        <Text>{data.date.substring(0,10)}</Text>
      </View>
      <View>
        <Image
          style={styles.teamLogo}
          source={{ uri: data.awayTeamLogo }}
        />
        <Text>{data.awayTeam}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 8,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16
  },
  teamLogo: {
    height: 50,
    width: 50,
  },
  scoresheet : {
    alignItems: "center"
  },
  goalCount: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default MatchResultCard;
