import React from 'react';
import { StyleSheet, View } from 'react-native';

const Ejercicio4 = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection:'row', justifyContent:'flex-end'}}><View style={styles.boxBlue}> </View></View>
            
                
           <View><View style={styles.boxOrange}>
                
                </View></View>
            
                <View style={{ flexDirection:'row', justifyContent:'center'}}><View style={styles.boxCeleste}> </View></View>

        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
       
        flex: 1,
        backgroundColor: '#4caebd',
        //alignItems: 'center',
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
        
        width: 100,
        height: 100,
        backgroundColor: '#1de0dd',
        borderWidth: 10,
        borderColor: '#ffffff',
        
    }
});

export default Ejercicio4;