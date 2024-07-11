import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

const DataCard = ({data, label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.dataText}>{data}</Text>
      <Text style={styles.labelText}>{label}</Text>
    </View>
  )
}

export default DataCard

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 110,
        borderRadius: 16,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    dataText: {
        color: Colors.primary500,
        fontSize: 30,
        fontWeight:"bold"
    },
    labelText: {
        color: Colors.primary500,
        fontSize: 18,
    }
})