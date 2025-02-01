import React from "react";
import { StyleSheet, View } from "react-native";

const Ejercicio10 = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column', justifyContent: "flex-start" }}>
        <View style={styles.boxBlue}> </View>
      </View>

      <View style={{ flexDirection: 'column', justifyContent: "flex-start" }}>
        <View style={styles.boxOrange}> </View>
      </View>

      <View style={{ flexDirection: 'column', justifyContent: "flex-start" }}>
        <View style={styles.boxCeleste}> </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4caebd",
    flexDirection:'row',
    //justifyContent: "space-between",
    alignItems: 'center',
    justifyContent:'center'
  },

  boxBlue: {
    //flex:1,
    width: 100,
    height: 100,
    backgroundColor: "blue",
    borderWidth: 10,
    borderColor: "#ffffff",
  },

  boxOrange: {
    //flex:1,
    width: 100,
    height: 100,
    backgroundColor: "#f28824",
    borderWidth: 10,
    borderColor: "#ffffff",
    bottom:-50
  },

  boxCeleste: {
    //flex:1,
    width: 100,
    height: 100,
    backgroundColor: "#1de0dd",
    borderWidth: 10,
    borderColor: "#ffffff",
  },
});

export default Ejercicio10;
