import React, {useState,useEffect} from 'react';
import {Text,View, StyleSheet, TextInput,Button, TouchableOpacity} from 'react-native';
import Checkbox from 'expo-checkbox';
import {Picker} from '@react-native-picker/picker';


function Order_add({navigation,route}) {
    const [description,setDescription] = useState(null)
    const [price,setPrice] = useState(null)
    const [is_paid,setIsPaid] = useState(false)
    const [who_paid,setWhoPaid] = useState(null)
    const [payment_method,setPaymentMethod] = useState(null)
    let {accessToken,profile_name,profile_last,pk,customer} = route.params
    
    const submitHandler = () => {
        console.log("hello world")
    }

      // send order to bacend 
      const order_add_api = async () => {
        const response = await fetch(`http://192.168.1.146:8000/api/order_add/${pk}`,{
            method:'POST',
            headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,  
                },
            body: JSON.stringify({description:description,
                    price:price,
                    is_paid:is_paid,
                    who_paid:who_paid,
                    payment_method:payment_method,
                    
        }),
        })
        const data = await response.json()
        if(response.status === 200){
           console.log("order has been added")
           navigation.navigate("Profile",{
               pk:pk,
           })
            
        }else{
            console.log("somethin went wrong status is not 200 ")
        }
    }
    useEffect(()=>{
        
       
    },[])
    return (
        
            
            <View style={styles.container}>
                <Text>Name :</Text>
                <Text style={styles.input}>
                    {profile_name}
                </Text>
                <Text>Last :</Text>
                <Text style={styles.input}>
                    {profile_last}
                </Text>
                <Text>Description :</Text>
                <TextInput
                style={styles.input}
                maxLength={50}
                onChangeText={(val)=>setDescription(val)}
                />
                <Text>Price :</Text>
                <TextInput
                style={styles.input}
                maxLength={30}
                onChangeText={(val)=>setPrice(val)}
                />
                <Text>Is Paid :</Text>
                <Checkbox
                style={styles.checkbox}
                value={is_paid}
                onValueChange={()=>setIsPaid((prev)=>!prev)}
                />
                
                <Text>Who paid :</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        style={styles.picker}
                        selectedValue={who_paid}
                        onValueChange={(itemValue, itemIndex) =>
                            setWhoPaid(itemValue)
                        }>
                        <Picker.Item label="NaN" value="NaN" />
                        <Picker.Item label="Customer" value={customer.id} />
                        <Picker.Item label="Parent" value={customer.parent} />
                    </Picker>
                </View>
                <Text>Method :</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        style={styles.picker}
                        selectedValue={payment_method}
                        onValueChange={(itemValue, itemIndex) =>{
                                setPaymentMethod(itemValue)  
                        }}>
                        <Picker.Item style={styles.itemStyle} label="NAN" value="NaN" />
                        <Picker.Item style={styles.itemStyle} label="CASH" value="CASH" />
                        <Picker.Item style={styles.itemStyle}  label="CARD" value="CARD" />
                    </Picker>
                </View>
            <TouchableOpacity style={styles.buttonContainer}  onPress={order_add_api}>
                <Text style={styles.buttonText}>Order Add</Text>
            </TouchableOpacity>
            </View>
      
    )
    }

export default Order_add


const styles= StyleSheet.create({
    buttonContainer:{
        marginTop:30,
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
    checkbox:{
        marginTop:5,
        marginBottom:30,
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
    link:{
        padding:5,
        color:"green",
    },
    picker:{
        color:"black",
        width:200,
        textAlign:"center",
    },
    pickerContainer:{
        borderColor: 'green',
          borderBottomWidth: 2,
          marginTop: 30,
  
          width: 200,
    },
    itemStyle:{
        fontSize: 15,
        height: 75,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    }

})