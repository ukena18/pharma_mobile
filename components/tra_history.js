import React, {useState,useContext} from 'react';
import {Text, StyleSheet, FlatList,Modal,View, TouchableOpacity} from 'react-native';
import ModalContext from '../authContext/modalContext';

const transaction_history = ({item})=>{
    return (
        <TouchableOpacity style={styles.listItemTouch}>
        <View style={styles.listItem} key={item.id}>
        
            <TouchableOpacity style={[styles.itemColumn,styles.smallShow]} onPress={()=>navigation.navigate("Profile")}>
                <Text>{item.customer.id}</Text>
            </TouchableOpacity>
            <Text style={styles.itemColumn}>{item.date_created} </Text>
            <Text style={styles.itemColumn}>{item.customer.name} {item.customer.last}</Text>
            <Text style={[styles.itemColumn,styles.smallShow]}>{item.price} $</Text>               
        </View>
    </TouchableOpacity>
    )
}

function History_modal({orders}) {
    let {historyVisible, change_visiblity_history} = useContext(ModalContext)
    const [name,setName] = useState(null)
    const [last,setLast] = useState(null)
    const [parentId,setParentId] = useState(null)
    const submitHandler = () => {
    }
    return (          
            <Modal 
            visible={historyVisible}
            animationType="fade"
            >
            <View style={styles.container}>
                
            <Text style={styles.sectionTitle}>All Transactions</Text>
            <FlatList
                data = {orders}
                keyExtractor={item => item.id}
                renderItem = {transaction_history}
                />
            <TouchableOpacity style={styles.buttonContainer}  onPress={change_visiblity_history}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
            </View>
            </Modal>
    
    )
    }

export default History_modal


const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#B7EFC5",
        
        // alignItems:"center",
        // justifyContent:"center",
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
    sectionTitle:{
        padding:12,
        paddingLeft:24,
        fontSize:18,
        backgroundColor:"#92E6A7"
    },
    sectionContainer:{
        marginBottom:36,
    },
    listItem:{
        flexDirection:"row",
        marginTop:12,
        justifyContent:"space-between",
        backgroundColor:"#2DC653",
        borderBottomRightRadius:1,
        borderColor:"#4AD66D",
        borderRadius:12,
    },
    infoText:{
        marginTop:5,
        fontSize:18
    },
    itemColumn:{
        flex:2,
        maxWidth:"100%",
        marginLeft:12,

    },
    item:{
        backgroundColor:"#2DC653",
        textAlign: "center",
        borderBottomRightRadius:1,
        borderColor:"#4AD66D",
        borderRadius:12,
    },
    
    smallShow:{
        flex:1,
    },
   

})