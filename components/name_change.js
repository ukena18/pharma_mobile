import React, {useState,useContext} from 'react';
import {Text, StyleSheet, TextInput,Modal,View, TouchableOpacity} from 'react-native';
import ModalContext from '../authContext/modalContext';

function Name_change() {
    let {modalVisible, change_visiblity} = useContext(ModalContext)
    const [name,setName] = useState(null)
    const [last,setLast] = useState(null)
    const [parentId,setParentId] = useState(null)
    const submitHandler = () => {
    }
    return (          
            <Modal 
            visible={modalVisible}
            animationType="fade"
            >
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
                <Text style={styles.label}>PArent id :</Text>
                <TextInput
                style={styles.input}
                maxLength={50}
                onChangeText={(val)=>setParentId(val)}
                />
            <TouchableOpacity style={styles.buttonContainer}  onPress={change_visiblity} >
                <Text style={styles.buttonText}>NAme Change</Text>
            </TouchableOpacity>
            </View>
            </Modal>
    
    )
    }

export default Name_change


const styles= StyleSheet.create({
    container:{
        flex:1,
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