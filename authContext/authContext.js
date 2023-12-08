import React, {createContext,useState} from 'react';
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext()

export default AuthContext;



export const AuthProvider = ({children})=>{
    const [authTokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState(null)
    // const [loading,setLoading] = useState(false)

    
    const loginUser = async (email, password) => {
        const response = await fetch("http://192.168.1.146:8000/api/token/",{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({"email":email,"password":password}),   


            
        })
        const data = await response.json()
        if(response.status === 200){
            setAuthTokens(data)
            console.log("myuser",jwt_decode(data.access))
            setUser(jwt_decode(data.access))
            storeData(JSON.stringify(data))
        }else{
            console.log("somethin went wrong status is not 200 ")
        }
    }
      // const login_func =async (email,password) =>{
        
    //     let data ={email: email, password: password} 
    //     storeData(data)  
    // }

    const storeData = async (value) => {
        try {
         
          await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
          // saving error
        }
      }
    
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key')
           return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch(e) {
          // error reading value
        }
      }
  
    let contextData ={
        loginUser: loginUser,
        getData: getData,
        user:user,

    }
    return(
        <AuthContext.Provider value={contextData}>
                {children}
        </AuthContext.Provider>)
}
