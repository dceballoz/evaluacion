import React from 'react';
import { StyleSheet, View } from 'react-native';

const Ejercicio3 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxBlue}>
                
            </View>
            <View style={styles.boxOrange}>
                
                </View>
                <View style={styles.boxCeleste}></View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
       
        flex: 1,
        backgroundColor: '#4caebd',
        justifyContent:'center'
        
       
    },

    boxBlue: {
       width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderWidth: 10,
        borderColor: '#ffffff',
        
    },

    boxOrange: {
        //flex:1,
        width: 100,
        height: 100,
        backgroundColor: '#f28824',
        borderWidth: 10,
        borderColor: '#ffffff',
        
    },

    boxCeleste: {
        //flex:1,
        flexDirection: 'row',
    
     height: 100,
        backgroundColor: '#1de0dd',
        borderWidth: 10,
        borderColor: '#ffffff',
        alignSelf: 'stretch', 
        width: 'auto'
        
    }
});

export default Ejercicio3;