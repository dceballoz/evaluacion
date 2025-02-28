import React from "react";
import { StyleSheet, View } from "react-native";

const Ejercicio8 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxBlue}></View>
      <View style={styles.boxOrange}></View>
      <View style={styles.boxCeleste}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4caebd",
    justifyContent: "center",
    alignItems:'center',

  },

  boxBlue: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    borderWidth: 10,
    borderColor: "#ffffff",
  },

  boxOrange: {
    
    width: 100,
    height: 100,
    backgroundColor: "#f28824",
    borderWidth: 10,
    borderColor: "#ffffff",
    right:'-100'
  },

  boxCeleste: {
   
    width: 100,
    height: 100,
    backgroundColor: "#1de0dd",
    borderWidth: 10,
    borderColor: "#ffffff",
   
  },
});

export default Ejercicio8;
