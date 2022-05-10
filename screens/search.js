import React,{useState,useEffect} from 'react';
import {Text,View, StyleSheet, TextInput,Keyboard,TouchableWithoutFeedback, TouchableOpacity, FlatList} from 'react-native';



function Search() {
    const [name,setName] = useState(null);
    const [people,setPeople] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false)
    const search_api = async () => {
        const response = await fetch(`http://192.168.1.146:8000/api/search/`,{
            method:'GET',
            headers:{
                    "Content-Type": "application/json",
                },
            
        })
        const data = await response.json()
        if(response.status === 200){
          setPeople(data?.customers)
          
            
        }else{
            console.log("somethin went wrong status is not 200 ")
        }
    }
    useEffect(()=>{
        search_api()
        setIsLoaded(true)
    },[])

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
    {isLoaded ?
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
            data={people.filter(person=>{
                if(name=="" || name==null ){
                    return person
                }else{
                    return person.name.includes(name)
                }
                
            })}
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
:<View><Text>Loading ...</Text></View>}
    
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



   