import React, {createContext,useState} from 'react';


const ModalContext = createContext()

export default ModalContext;


export const ModalProvider = ({children})=>{
    const [nameChangeModalVisible,setNameChangeModalVisible] = useState(false);
    const [traHistoryModalVisible,setTraHistoryModalVisible] = useState(false);
    const change_visiblity_name = () =>{
        setNameChangeModalVisible(!nameChangeModalVisible)
    };
    const change_visiblity_history = () =>{
        setTraHistoryModalVisible(!traHistoryModalVisible)
    };
    let contextData ={
        change_visiblity: change_visiblity_name,
        modalVisible: nameChangeModalVisible,
        historyVisible:traHistoryModalVisible,
        change_visiblity_history:change_visiblity_history,

    }
    return(
        <ModalContext.Provider value={contextData}>
                {children}
        </ModalContext.Provider>)
}