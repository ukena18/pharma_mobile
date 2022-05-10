import React, {useState,useEffect, useContext} from 'react';
import {Text,View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import AuthContext from '../authContext/authContext';

function Person_add({navigation}) {
    const [name,setName] = useState(null)
    const [last,setLast] = useState(null)
    const [description,setDescription] = useState(null)
    const [price,setPrice] = useState(null)
    //  check if user logged in fro this screen
    let {user} = useContext(AuthContext)
    let checkUser =async ()=>{
        if (!user){
            navigation.navigate("Login_page")
        }
    }
    const AddUser = async () => {
        const response = await fetch("http://192.168.1.146:8000/api/person_add/",{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                "name":name,
                "last":last,
                "description":description,
                "price":price,
            })
        })
        const data = await response.json()
        if(response.status === 200){
            console.log(data)
            navigation.navigate("Profile",{
                pk: data.id,
            })  
        }else{
            console.log("somethin went wrong status is not 200 ")
        }
    }


    useEffect(()=>{
        checkUser()
    },[])
   
    return (          
            <View style={styles.container}>
                <Text style={styles.label}>Name :</Text>
                <TextInput
                
                style={styles.input}
                maxLength={30}
                onChangeText={(val)=>setName(val)}
                />
                <Text style={styles.label}>Last :</Text>
                <TextInput
                style={styles.input}
                maxLength={30}
                onChangeText={(val)=>setLast(val)}
                />
                <Text style={styles.label}>Description :</Text>
                <TextInput
                style={styles.input}
                maxLength={50}
                onChangeText={(val)=>setDescription(val)}
                />
                <Text style={styles.label}>Price :</Text>
                <TextInput
                style={styles.input}
                maxLength={30}
                onChangeText={(val)=>setPrice(val)}
                />    
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>AddUser()}  >
                <Text style={styles.buttonText}>Person Add</Text>
            </TouchableOpacity>
            </View>
    
    )
    }

export default Person_add


const styles= StyleSheet.create({
    container:{
        flex:3,
        backgroundColor:"#B7EFC5",
        alignItems:"center",
        justifyContent:"center",
    },
    input:{
        width:300,
        padding:8,
        marginBottom:24,
        height:40,
        borderBottomWidth:2,
        fontSize:18,
        borderColor:"#4AD66D",
        borderRadius:5,
        textAlign:"center",

    },
    label:{
        marginTop:42,
    },
    buttonContainer:{
        justifyContent:"center",
        alignItems:"center",
        marginLeft:12,
        borderWidth:1,
        width:"25%",
        height:"5%",
        borderRadius:6,
        backgroundColor:"#1A7431",
        borderColor:"#4AD66D",
    },

})