import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Dimensions} from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Form({addItem}) {

    const [value, setText]= useState('');

    const onChange = text => setText(text);

    const func= (value)=>{
        addItem(value)
        setText('')
    }
    return (

        <View style={styles.container}>

            <TextInput
                style={styles.inputBox}
                onChangeText={onChange}
                value={value}
                placeholder='Add Text Here'
            />
            <View style={styles.btns}>
            <TouchableOpacity style={styles.btn} onPress={()=> func(value)}>
                <Text style={styles.btnText}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ClearBtn} onPress={()=> setText('')
            } >
                <Text style={styles.btnText}>Clear</Text>
            </TouchableOpacity>
            </View>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e6e6e6',
        backgroundColor: '#e6e6e6',
        // borderRadius: 5,
        paddingVertical: 30,
        width: width -15,
        marginBottom: 30

    },
    inputBox:{
        width: width -50,
        borderRadius: 5,
        height: 40,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        marginBottom: 20,
        textAlign: 'center',
        backgroundColor: '#f2f2f2',
    },
    btn:{
        borderWidth: 1,
        padding:6,
        width: '45%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#00b300',
        borderColor: '#00b300'
    },
    ClearBtn:{
        borderWidth: 1,
        padding:6,
        width: '45%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#cc3300',
        borderColor: '#cc3300',
        marginLeft: 15
    },

    btnText:{
        color: '#fff',
        fontWeight: 'bold',
    },

    btns:{
        flexDirection: 'row',
    }

});
