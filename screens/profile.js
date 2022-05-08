import React, {useState, useContext} from 'react';
import {Text,View, StyleSheet,TouchableOpacity, Modal } from 'react-native';
import Name_change from '../components/name_change';
import History_modal from '../components/tra_history';

import ModalContext from '../authContext/modalContext';


function Profile({navigation}) {
    let { change_visiblity, change_visiblity_history} = useContext(ModalContext);
    

  return (
   
    <View style={styles.container}>
        <View style={styles.topOptions}> 
            <View style={styles.customerInfo}>
                <Text style={styles.infoText}>123124</Text>
                <Text style={styles.infoText}>Azra Zelal</Text>
                <Text style={styles.infoText}>PArent: <TouchableOpacity >
                                <Text style={styles.infoText}>124124</Text>
                </TouchableOpacity>
                
                </Text>
            </View>
            <View> 
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate("Order_add")}>
                                <Text>Add order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={change_visiblity}>
                                <Text>Name Change</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Name_change />
        <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}> Most Recent Transaction</Text>

                <TouchableOpacity style={styles.listItemTouch}>
                    <View style={styles.listItem}>
                    
                        <TouchableOpacity style={[styles.itemColumn,styles.smallShow]}>
                            <Text>123124</Text>
                        </TouchableOpacity>
                        <Text style={styles.itemColumn}>Ruken Turgut aise</Text>
                        <Text style={styles.itemColumn}>Description</Text>
                        <Text style={[styles.itemColumn,styles.smallShow]}>23 $</Text>               
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItemTouch}>
                    <View style={styles.listItem}>
                        <TouchableOpacity style={[styles.itemColumn,styles.smallShow]}>
                            <Text>123124</Text>
                        </TouchableOpacity>
                        <Text style={styles.itemColumn}>Ruken Turgut aise</Text>
                        <Text style={styles.itemColumn}>Description</Text>
                        <Text style={[styles.itemColumn,styles.smallShow]}>23 $</Text>               
                    </View>
                </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>All Dependents</Text>
            <TouchableOpacity style={styles.listItemTouch}>
                    <View style={styles.listItem}>
                    
                        <TouchableOpacity style={[styles.itemColumn,styles.smallShow]}>
                            <Text>123124</Text>
                        </TouchableOpacity>
                        <Text style={styles.itemColumn}>Ruken Turgut aise</Text>
                
                        <Text style={[styles.itemColumn,styles.smallShow]}>23 $</Text>               
                    </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItemTouch}>
                    <View style={styles.listItem}>
                    
                        <TouchableOpacity style={[styles.itemColumn,styles.smallShow]}>
                            <Text>123124</Text>
                        </TouchableOpacity>
                        <Text style={styles.itemColumn}>Ruken Turgut aise</Text>
                        <Text style={[styles.itemColumn,styles.smallShow]}>23 $</Text>               
                    </View>
            </TouchableOpacity>
        </View>
        <View style={styles.moneyInfo}>
            <Text>Total amount:</Text>
            <Text>54.78$ </Text>
        </View>
        <TouchableOpacity style={[styles.buttonContainer,styles.transactionButton]}  onPress={change_visiblity_history}>
                <Text>Transaction History</Text>
        </TouchableOpacity>
        <History_modal/>
    </View>
 
  )
}

export default Profile

const styles = StyleSheet.create({
    buttonContainer:{
        marginBottom:12,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:12,
        borderWidth:1,
        width:120,
        height:40,
        borderRadius:6,
        backgroundColor:"#1A7431",
        borderColor:"#4AD66D",
    },
    container:{
        flex:1,
        backgroundColor:"#B7EFC5",
        // alignItems:"center",
        // justifyContent:"center",
    },
    customerInfo:{
        // marginTop:30,
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
   
    topOptions:{
        marginTop:40,
        marginBottom:20,
        justifyContent:"space-around",
        flexDirection:"row",
        
    },
    transactionButton:{
            alignSelf:"center",
            marginTop:20,
            width:200,
            height:60,
    },
    moneyInfo:{
        backgroundColor:"#2DC653",
        marginTop:24,
        padding:24,
        flexDirection:"row",
        justifyContent:"space-between",
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