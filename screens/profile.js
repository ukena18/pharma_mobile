import React, {useState, useEffect,useContext} from 'react';
import {Text,View, StyleSheet,TouchableOpacity, Modal,FlatList } from 'react-native';
import Name_change from '../components/name_change';
import History_modal from '../components/tra_history';
import ModalContext from '../authContext/modalContext';
import AuthContext from '../authContext/authContext';


function Profile({navigation,route}) {
    let { change_visiblity, change_visiblity_history} = useContext(ModalContext);
    let {getData} = useContext(AuthContext)
    let { pk } = route.params;
    const [parent_id,setParentId] = useState(0);
    const [accessToken,setAccessToken] = useState(null);
    const [customer,setCutomer] = useState(null)
    const [orders,setOrders] = useState(null)
    const [children,setChildren] = useState(null)
    const Profile_call = async () => {
        const response = await fetch(`http://192.168.1.146:8000/api/profile/${pk}`,{
            method:'GET',
            headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,  
                }  ,
        })
        const data = await response.json()
        if(response.status === 200){
            setCutomer(data?.customer)
            setOrders(data?.orders)
            setChildren(data?.children)
            
            setParentId(parseInt(data?.customer?.parent))
            
        }else{
            console.log("somethin went wrong status is not 200 ")
        }
    }
    
    let get_access_token = async ()=>{
        tokens = await getData()
        setAccessToken(tokens.access)
       
     }

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
    const all_dependents = ({item})=>{
        return (
            <TouchableOpacity style={styles.listItemTouch}>
            <View style={styles.listItem} key={item.id}>
            
                <TouchableOpacity style={[styles.itemColumn,styles.smallShow]} onPress={()=>navigation.navigate("Profile")}>
                    <Text>{item.customer.id}</Text>
                </TouchableOpacity>
                <Text style={styles.itemColumn}>{item.name} {item.last}</Text>
                <Text style={[styles.itemColumn,styles.smallShow]}>{item.total} $</Text>               
            </View>
        </TouchableOpacity>
        )
    }
     

    
    useEffect(()=>{
        get_access_token()    
        },[])
    useEffect(()=>{
           Profile_call()   
            },[accessToken])
    
  return (
    <View style={styles.container}>
    {customer ? 
    <View style={styles.container}>
        <View style={styles.topOptions}> 
            <View style={styles.customerInfo}>
                <Text style={styles.infoText}>{pk}</Text>
                <Text style={styles.infoText}>{customer?.name} {customer?.last}</Text>
                <Text style={styles.infoText}>PArent: <TouchableOpacity >
                                <Text style={styles.infoText}>{parent_id ? parent_id :"No Parent"}</Text>
                </TouchableOpacity>
                
                </Text>
            </View>
            <View> 
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate("Order_add",{
                    pk:pk,
                    profile_name:customer?.name,
                    profile_last:customer?.last,
                    accessToken:accessToken,
                    customer:customer,
                })}>
                                <Text>Add order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={change_visiblity}>
                                <Text>Name Change</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Name_change name={customer.name} last={customer.last} parent_id={parent_id} pk={pk}/>
        <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}> Most Recent Transaction</Text>
                <FlatList
                data = {orders}
                keyExtractor={item => item.id}
                renderItem = {most_recent_orders_compononets}
                />

                
        </View>
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>All Dependents</Text>
            
            <FlatList
                data = {children}
                keyExtractor={item => item.id}
                renderItem = {all_dependents}
                />
        </View>
        <View style={styles.moneyInfo}>
            <Text>Total amount:</Text>
            <Text>{customer.total}$ </Text>
        </View>
        <TouchableOpacity style={[styles.buttonContainer,styles.transactionButton]}  onPress={change_visiblity_history}>
                <Text>Transaction History</Text>
        </TouchableOpacity>
        <History_modal orders={orders}/>
    </View>
     : <Text>Loading ...</Text>}
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