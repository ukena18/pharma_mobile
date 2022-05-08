import React, {useState, useContext} from 'react';
import {Text,View, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import AuthContext from '../authContext/authContext';

  

function Login_page({navigation,route}) {
    let { loginUser} = useContext(AuthContext)
    const [email,setEmail] = useState(null)
    const  [password,setPassword] = useState(null)
    const submitHandler = () => {
        loginUser(email,password)
        // navigation.navigate("HomeStack")
    }
    return (
            <View style={styles.container}>
                <Text>Email :</Text>
                <TextInput
                style={styles.input}
                maxLength={30}
                onChangeText={(val)=>setEmail(val)}
                />
                <Text>password :</Text>
                <TextInput
                style={styles.input}
                maxLength={30}
                secureTextEntry={true}
                onChangeText={(val)=>setPassword(val)}
                />
            <TouchableOpacity style={styles.buttonContainer}  onPress={submitHandler} >
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
            
            </View>
    )
    }

export default Login_page


            


const styles= StyleSheet.create({
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
    container:{
        flex:1,
        
        backgroundColor:"#B7EFC5",
        alignItems:"center",
        justifyContent:"center",
    },
    input:{
        width:"75%",
        padding:8,
        height:40,
        borderBottomWidth:2,
        fontSize:18,
        borderColor:"#4AD66D",
        borderRadius:5,
        textAlign:"center",
        marginVertical:18,

    },
})