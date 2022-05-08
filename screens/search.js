import React,{useState} from 'react';
import {Text,View, StyleSheet, TextInput,Keyboard,TouchableWithoutFeedback, TouchableOpacity, FlatList} from 'react-native';


function Search() {
    const [name,setName] = useState(null);
    const [people,setPeople] = useState([
        {name:"john",last:'doe', key:"1"},
        {name:"ali",last:'asdf', key:"2"},
        {name:"Recep",last:'vcz',key:"3"},
        {name:"ramazan",last:'donome onee',key:"4"},
    ]);

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
    <View style={styles.container}>
        <View style={styles.searchForm}>
            <TextInput
            style={styles.input}
            maxLength={30}
            onChangeText={(val)=>setName(val)}
            />
            <TouchableOpacity style={styles.buttonContainer}  >
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.customersContainer}>
            <FlatList
            data={people}
            renderItem={({item}) =>(
                <View>
                    <TouchableOpacity>
                        <Text style={styles.item}>{item.name} {item.last}</Text>
                    </TouchableOpacity>
                </View>
            )}
            />

        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default Search
const styles = StyleSheet.create({
    buttonContainer:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:12,
        borderWidth:1,
        borderRadius:6,
        backgroundColor:"#1A7431",
        borderColor:"#4AD66D",
    
    },
    container:{
        flex:1,
        backgroundColor:"#B7EFC5",
    },
    customersContainer:{
        marginTop:18,
        alignItems:"center",
    },
    searchForm:{
        flexDirection:"row",
        marginHorizontal:12,
        marginTop:50,
    },
    input:{
        flex:3,
        padding:8,
        height:40,
        borderBottomWidth:2,
        fontSize:18,
        borderColor:"#4AD66D",
        borderRadius:5,
        textAlign:"center",

    },
    item:{
        flex:1,
        marginTop:18,
        marginHorizontal:10,
        padding:10,
        backgroundColor:"#2DC653",
        textAlign: "center",
        width:270,
        borderBottomRightRadius:1,
        borderColor:"#4AD66D",
        borderRadius:12,
    },
   


})



   