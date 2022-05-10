import React, {useState,useContext,useEffect} from 'react';
import {Text, StyleSheet, TextInput,Modal,View, TouchableOpacity} from 'react-native';
import ModalContext from '../authContext/modalContext';

function Name_change({name,last,parent_id,pk}) {
    let {modalVisible, change_visiblity} = useContext(ModalContext)
    const [form_name,setFormName] = useState(null)
    const [form_last,setFormLast] = useState(null)
    const [form_parentId,setFormParentId] = useState(null)
    const [isLoaded,setIsLoaded] = useState(false)

    const name_change_api = async () => {
        const response = await fetch(`http://192.168.1.146:8000/api/name_change/`,{
            method:'POST',
            headers:{
                    "Content-Type": "application/json",
                   
                },
            body: JSON.stringify({"name":form_name,"last":form_last,"parent_id":form_parentId,"pk":pk})
        })
        const data = await response.json()
        if(response.status === 200){
            change_visiblity()
            
            
        }else{
            console.log("somethin went wrong status is not 200 ")
        }
    }    
    
    useEffect(()=>{
        setFormName(name)
        setFormLast(last)
        if (parent_id>1){
            setFormParentId(parent_id)
        }
        setIsLoaded(true)
        
    },[])
    return ( <View>
            {isLoaded && <Modal 
            visible={modalVisible}
            animationType="fade"
            >
                <View style={styles.container}>
                <Text style={styles.label}>Name :</Text>
                <TextInput
                value={form_name}
                style={styles.input}
                maxLength={30}
                onChangeText={(val)=>setFormName(val)}
                />
                <Text style={styles.label}>Last :</Text>
                <TextInput
                value={form_last}
                style={styles.input}
                maxLength={30}
                onChangeText={(val)=>setFormLast(val)}
                />
                <Text style={styles.label}>PArent id :</Text>
                <TextInput
                value={form_parentId}
                style={styles.input}
                maxLength={50}
                onChangeText={(val)=>setFormParentId(val)}
                />
            <TouchableOpacity style={styles.buttonContainer}  onPress={name_change_api} >
                <Text style={styles.buttonText}>NAme Change</Text>
            </TouchableOpacity>
            </View>
            </Modal>}
            </View>      
    
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