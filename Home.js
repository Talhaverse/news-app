import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default function Homepage(){
    return(
        <View style={styles.conatiner}>
            <Text>This is the homepage</Text>
        </View>
    );
}
 const styles = StyleSheet.create({
     conatiner: {
         flex:1,
         backgroundColor:'#fff',
         alignItems:'center',
         justifyContent:'center',
     }
 });
 