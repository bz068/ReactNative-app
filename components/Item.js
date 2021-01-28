import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Dimensions} from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default function Item({item, removeItem}) {
    
    return (

        <TouchableOpacity style={styles.container}>
            <Text style={styles.itemText}>{item.title}</Text>
            <TouchableOpacity style={styles.closeBtn} onPress={()=> removeItem(item.id)}>
            <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
        </TouchableOpacity>


    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#e6e6e6',
        backgroundColor: '#e6e6e6',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20
    },

    itemText: {
        color: '#000',
        fontSize: 20,
        textTransform: 'capitalize',
    },
    closeBtn:{
        backgroundColor: '#cc3300',
        height: '100%',
        width: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeText:{
        color:'#fffd',
        fontSize: 20,
        fontWeight: 'bold',
    }


});
