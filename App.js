import {StatusBar} from 'expo-status-bar';
import React, { useState} from 'react';
import {StyleSheet, Text, View,FlatList, SafeAreaView, Alert, ScrollView, Dimensions} from 'react-native';
import Form from "./components/Form";
import Item from "./components/Item";


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function App() {
    const [items, setItems] = useState([
        {id: 1, title: 'Task 1'},
        {id: 3, title: 'Task 2'},
        {id: 2, title: 'Task 3'},
        {id: 4, title: 'Task 4'},
        {id: 5, title: 'Task 5'},


    ]);

    const randomNumber = Math.floor(Math.random() * 10000000);


    const removeItem = (id) =>{
        setItems(prevItems =>{
            return prevItems.filter(item => item.id != id);

        });
    }

    const addItem = text => {
        if(!text){
            Alert.alert("Error", "Please Add Text")
        }else{
        setItems(prevItems => {
            return [{id: randomNumber,title: text}, ...prevItems];

        });
    }}

    return (
        <SafeAreaView style={styles.safeView}>
            <Text style={styles.safeViewText}> Welcome</Text>


            <View style={styles.container}>
                <Form addItem={addItem}/>
                <ScrollView style={styles.scroll}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps='handled'>
                <FlatList
                keyExtractor={(item, index) => index.toString()}
                    data={items}
                    renderItem={({item}) => <Item key={item.id} item={item} removeItem={removeItem}/>}
                />
            </ScrollView>
            </View>

        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    safeView: {
        backgroundColor: '#3399ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeViewText: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
        marginTop: 40,
        marginBottom: 20,
        color: '#ffffff',
    },
    container:{
        width: width,
        height: '100%',
        backgroundColor: '#ffff',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',



    },
    mainText:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 30,
        textTransform: 'capitalize',
        marginVertical: 10,
        fontFamily: 'Verdana',
        

    },
    scroll:{
        width: '100%',
    }
});
