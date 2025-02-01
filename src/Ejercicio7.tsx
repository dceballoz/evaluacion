import React from "react";
import { StyleSheet, View } from "react-native";

const Ejercicio7 = () => {
  return (
    <View style={styles.container}>

        <View style={styles.boxBlue}> </View>
 

        <View style={styles.boxOrange}> </View>
     

        <View style={styles.boxCeleste}> </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4caebd",
    flexDirection:'column',
    //justifyContent: "space-between",
    //alignItems: 'center',
    //justifyContent:'center'
  },

  boxBlue: {
    flex:1,
    width: 'auto',
    height: 100,
    backgroundColor: "blue",
    borderWidth: 10,
    borderColor: "#ffffff",
    
  },

  boxOrange: {
    flex:1,
    width: 'auto',
    height: 100,
    backgroundColor: "#f28824",
    borderWidth: 10,
    borderColor: "#ffffff",
  },

  boxCeleste: {
    flex:2,
    width: 'auto',
    height: 100,
    backgroundColor: "#1de0dd",
    borderWidth: 10,
    borderColor: "#ffffff",
  },
});

export default Ejercicio7;