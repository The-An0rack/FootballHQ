import {View, Text, StyleSheet, Image, Dimensions} from "react-native";
import Colors from "../../constants/colors";
import { useState, useEffect } from "react";
import { fetchPlayerStats } from "../../services/mockApi";
import preprocessPlayerStats from "../../services/preprocessing/preprocessPlayerStats";
import DataCard from "../../components/DataCard";

function PlayerStatsScreen() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const getFixtures = async () => {
        const playerStats = await fetchPlayerStats();
        const processedData = preprocessPlayerStats(playerStats);
        setData(processedData);
        setIsLoading(false);
      };
  
      getFixtures();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.heroArea}>
                <View>
                    <Text style={styles.fname}>{data.fName}</Text>
                    <Text style={styles.lname}>{data.lName}</Text>
                </View>
                <View>
                    <Image style={styles.playerPhoto} source={{uri: data.photo}} />
                </View>
            </View>
            <View style={styles.contentArea}>
                <View style={styles.dataRow}>
                    <DataCard data={data.age} label="Age" />
                    <DataCard data={data.height} label="Height" />
                    <DataCard data={data.weight} label="Weight" />
                </View>
            </View>
        </View>
    );
}

export default PlayerStatsScreen;

const styles = StyleSheet.create({
    container: {
        
    },
    heroArea: {
        paddingHorizontal: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        height: Dimensions.get("screen").height * 0.25,
    },
    fname: {
        fontSize: 40,
        fontWeight: "bold"
    },
    lname: {
        fontSize: 18,
        fontWeight: "bold"
    },
    playerPhoto: {
        height: 150,
        width: 150
    },
    contentArea: {
        height: "100%",
        backgroundColor: Colors.accent500,
        paddingTop: "10%",
        paddingHorizontal: "2%",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32
    },
    dataRow: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
});