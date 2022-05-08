import React, {useState,useEffect} from 'react';
import {Text,View, StyleSheet,TouchableOpacity,FlatList } from 'react-native';



function Homepage({navigation}) {

    const [common_usage, setCommonUsage] = useState([])
    const [is_paid_False, setIsPaidFalse] = useState(null)
    const [is_paid_True, setIsPaidTrue] = useState(null)
    const [most_recent_orders, setMostRecentOrders] = useState([])
    const [past_due_order, setPastDueOrder] = useState([])
    const homepage_data = async () => {
        const response = await fetch("http://192.168.1.146:8000/api/homepage/",{
            method: "GET",
            headers: {
                "Content-Type":"application/json",
            },
            
        })
        const data = await response.json()
        if(response.status === 200){
            console.log(data)  
            setCommonUsage(data?.common_usage)  
            setIsPaidFalse(data?.is_paid_False)
            setIsPaidTrue(data?.is_paid_True)
            setMostRecentOrders(data?.most_recent_orders)
            setPastDueOrder(data?.past_due_order)
        }else{
            console.log("somethin went wrong status is not 200 ")
        }
    }
    useEffect(()=>{
        homepage_data()
        
    },[])

    const most_recent_orders_compononets = ({item})=>{
        return (
            <TouchableOpacity style={styles.listItemTouch}>
            <View style={styles.listItem} key={item.id}>
            
                <TouchableOpacity style={[styles.itemColumn,styles.smallShow]} onPress={()=>navigation.navigate("Profile")}>
                    <Text>{item.customer.id}</Text>
                </TouchableOpacity>
                <Text style={styles.itemColumn}>{item.customer.name} {item.customer.last}</Text>
                <Text style={styles.itemColumn}>{item.description}</Text>
                <Text style={[styles.itemColumn,styles.smallShow]}>{item.price} $</Text>               
            </View>
        </TouchableOpacity>
        )
    }
    const past_due_order_components = ({item})=>{
        return(
        <TouchableOpacity style={styles.listItemTouch}>
                    <View style={styles.listItem}>
                    
                        <TouchableOpacity style={[styles.itemColumn,styles.smallShow]}>
                            <Text>{item.customer.id}</Text>
                        </TouchableOpacity>
                        <Text style={styles.itemColumn}>{item.customer.name} {item.customer.last}</Text>
                        <Text style={styles.itemColumn}>{item.date_created}</Text>
                        <Text style={[styles.itemColumn,styles.smallShow]}>{item.price} $</Text>               
                    </View>
        </TouchableOpacity>)
    }
    const common_usage_components = ({item})=>{
        return(
            <TouchableOpacity style={styles.listItemTouch}>
            <View style={styles.listItem}>
            
                <TouchableOpacity style={[styles.itemColumn,styles.smallShow]}>
                    <Text>{item.id}</Text>
                </TouchableOpacity>
                <Text style={styles.itemColumn}>{item.name} {item.last}</Text>            
            </View>
        </TouchableOpacity>
        )
    }
    
  return (
   
    
    <View style={styles.container}>
        <View style={styles.moneyInfo}>
            <Text>{is_paid_False}$ unpaid </Text>
            <Text>{is_paid_True}$ paid </Text>
        </View>
        <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}> Most Recent Transaction</Text>
               <FlatList
               data = {most_recent_orders}
               keyExtractor={item => item.id}
                renderItem = {most_recent_orders_compononets}
               />
               
                
                
        </View>
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}> Past Due Transaction</Text>
            <FlatList
               data = {past_due_order}
               keyExtractor={item => item.id}
                renderItem = {past_due_order_components}
               />
            
        </View>
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}> Common Usage</Text>
            <FlatList
               data = {common_usage}
               keyExtractor={item => item.id}
                renderItem = {common_usage_components}
               />
        </View>
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
    sectionTitle:{
        padding:12,
        paddingLeft:24,
        fontSize:18,
        backgroundColor:"#92E6A7"
    },
    sectionContainer:{
        marginBottom:36,
        
    },
    container:{
        flex:1,
        backgroundColor:"#B7EFC5",
        // alignItems:"center",
        // justifyContent:"center",
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
    itemColumn:{
        flex:2,
        maxWidth:"100%",
        marginLeft:12,

    },
    smallShow:{
        flex:1,
    },
    item:{
        backgroundColor:"#2DC653",
        textAlign: "center",
        borderBottomRightRadius:1,
        borderColor:"#4AD66D",
        borderRadius:12,
    },
   
})